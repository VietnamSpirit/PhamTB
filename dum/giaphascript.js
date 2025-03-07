document.addEventListener('DOMContentLoaded', function() {
    console.log("giaphascript.js loaded");

    function checkPassword() {
        console.log("checkPassword called");
        const passwordInput = document.getElementById('password-input').value;
        const correctPassword = "Thuy";
        if (passwordInput === correctPassword) {
            console.log("Password correct, preparing to load tree");
            document.getElementById('login-panel').style.display = 'none';
            document.getElementById('tree-content').style.display = 'block';
            document.getElementById('control-panel').style.display = 'block';
            document.getElementById('subtree-input').style.display = 'block';
            loadTreeWhenReady();
        } else {
            alert('Incorrect password');
            console.log("Incorrect password entered");
        }
    }

    function loadTreeWhenReady() {
        if (window.state && window.state.divs && window.state.neighbours) {
            console.log("window.state initialized, drawing tree");
            try {
                drawTree(window.state.divs, window.state.neighbours);
            } catch (error) {
                console.error("Error drawing tree:", error);
            }
        } else {
            console.log("window.state not initialized yet, waiting...");
            window.addEventListener('familyTreeInitialized', function handler() {
                console.log("Family tree initialized, drawing tree");
                try {
                    drawTree(window.state.divs, window.state.neighbours);
                } catch (error) {
                    console.error("Error drawing tree:", error);
                }
                window.removeEventListener('familyTreeInitialized', handler); // Clean up
            }, { once: true });
        }
    }

    window.checkPassword = checkPassword;

    const passwordInput = document.getElementById('password-input');
    if (passwordInput) {
        console.log("Password input found, attaching listener");
        passwordInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                console.log("Enter key pressed");
                checkPassword();
            }
        });
    } else {
        console.error("Password input not found");
    }

    window.loadSubtree = function() {
        const personId = document.getElementById('person-id-form').value || document.getElementById('person-id').value;
        console.log('Loading subtree for ID:', personId);
        if (window.state && window.state.divs && window.state.neighbours) {
            try {
                const personName = getPersonNameById(personId);
                if (personName) {
                    changeRoot(personName);
                    redraw();
                } else {
                    console.error("No person found for ID:", personId);
                    alert("Person ID not found!");
                }
            } catch (error) {
                console.error("Error loading subtree:", error);
            }
        } else {
            console.log("window.state not initialized yet, waiting for subtree...");
            window.addEventListener('familyTreeInitialized', function handler() {
                try {
                    const personName = getPersonNameById(personId);
                    if (personName) {
                        changeRoot(personName);
                        redraw();
                    } else {
                        console.error("No person found for ID:", personId);
                        alert("Person ID not found!");
                    }
                } catch (error) {
                    console.error("Error loading subtree:", error);
                }
                window.removeEventListener('familyTreeInitialized', handler); // Clean up
            }, { once: true });
        }
    };
});