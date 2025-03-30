// Get the hamburger icon and navbar links
const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

// Add event listener to toggle the mobile menu
menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active'); // Toggle the active class to show/hide menu
});
