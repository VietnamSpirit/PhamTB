/* -*- mode: javascript; js-indent-level: 2 -*- */
'use strict';

// Override these settings
var defaultRootName = 'Phạm Nam'; // Matches your data
var lineHeight = 280;
var photoDir = 'Photos/giapha/'; // Matches your path

// Rendering settings that user can change
var includeAll = false;
var downLimit = Infinity;
var rootName = defaultRootName;

// Stateful global helpers
var imageTracker = { numCreated: 0, numDone: 0, allCreated: false };

// Basic parsing functions
function isPerson(name) { return !name.includes(' + '); }
function isUnion(name) { return name.includes(' + '); }

// Process JSON data from data.js
function getEntries() {
    console.log("getEntries: Starting");
    const entries = {};
    const unions = new Map();

    datajs.forEach(person => {
        const name = person["Real Name"];
        entries[name] = [];

        // Add lifespan
        const birth = person["Birthyear"] || '';
        const death = person["Death Date"] || '';
        if (birth || death) {
            entries[name].push(`l: ${birth}-${death}`);
        }

        // Add address and notes
        if (person["Address"]) {
            entries[name].push(`n: Address: ${person["Address"]}`);
        }
        if (person["Note"]) {
            entries[name].push(`n: ${person["Note"]}`);
        }
        if (person["Photo"]) {
            entries[name].push(`p: ${person["Photo"]}`);
        }

        // Handle parent-child relationships (unions)
        if (person["Gốc"] && person["Gốc"] !== null) {
            const parentId = person["Gốc"].replace('#', '');
            const parent = datajs.find(p => p["BranchCode"] === parentId);
            if (parent) {
                const parentName = parent["Real Name"];
                let spouse = datajs.find(p => p["BranchCode"].startsWith(parentId + 'w') && p["Generation"] === parent["Generation"]);
                if (!spouse) spouse = { "Real Name": "?" };
                const unionName = `${parentName} + ${spouse["Real Name"]}`;
                if (!entries[unionName]) {
                    entries[unionName] = [];
                }
                if (!unions.has(unionName)) {
                    unions.set(unionName, []);
                }
                unions.get(unionName).push(name);
            }
        }
    });

    unions.forEach((children, unionName) => {
        if (children.length > 0) {
            entries[unionName].push(`c: ${children.join(', ')}`);
        }
    });

    console.log("getEntries: Completed with", Object.keys(entries).length, "entries");
    return entries;
}

// Rewrite as undirected bipartite graph
function getNeighbours(entries) {
    const result = {};
    for (let name of Object.keys(entries)) result[name] = [];

    function addHalfEdge(x, y) {
        if (!result[x]) result[x] = [];
        result[x].push(y);
    }

    for (let [name, props] of Object.entries(entries)) {
        if (isPerson(name)) continue;
        const [p1, p2] = name.split(' + ').map(x => x.trim());
        const children = props.filter(p => p.startsWith('c: '))
                            .flatMap(p => p.substring(3).split(', '));
        for (const x of children.concat([p1, p2])) {
            addHalfEdge(name, x);
            addHalfEdge(x, name);
        }
    }
    return result;
}

// Utility functions
function getUnion(person, neighbours, side) {
    const result = [];
    for (let name of neighbours[person]) {
        const members = name.split(' + ');
        if (members[1 - side] === person) result.push(name);
    }
    return result.length === 0 ? null : result.length === 1 ? result[0] : errorOut(person + ' has two unions on side ' + side);
}

