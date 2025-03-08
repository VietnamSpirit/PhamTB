//<script>
        // Function to load HTML into elements
        function loadSection(id, file) {
            fetch(file)
                .then(response => response.text())
                .then(data => document.getElementById(id).innerHTML = data);
        }

        // Load sections dynamically
        loadSection("navbar", "homenavbar.html");
        //loadSection("sidebar", "sidebar.html");
        loadSection("footer", "footer.html");
//    </script>