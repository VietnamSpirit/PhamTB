document.addEventListener('DOMContentLoaded', function() {
    // Password check function
    function checkPassword() {
        const passwordInput = document.getElementById('password-input').value;
        const correctPassword = "Thuy";
        if (passwordInput === correctPassword) {
            document.getElementById('login-panel').style.display = 'none';
            document.getElementById('tree-content').style.display = 'block';
            document.getElementById('control-panel').style.display = 'block';
            document.getElementById('subtree-input').style.display = 'block';
            loadTree(); // Assuming this function exists in family.js or elsewhere
        } else {
            alert('Incorrect password');
        }
    }

    // Fallback Enter key listener
    const passwordInput = document.getElementById('password-input');
    passwordInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });

    // Expose checkPassword to global scope for onclick
    window.checkPassword = checkPassword;

    // Subtree loading function (assuming it exists)
    window.loadSubtree = function() {
        const personId = document.getElementById('person-id-form').value || document.getElementById('person-id').value;
        // Add your subtree loading logic here
        console.log('Loading subtree for ID:', personId);
        // Call a function like loadTree(personId) if defined elsewhere
    };
});