function getLeftUnion(person, neighbours) { return getUnion(person, neighbours, 0); }
function getRightUnion(person, neighbours) { return getUnion(person, neighbours, 1); }
function getAboveUnion(person, neighbours) {
    for (let name of neighbours[person]) {
        if (!name.split(' + ').includes(person)) return name;
    }
    return null;
}
function getChildren(union, neighbours) {
    return union === null ? [] : neighbours[union].filter(name => !union.split(' + ').includes(name));
}
function shift(layout, delta, sign = 1) {
    const [dx, dy] = [delta.x, delta.y];
    for (const pt of Object.values(layout)) {
        pt.x += sign * dx;
        pt.y += sign * dy;
    }
}
function showDiv(div, displayMode = false) {
    div.style[displayMode ? 'display' : 'visibility'] = displayMode ? 'block' : '';
}
function hideDiv(div, displayMode = false) {
    div.style[displayMode ? 'display' : 'visibility'] = displayMode ? 'none' : 'hidden';
}
function xRadius(name, divs) { return isUnion(name) ? 0 : paddingAmount + divs[name].offsetWidth / 2; }
function rowRanges(layout, divs) {
    const result = {};
    for (const [name, pt] of Object.entries(layout)) {
        const delta = xRadius(name, divs);
        result[pt.y] = result[pt.y] || { min: Infinity, max: -Infinity };
        result[pt.y].min = Math.min(result[pt.y].min, pt.x - delta);
        result[pt.y].max = Math.max(result[pt.y].max, pt.x + delta);
    }
    return result;
}
function collides(left, right, divs) {
    const layers = {};
    for (const [name, pt] of Object.entries(left).concat(Object.entries(right))) {
        layers[pt.y] = layers[pt.y] || [];
        layers[pt.y].push([pt.x - xRadius(name, divs), pt.x + xRadius(name, divs)]);
    }
    for (const intervals of Object.values(layers)) {
        const sorted = intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
        for (let i = 0; i < sorted.length - 1; i++) {
            if (sorted[i][1] > sorted[i + 1][0]) return true;
        }
    }
    return false;
}
function mergedLayout(left, right, divs, moveRight = true, tryUnder = false) {
    if (tryUnder && !collides(left, right, divs)) return Object.assign({}, left, right);
    const lbounds = rowRanges(left, divs);
    const rbounds = rowRanges(right, divs);
    let shiftage = null;
    for (const y of Object.keys(lbounds)) {
        if (rbounds[y]) {
            const delta = lbounds[y].max - rbounds[y].min;
            shiftage = shiftage === null ? delta : Math.max(shiftage, delta);
        }
    }
    if (shiftage === null) throw "merge without common y";
    shift(moveRight ? right : left, { x: moveRight ? shiftage : -shiftage, y: 0 });
    return Object.assign({}, left, right);
}
Set.prototype.union = function(setB) {
    const union = new Set(this);
    for (const elem of setB) union.add(elem);
    return union;
};
function getVisibleNodes(name, pred, neighbours, path = { allowUp: true, downsLeft: downLimit, desc: true }) {
    if (includeAll) return new Set(Object.keys(neighbours));
    const getNodes = (newName, newPath) => {
        if (newName === null || newName === pred) return new Set([]);
        return getVisibleNodes(newName, name, neighbours, Object.assign({}, path, newPath));
    };
    if (isPerson(name)) {
        const leftUnion = getLeftUnion(name, neighbours);
        const rightUnion = getRightUnion(name, neighbours);
        const aboveUnion = path.allowUp ? getAboveUnion(name, neighbours) : null;
        return new Set([name])
            .union(getNodes(aboveUnion, { desc: false }))
            .union(getNodes(leftUnion, { allowUp: false }))
            .union(getNodes(rightUnion, { allowUp: false }));
    } else {
        const [leftParent, rightParent] = name.split(' + ');
        const children = (!path.desc && path.downsLeft === 0) ? [] : getChildren(name, neighbours);
        let result = new Set([name])
            .union(getNodes(leftParent, {}))
            .union(getNodes(rightParent, {}));
        for (const child of children) {
            result = result.union(getNodes(child, { allowUp: false, downsLeft: path.downsLeft - 1 }));
        }
        return result;
    }
}
function dumbLayout(name, pred, neighbours, divs, visibleNodes) {
    const doLayout = (next, defaultLocation = { x: 0, y: 0 }) => {
        if (next === null || !visibleNodes.has(next)) return null;
        if (next === pred) return { [name]: { x: 0, y: 0 }, [next]: defaultLocation };
        const result = dumbLayout(next, name, neighbours, divs, visibleNodes);
        if (result) shift(result, result[name], -1);
        return result;
    };
    let mainLayout = { [name]: { x: 0, y: 0 } }, leftLayout, rightLayout;
    if (isPerson(name)) {
        const leftUnion = getLeftUnion(name, neighbours);
        const rightUnion = getRightUnion(name, neighbours);
        const aboveUnion = getAboveUnion(name, neighbours);
        leftLayout = doLayout(leftUnion);
        rightLayout = doLayout(rightUnion);
        const aboveLayout = doLayout(aboveUnion, { x: 0, y: -1 });
        if (aboveLayout) mainLayout = aboveLayout;
    } else {
        const [leftParent, rightParent] = name.split(' + ');
        const children = getChildren(name, neighbours).filter(x => visibleNodes.has(x));
        leftLayout = doLayout(leftParent);
        rightLayout = doLayout(rightParent);
        const childLayouts = children.map(child => doLayout(child, { x: 0, y: 1 }));
        if (childLayouts.length > 0) {
            for (const childLayout of childLayouts) delete childLayout[name];
            mainLayout = childLayouts.reduce((acc, curr) => mergedLayout(acc, curr, divs), childLayouts[0]);
            const childXs = children.map(child => mainLayout[child].x);
            const middle = (Math.min(...childXs) + Math.max(...childXs)) / 2;
            shift(mainLayout, { x: -middle, y: 0 });
            mainLayout[name] = { x: 0, y: 0 };
        }
    }
    if (leftLayout) { delete leftLayout[name]; mainLayout = mergedLayout(leftLayout, mainLayout, divs, false, isPerson(name)); }
    if (rightLayout) { delete rightLayout[name]; mainLayout = mergedLayout(mainLayout, rightLayout, divs, true, isPerson(name)); }
    return mainLayout;
}
function boundingBox(layout, divs) {
    const xbound = (entry, sign) => entry[1].x + (isUnion(entry[0]) ? 0 : sign * (paddingAmount + divs[entry[0]].offsetWidth / 2));
    return {
        bottomLeft: {
            x: Math.min(...Object.entries(layout).map(entry => xbound(entry, -1))),
            y: Math.min(...Object.values(layout).map(pt => pt.y))
        },
        topRight: {
            x: Math.max(...Object.entries(layout).map(entry => xbound(entry, +1))),
            y: Math.max(...Object.values(layout).map(pt => pt.y))
        }
    };
}
function adjustUnions(neighbours, layout, divs) {
    for (const node of Object.keys(layout)) {
        if (!isUnion(node)) continue;
        const children = getRenderedChildren(node, neighbours, layout);
        if (children.length === 0) continue;
        const [p1, p2] = node.split(' + ');
        const parentBottom = Math.max(layout[p1].y + divs[p1].offsetHeight / 2, layout[p2].y + divs[p2].offsetHeight / 2);
        const childTop = Math.min(...children.map(child => layout[child].y - divs[child].offsetHeight / 2));
        if (childTop < parentBottom) errorOut("Union " + node + " overlapped above/below. Try increasing lineHeight");
        layout[node].y = (parentBottom + childTop) / 2;
    }
}
function computeLayout(neighbours, divs) {
    const visibleNodes = getVisibleNodes(rootName, null, neighbours);
    const layout = dumbLayout(rootName, null, neighbours, divs, visibleNodes);
    shift(layout, boundingBox(layout, divs).bottomLeft, -1);
    shift(layout, { x: 0, y: 1 });
    for (const pt of Object.values(layout)) pt.y *= lineHeight;
    adjustUnions(neighbours, layout, divs);
    return layout;
}
function displayName(name) { return name.replace(/#.*$/g, ''); }
function photoLoadCallback() { imageTracker.numDone++; imageLoadNotify(); }
function makeDiv(name, entries, neighbours) {
    const result = document.createElement("div");
    result.onclick = () => { changeRoot(name); };
    result.className = "label";
    const lines = displayName(name).replace('-', '\u2011').split(" ");
    const nameDiv = document.createElement("div");
    lines.forEach((line, i) => {
        if (i > 0) nameDiv.appendChild(document.createElement("br"));
        nameDiv.appendChild(document.createTextNode(line));
    });
    result.appendChild(nameDiv);

    let lifespanDiv = null, photoDiv = null, info = [];
    if (entries[name]) {
        entries[name].forEach(data => {
            if (data.startsWith("l: ")) {
                lifespanDiv = document.createElement("div");
                const [birth, death] = data.substring(3).split('-');
                if (birth) lifespanDiv.appendChild(document.createTextNode(birth + (death ? '' : '\u2013')));
                if (birth && death) lifespanDiv.appendChild(document.createElement("br"));
                if (death) lifespanDiv.appendChild(document.createTextNode('\u2013' + death));
                lifespanDiv.className = "lifespan";
            }
            if (data.startsWith("p: ")) {
                photoDiv = document.createElement("img");
                imageTracker.numCreated++;
                photoDiv.onload = photoDiv.onerror = photoLoadCallback;
                photoDiv.src = data.substring(3); // Use path directly
                photoDiv.style.width = "70px";
                photoDiv = document.createElement("div").appendChild(photoDiv);
            }
            if (data.startsWith("n: ")) info.push(data.substring(3));
        });
    }

    const addMarriageInfo = (partner, union) => {
        const result = entries[union]?.filter(data => data.startsWith("n: ")).map(data => data.substring(3)).join(' ') || '';
        if (result) info.push(`With ${displayName(partner)}: ${result}`);
    };
    const leftUnion = getLeftUnion(name, neighbours);
    if (leftUnion) addMarriageInfo(leftUnion.split(' + ')[0], leftUnion);
    const rightUnion = getRightUnion(name, neighbours);
    if (rightUnion) addMarriageInfo(rightUnion.split(' + ')[1], rightUnion);

    if (photoDiv) result.appendChild(photoDiv);
    if (lifespanDiv) result.appendChild(lifespanDiv);

    const makeInfoDiv = () => {
        const ul = document.createElement("ul");
        info.forEach(item => {
            const li = document.createElement("li");
            item.split(/(http[^\s]*(?=(\s|$)))/g).forEach(tok => {
                if (tok.startsWith('http')) {
                    const a = document.createElement("a");
                    a.appendChild(document.createTextNode(tok));
                    a.href = tok;
                    a.target = '_blank';
                    li.appendChild(a);
                } else {
                    li.appendChild(document.createTextNode(tok));
                }
            });
            ul.appendChild(li);
        });
        ul.classList.add('info');
        return ul;
    };
    if (info.length) result.classList.add('has-info');

    result.onmouseover = () => {
        document.getElementById('info-pane-name').innerHTML = displayName(name);
        const details = document.getElementById('info-pane-details');
        while (details.firstChild) details.removeChild(details.firstChild);
        if (info.length) {
            details.appendChild(makeInfoDiv());
            showDiv(document.getElementById('info-pane'), true);
            hideDiv(document.getElementById('info-pane-placeholder'), true);
        } else {
            hideDiv(document.getElementById('info-pane'), true);
            showDiv(document.getElementById('info-pane-placeholder'), true);
        }
    };

    document.body.appendChild(result);
    result.style.top = "200px";
    result.style.left = "200px";
    hideDiv(result);
    return result;
}
function makeDivs(entries, neighbours) {
    const result = {};
    for (const name of Object.keys(neighbours)) {
        if (isPerson(name)) result[name] = makeDiv(name, entries, neighbours);
    }
    imageTracker.allCreated = true;
    return result;
}
function placeDiv(div, x, y) {
    showDiv(div);
    div.style.top = (y - div.offsetHeight / 2) + 'px';
    div.style.left = (x - div.offsetWidth / 2) + 'px';
}
function createLine(x1, y1, x2, y2, lineClass) {
    const line = document.createElement("div");
    const a = x1 - x2, b = y1 - y2, c = Math.sqrt(a * a + b * b);
    const sx = (x1 + x2) / 2, sy = (y1 + y2) / 2;
    const x = sx - c / 2, y = sy;
    const alpha = Math.PI - Math.atan2(-b, a);
    line.setAttribute('style', `border-style: solid; width: ${c}px; height: 0px; -moz-transform: rotate(${alpha}rad); -webkit-transform: rotate(${alpha}rad); -o-transform: rotate(${alpha}rad); -ms-transform: rotate(${alpha}rad); position: absolute; top: ${y}px; left: ${x}px;`);
    line.classList.add('drawn-line', lineClass);
    return line;
}
function drawLine(p, q, lineClass) { document.body.appendChild(createLine(p.x, p.y, q.x, q.y, lineClass)); }
function getRenderedChildren(union, neighbours, layout) {
    return getChildren(union, neighbours).filter(child => layout.hasOwnProperty(child));
}
function hasRenderedChildren(union, neighbours, layout) { return getRenderedChildren(union, neighbours, layout).length > 0; }
function connect(node1, node2, layout, neighbours, divs, lineClass) {
    const [person, union] = isPerson(node1) ? [node1, node2] : [node2, node1];
    if (union.split(' + ').includes(person)) {
        if (hasRenderedChildren(union, neighbours, layout)) {
            drawLine({ x: layout[person].x, y: layout[person].y + divs[person].offsetHeight / 2 - 4 }, { x: layout[union].x, y: layout[union].y }, lineClass);
        } else {
            const isLeftPersonOfUnion = union.split(' + ')[0] === person;
            drawLine({ x: layout[person].x + (isLeftPersonOfUnion ? 1 : -1) * divs[person].offsetWidth / 2, y: layout[person].y }, { x: layout[union].x, y: layout[union].y }, lineClass);
        }
    } else {
        drawLine({ x: layout[person].x, y: layout[person].y - divs[person].offsetHeight / 2 }, { x: layout[union].x, y: layout[union].y }, lineClass);
    }
}
function scrollToElement(element) {
    const rect = element.getBoundingClientRect();
    const y = window.pageYOffset + rect.top + element.offsetHeight / 2 - window.innerHeight / 2;
    const x = window.pageXOffset + rect.left + element.offsetWidth / 2 - window.innerWidth / 2;
    window.scrollTo(x, y - document.getElementById('control-panel').offsetHeight / 2);
    element.focus();
}
function traverse(name, pred, neighbours, divs, layout, mode, flags = { ancestor: true, descendant: true, blood: true }) {
    const posClass = pred === null ? "pos-root" : flags.ancestor ? "pos-ancestor" : flags.descendant ? "pos-descendant" : flags.blood ? "pos-blood" : "pos-other";
    if (mode === "drawConnections" && layout[name] && layout[pred]) {
        if (isUnion(name) && name.split(' + ').includes(pred) && !hasRenderedChildren(name, neighbours, layout)) {
            connect(name, pred, layout, neighbours, divs, "pos-other");
        } else {
            connect(name, pred, layout, neighbours, divs, posClass);
        }
    }
    const recur = (newName, newFlags) => {
        if (newName === null || newName === pred) return;
        traverse(newName, name, neighbours, divs, layout, mode, Object.assign({}, flags, newFlags));
    };
    if (isPerson(name)) {
        if (mode === "setPeopleClasses") divs[name].classList.add(posClass);
        const leftUnion = getLeftUnion(name, neighbour