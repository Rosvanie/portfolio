// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbar-menu');

    hamburger.addEventListener('click', () => {
        navbarMenu.classList.toggle('active'); // Active ou désactive le menu
        hamburger.classList.toggle('open'); // Change l'état de l'icône hamburger
    });
});
