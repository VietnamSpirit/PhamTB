/* -*- mode: javascript; js-indent-level: 2 -*- */
'use strict';

// Override these settings
var defaultRootId = "1"; // Default root ID (Phạm Nam)
var lineHeight = 280;
var photoDir = 'Photos/giapha/';

// Rendering settings that user can change
var includeAll = false;
var downLimit = Infinity;
var rootId = defaultRootId;

// Stateful global helpers
var imageTracker = { numCreated: 0, numDone: 0, allCreated: false };

// Basic parsing functions
function isPerson(id) { return !id.includes(' + '); }
function isUnion(id) { return id.includes(' + '); }

// Process JSON data from data.js using string IDs
function getEntries() {
    console.log("getEntries: Starting");
    const entries = {};
    const unions = new Map(); // Map of "fatherID + motherID" to children IDs

    datajs.forEach(person => {
        const id = person["ID"];
        entries[id] = [];

        // Add lifespan
        const birth = person["Birthyear"] || '';
        const death = person["Death Date"] || '';
        if (birth || death) {
            entries[id].push(`l: ${birth}-${death}`);
        }

        // Add address, notes, and photo
        if (person["Address"]) entries[id].push(`n: Address: ${person["Address"]}`);
        if (person["Note"]) entries[id].push(`n: ${person["Note"]}`);
        if (person["Photo"]) entries[id].push(`p: ${person["Photo"]}`);

        // Handle parent-child relationships, prioritizing Mother ID
        const fatherId = person["Father ID"];
        const motherId = person["Mother ID"];
        if (motherId && datajs.some(p => p["ID"] === motherId)) { // Only create union if Mother ID exists in datajs
            const unionId = `${fatherId || '?'}+${motherId}`;
            if (!entries[unionId]) entries[unionId] = [];
            if (!unions.has(unionId)) unions.set(unionId, []);
            unions.get(unionId).push(id);
        }
    });

    unions.forEach((children, unionId) => {
        if (children.length > 0) {
            entries[unionId].push(`c: ${children.join(', ')}`);
        }
    });

    console.log("getEntries: Completed with", Object.keys(entries).length, "entries");
    return entries;
}

// Build undirected bipartite graph using string IDs
function getNeighbours(entries) {
    const result = {};
    for (let id of Object.keys(entries)) result[id] = [];

    function addHalfEdge(x, y) {
        if (!result[x]) result[x] = [];
        result[x].push(y);
    }

    for (let [id, props] of Object.entries(entries)) {
        if (isPerson(id)) continue;
        const [fatherId, motherId] = id.split(' + ');
        const children = props.filter(p => p.startsWith('c: '))
                             .flatMap(p => p.substring(3).split(', '));
        for (const x of children.concat([fatherId, motherId].filter(x => x !== '?'))) {
            addHalfEdge(id, x);
            addHalfEdge(x, id);
        }
    }
    return result;
}

// Utility functions updated for string IDs
function getUnion(personId, neighbours, side) {
    const result = [];
    for (let unionId of neighbours[personId]) {
        const [fatherId, motherId] = unionId.split(' + ');
        if ((side === 0 && fatherId === personId) || (side === 1 && motherId === personId)) result.push(unionId);
    }
    return result.length === 0 ? null : result.length === 1 ? result[0] : errorOut(`Person ${personId} has multiple unions on side ${side}`);
}

function getLeftUnion(personId, neighbours) { return getUnion(personId, neighbours, 0); } // Father
function getRightUnion(personId, neighbours) { return getUnion(personId, neighbours, 1); } // Mother
function getAboveUnion(personId, neighbours) {
    for (let unionId of neighbours[personId]) {
        if (!unionId.split(' + ').includes(personId)) return unionId;
    }
    return null;
}
function getChildren(unionId, neighbours) {
    return unionId === null ? [] : neighbours[unionId].filter(id => !unionId.split(' + ').includes(id));
}

