document.addEventListener('DOMContentLoaded', function() {
        console.log("loadingmenu.js: DOMContentLoaded fired");
        fetch('homenavbar.html')
            .then(r => r.text())
            .then(text => {
                const navbar = document.getElementById('navbar');
                if (navbar) {
                    navbar.innerHTML = text;
                    console.log("Navbar loaded");
                } else {
                    console.error("Navbar element not found");
                }
            })
            .catch(err => console.error("Error loading navbar:", err));
        fetch('footer.html')
            .then(r => r.text())
            .then(text => {
                const footer = document.getElementById('footer');
                if (footer) {
                    footer.innerHTML = text;
                    console.log("Footer loaded");
                } else {
                    console.error("Footer element not found");
                }
            })
            .catch(err => console.error("Error loading footer:", err));
    });