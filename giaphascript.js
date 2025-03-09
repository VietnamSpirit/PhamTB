function checkPassword() {
    const passwordInput = document.getElementById('password-input').value;
    if (passwordInput === "Thuy") {
        console.log("Password correct");
        document.getElementById('login-panel').style.display = 'none';
        document.getElementById('tree-content').style.display = 'block';
        document.getElementById('control-panel').style.display = 'block';
        document.getElementById('subtree-input').style.display = 'block';
        loadTreeWhenReady();
    } else {
        alert('Incorrect password');
    }
}

function loadTreeWhenReady() {
    console.log("loadTreeWhenReady, window.state:", window.state);
    if (window.state && window.state.divs && window.state.neighbours) {
        console.log("Drawing tree");
        try {
            drawTree(window.state.divs, window.state.neighbours);
        } catch (error) {
            console.error("Draw tree error:", error);
            alert("Failed to load tree: " + error.message);
        }
    } else {
        console.log("Awaiting initialization");
        window.addEventListener('familyTreeInitialized', function handler() {
            console.log("Initialized, drawing tree");
            try {
                drawTree(window.state.divs, window.state.neighbours);
            } catch (error) {
                console.error("Draw tree error:", error);
                alert("Failed to load tree: " + error.message);
            }
            window.removeEventListener('familyTreeInitialized', handler);
        }, { once: true });
    }
}

window.loadSubtree = function() {
    const personId = document.getElementById('person-id-form').value || document.getElementById('person-id').value;
    console.log('Loading subtree for ID:', personId);
    if (!personId) {
        alert("Please enter a valid Person ID!");
        return;
    }
    console.log("datajs IDs:", datajs.map(p => p["ID"]));
    if (datajs.some(p => p["ID"] === String(personId))) {
        console.log("ID found:", personId);
        if (window.state && window.state.divs && window.state.neighbours) {
            changeRoot(personId);
            redraw();
        } else {
            window.addEventListener('familyTreeInitialized', function handler() {
                changeRoot(personId);
                redraw();
                window.removeEventListener('familyTreeInitialized', handler);
            }, { once: true });
        }
    } else {
        alert("Person ID not found!");
        console.error("No person found for ID:", personId);
    }
};