// Layout and rendering functions (unchanged except for string ID usage)
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
function xRadius(id, divs) { return isUnion(id) ? 0 : paddingAmount + divs[id].offsetWidth / 2; }
function rowRanges(layout, divs) {
    const result = {};
    for (const [id, pt] of Object.entries(layout)) {
        const delta = xRadius(id, divs);
        result[pt.y] = result[pt.y] || { min: Infinity, max: -Infinity };
        result[pt.y].min = Math.min(result[pt.y].min, pt.x - delta);
        result[pt.y].max = Math.max(result[pt.y].max, pt.x + delta);
    }
    return result;
}
function collides(left, right, divs) {
    const layers = {};
    for (const [id, pt] of Object.entries(left).concat(Object.entries(right))) {
        layers[pt.y] = layers[pt.y] || [];
        layers[pt.y].push([pt.x - xRadius(id, divs), pt.x + xRadius(id, divs)]);
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
function getVisibleNodes(id, pred, neighbours, path = { allowUp: true, downsLeft: downLimit, desc: true }) {
    if (includeAll) return new Set(Object.keys(neighbours));
    const getNodes = (newId, newPath) => {
        if (newId === null || newId === pred) return new Set([]);
        return getVisibleNodes(newId, id, neighbours, Object.assign({}, path, newPath));
    };
    if (isPerson(id)) {
        const leftUnion = getLeftUnion(id, neighbours);
        const rightUnion = getRightUnion(id, neighbours);
        const aboveUnion = path.allowUp ? getAboveUnion(id, neighbours) : null;
        return new Set([id])
            .union(getNodes(aboveUnion, { desc: false }))
            .union(getNodes(leftUnion, { allowUp: false }))
            .union(getNodes(rightUnion, { allowUp: false }));
    } else {
        const [fatherId, motherId] = id.split(' + ');
        const children = (!path.desc && path.downsLeft === 0) ? [] : getChildren(id, neighbours);
        let result = new Set([id])
            .union(getNodes(fatherId, {}))
            .union(getNodes(motherId, {}));
        for (const child of children) {
            result = result.union(getNodes(child, { allowUp: false, downsLeft: path.downsLeft - 1 }));
        }
        return result;
    }
}
function dumbLayout(id, pred, neighbours, divs, visibleNodes) {
    const doLayout = (next, defaultLocation = { x: 0, y: 0 }) => {
        if (next === null || !visibleNodes.has(next)) return null;
        if (next === pred) return { [id]: { x: 0, y: 0 }, [next]: defaultLocation };
        const result = dumbLayout(next, id, neighbours, divs, visibleNodes);
        if (result) shift(result, result[id], -1);
        return result;
    };
    let mainLayout = { [id]: { x: 0, y: 0 } }, leftLayout, rightLayout;
    if (isPerson(id)) {
        const leftUnion = getLeftUnion(id, neighbours);
        const rightUnion = getRightUnion(id, neighbours);
        const aboveUnion = getAboveUnion(id, neighbours);
        leftLayout = doLayout(leftUnion);
        rightLayout = doLayout(rightUnion);
        const aboveLayout = doLayout(aboveUnion, { x: 0, y: -1 });
        if (aboveLayout) mainLayout = aboveLayout;
    } else {
        const [fatherId, motherId] = id.split(' + ');
        const children = getChildren(id, neighbours).filter(x => visibleNodes.has(x));
        leftLayout = doLayout(fatherId);
        rightLayout = doLayout(motherId);
        const childLayouts = children.map(child => doLayout(child, { x: 0, y: 1 }));
        if (childLayouts.length > 0) {
            for (const childLayout of childLayouts) delete childLayout[id];
            mainLayout = childLayouts.reduce((acc, curr) => mergedLayout(acc, curr, divs), childLayouts[0]);
            const childXs = children.map(child => mainLayout[child].x);
            const middle = (Math.min(...childXs) + Math.max(...childXs)) / 2;
            shift(mainLayout, { x: -middle, y: 0 });
            mainLayout[id] = { x: 0, y: 0 };
        }
    }
    if (leftLayout) { delete leftLayout[id]; mainLayout = mergedLayout(leftLayout, mainLayout, divs, false, isPerson(id)); }
    if (rightLayout) { delete rightLayout[id]; mainLayout = mergedLayout(mainLayout, rightLayout, divs, true, isPerson(id)); }
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
        const parentBottom = Math.max(
            p1 && layout[p1] ? layout[p1].y + divs[p1].offsetHeight / 2 : -Infinity,
            p2 && layout[p2] ? layout[p2].y + divs[p2].offsetHeight / 2 : -Infinity
        );
        const childTop = Math.min(...children.map(child => layout[child].y - divs[child].offsetHeight / 2));
        if (childTop < parentBottom) errorOut("Union " + node + " overlapped above/below. Try increasing lineHeight");
        layout[node].y = (parentBottom + childTop) / 2;
    }
}
function computeLayout(neighbours, divs) {
    const visibleNodes = getVisibleNodes(rootId, null, neighbours);
    const layout = dumbLayout(rootId, null, neighbours, divs, visibleNodes);
    shift(layout, boundingBox(layout, divs).bottomLeft, -1);
    shift(layout, { x: 0, y: 1 });
    for (const pt of Object.values(layout)) pt.y *= lineHeight;
    adjustUnions(neighbours, layout, divs);
    return layout;
}
function displayName(id) {
    const person = datajs.find(p => p["ID"] === id);
    return person ? person["Real Name"].replace(/#.*$/g, '') : id;
}
function photoLoadCallback() { imageTracker.numDone++; imageLoadNotify(); }
function makeDiv(id, entries, neighbours) {
    const result = document.createElement("div");
    result.onclick = () => { changeRoot(id); };
    result.className = "label";
    const person = datajs.find(p => p["ID"] === id);
    const name = person ? person["Real Name"] : id;
    const lines = name.replace('-', '\u2011').split(" ");
    const nameDiv = document.createElement("div");
    lines.forEach((line, i) => {
        if (i > 0) nameDiv.appendChild(document.createElement("br"));
        nameDiv.appendChild(document.createTextNode(line));
    });
    result.appendChild(nameDiv);

    let lifespanDiv = null, photoDiv = null, info = [];
    if (entries[id]) {
        entries[id].forEach(data => {
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
                photoDiv.src = data.substring(3);
                photoDiv.style.width = "70px";
                photoDiv = document.createElement("div").appendChild(photoDiv);
            }
            if (data.startsWith("n: ")) info.push(data.substring(3));
        });
    }

    const addMarriageInfo = (partnerId, unionId) => {
        const result = entries[unionId]?.filter(data => data.startsWith("n: ")).map(data => data.substring(3)).join(' ') || '';
        if (result) info.push(`With ${displayName(partnerId)}: ${result}`);
    };
    const leftUnion = getLeftUnion(id, neighbours);
    if (leftUnion) addMarriageInfo(leftUnion.split(' + ')[0], leftUnion);
    const rightUnion = getRightUnion(id, neighbours);
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
        document.getElementById('info-pane-name').innerHTML = displayName(id);
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
    for (const id of Object.keys(neighbours)) {
        if (isPerson(id)) result[id] = makeDiv(id, entries, neighbours);
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
function getRenderedChildren(unionId, neighbours, layout) {
    return getChildren(unionId, neighbours).filter(child => layout.hasOwnProperty(child));
}
function hasRenderedChildren(unionId, neighbours, layout) { return getRenderedChildren(unionId, neighbours, layout).length > 0; }
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
function traverse(id, pred, neighbours, divs, layout, mode, flags = { ancestor: true, descendant: true, blood: true }) {
    const posClass = pred === null ? "pos-root" : flags.ancestor ? "pos-ancestor" : flags.descendant ? "pos-descendant" : flags.blood ? "pos-blood" : "pos-other";
    if (mode === "drawConnections" && layout[id] && layout[pred]) {
        if (isUnion(id) && id.split(' + ').includes(pred) && !hasRenderedChildren(id, neighbours, layout)) {
            connect(id, pred, layout, neighbours, divs, "pos-other");
        } else {
            connect(id, pred, layout, neighbours, divs, posClass);
        }
    }
    const recur = (newId, newFlags) => {
        if (newId === null || newId === pred) return;
        traverse(newId, id, neighbours, divs, layout, mode, Object.assign({}, flags, newFlags));
    };
    if (isPerson(id)) {
        if (mode === "setPeopleClasses") divs[id].classList.add(posClass);
        const leftUnion = getLeftUnion(id, neighbours);
        recur(leftUnion, { ancestor: false, blood: flags.ancestor || flags.blood });
        const rightUnion = getRightUnion(id, neighbours);
        recur(rightUnion, { ancestor: false, blood: flags.ancestor || flags.blood });
        const aboveUnion = getAboveUnion(id, neighbours);
        recur(aboveUnion, { blood: false, descendant: false });
    } else {
        const [p1, p2] = id.split(' + ');
        recur(p1, { blood: false, descendant: false });
        recur(p2, { blood: false, descendant: false });
        getChildren(id, neighbours).forEach(child => recur(child, { ancestor: false, blood: flags.ancestor || flags.blood }));
    }
}
function setPeopleClasses(rootId, neighbours, divs) { traverse(rootId, null, neighbours, divs, null, "setPeopleClasses"); }
function drawConnections(rootId, neighbours, divs, layout) { traverse(rootId, null, neighbours, divs, layout, "drawConnections"); }
function drawTree(divs, neighbours) {
    if (!divs[rootId]) throw "Selected ID not found in data: " + rootId;
    setPeopleClasses(rootId, neighbours, divs);
    const layout = computeLayout(neighbours, divs);
    const box = boundingBox(layout, divs);
    shift(layout, { x: 0, y: 0.5 * lineHeight - box.bottomLeft.y + document.getElementById('control-panel').offsetHeight });
    drawConnections(rootId, neighbours, divs, layout);
    for (const id of Object.keys(neighbours)) {
        if (isPerson(id)) {
            if (layout[id]) {
                placeDiv(divs[id], layout[id].x, layout[id].y);
            } else {
                hideDiv(divs[id]);
                divs[id].style.top = '100px';
                divs[id].style.left = '100px';
            }
        }
    }
    scrollToElement(divs[rootId]);
    updateTreeInformation(layout, divs);
}
function updateTreeInformation(layout, divs) {
    const infodiv = document.getElementById('tree-information');
    let ancestors = 0, descendants = 0, blood = 0, others = 0;
    for (const [id, div] of Object.entries(divs)) {
        if (!layout[id]) continue;
        if (div.classList.contains('pos-ancestor')) ancestors++;
        if (div.classList.contains('pos-descendant')) descendants++;
        if (div.classList.contains('pos-blood')) blood++;
        if (div.classList.contains('pos-other')) others++;
    }
    const counts = [];
    const process = (number, description, textClass) => {
        if (number > 0) counts.push(`<span class="${textClass}">${number} ${description}</span>`);
    };
    process(descendants, "descendants", "text-descendant");
    process(ancestors, "ancestors", "text-ancestor");
    process(blood, "blood relatives", "text-blood");
    process(others, "others", "text-other");
    infodiv.innerHTML = `Showing ${counts.join(counts.length > 1 ? counts.length === 2 ? " and " : ", " : "")} (total ${ancestors + blood + descendants + others + 1}).`;
}
function setVarsFromDetailOption() {
    const choice = document.getElementById('detail-picker').value;
    includeAll = choice === 'Everyone';
    downLimit = choice === 'Everyone' ? Infinity : Number(choice);
}
function updateDetail() {
    setVarsFromDetailOption();
    redraw();
    document.activeElement.blur();
}
function validateTreeStructure(neighbours) {
    const parent = {};
    const buildConnectedComponent = (curr, prev, component) => {
        if (parent[curr]) {
            let loop = [curr, prev], unroll = prev;
            while (unroll !== curr) {
                if (unroll === null) throw "Internal validation error (file a bug!)";
                unroll = parent[unroll];
                loop.push(unroll);
            }
            throw "Loop detected: " + loop;
        }
        parent[curr] = prev;
        component[curr] = true;
        neighbours[curr].forEach(x => { if (x !== prev) buildConnectedComponent(x, curr, component); });
    };
    const components = [];
    for (const id of Object.keys(neighbours)) {
        if (!parent[id]) {
            const component = {};
            buildConnectedComponent(id, null, component);
            components.push([id, component]);
        }
    }
    if (components.length > 1) throw "Multiple connected components: " + components.map(([n, c]) => `${Object.keys(c).length} connected to ${n}`).join(' | ');
}
function errorOut(error) { console.log(error); alert(error); throw error; }

window.onload = function() {
    const entries = getEntries();
    const neighbours = getNeighbours(entries);
    validateTreeStructure(neighbours);
    const divs = makeDivs(entries, neighbours);
    window.state = { entries, divs, neighbours };
    readHash();
};
function imageLoadNotify() {
    if (imageTracker.allCreated && imageTracker.numDone === imageTracker.numCreated) redraw();
}
function redraw() {
    Array.from(document.getElementsByClassName('drawn-line')).forEach(div => div.parentNode.removeChild(div));
    ["root", "ancestor", "blood", "descendant", "other"].forEach(kind => {
        Array.from(document.getElementsByClassName("pos-" + kind)).forEach(el => el.classList.remove("pos-" + kind));
    });
    drawTree(window.state.divs, window.state.neighbours);
    updateHash();
}
function changeRoot(id) { rootId = id; showRootId(); redraw(); }
function updateHash() { window.location.hash = '#' + rootId + ':' + document.getElementById('detail-picker').value; }
function showRootId() {
    const person = datajs.find(p => p["ID"] === rootId);
    document.title = person ? `${person["Real Name"]}'s Family Tree` : `Family Tree (ID: ${rootId})`;
    document.getElementById('root-name').innerText = person ? person["Real Name"] : rootId;
}
function readHash() {
    if (window.location.hash.startsWith('#')) {
        const [id, detail] = window.location.hash.substr(1).split(':');
        rootId = id;
        document.getElementById('detail-picker').value = detail;
    }
    setVarsFromDetailOption();
    showRootId();
}