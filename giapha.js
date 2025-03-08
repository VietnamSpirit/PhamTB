//<script>
        const correctPassword = "Thuy";

        function checkPassword() {
            const input = document.getElementById('password-input').value;
            if (input === correctPassword) {
                document.getElementById('login-panel').style.display = 'none';
                document.getElementById('tree-content').style.display = 'block';
                window.onload(); // Trigger tree loading
            } else {
                alert("Incorrect password!");
                document.getElementById('subtree-input').style.display = 'block';
            }
        }
        // Load the biggest tree by default (root ID 0 or first entry)
        window.onload = function() {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            if (id && datajs.some(p => p.ID === parseInt(id))) {
                loadSubtree(id);
            } else {
                loadFullTree();
            }
        };

        function loadFullTree() {
            const rootId = 0; // Assuming ID 0 is the root of the biggest tree
            if (typeof drawTree === 'function' && window.state) {
                const rootPerson = datajs.find(p => p.ID === rootId) || datajs[0]; // Fallback to first entry
                rootName = rootPerson["Real Name"];
                document.getElementById('tree').innerHTML = ''; // Clear previous tree
                drawTree(window.state.divs, window.state.neighbours, rootId, Infinity); // Biggest tree
            } else {
                console.error('Family tree functions not available. Check family.js.');
                document.getElementById('tree').innerHTML = '<p style="color:red;">Error: Family tree failed to load.</p>';
            }
        }

        function loadSubtree(id = null) {
            
            const personId = id || parseInt(document.getElementById('person-id').value) || parseInt(document.getElementById('person-id-form').value);
            console.log('personId:', personId); // Debug output
            if (!personId || !datajs.some(p => p.ID === personId)) {
                alert("Invalid Person ID!");
                return;
            }
            const person = datajs.find(p => p.ID === personId);
            rootName = person["Real Name"];
            if (typeof drawTree === 'function' && window.state) {
                document.getElementById('tree').innerHTML = ''; // Clear previous tree
                drawTree(window.state.divs, window.state.neighbours, personId, 3); // 4 generations (0-3)
            } else {
                console.error('Family tree functions not available. Check family.js.');
                document.getElementById('tree').innerHTML = '<p style="color:red;">Error: Family tree failed to load.</p>';
            }
        }
  //  </script>