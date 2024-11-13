//CE SCRIPT EST POUR LE MENU

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbar-menu');

    hamburger.addEventListener('click', () => {
        navbarMenu.classList.toggle('active'); // Active ou désactive le menu
        hamburger.classList.toggle('open'); // Change l'état de l'icône hamburger
    });
});


document.querySelectorAll('.navbar-menu a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80, // Ajustez selon la hauteur exacte de votre navbar
            behavior: 'smooth'
        });
    });
});


//POUR LES ANIMMATIONS

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez tous les éléments à animer
    const animatedElements = document.querySelectorAll(".circle-bg, .image-container img, .social-icon, .text-left, .text-right");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate"); // Réinitialisation pour activer à chaque retour en vue
            }
        });
    }, observerOptions);

    // Observe chaque élément animé
    animatedElements.forEach(element => observer.observe(element));
});


//A PROPOS

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments
    const tabs = document.querySelectorAll('.about-tab');
    const contents = document.querySelectorAll('.about-content');
    
    // Ajouter un événement de clic sur chaque onglet
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Désactiver tous les onglets
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));
            
            // Activer l'onglet et son contenu correspondant
            tab.classList.add('active');
            document.querySelector(`#${tab.dataset.target}`).classList.add('active');
        });
    });

    // Activer l'onglet "Qui suis-je?" par défaut
    tabs[0].classList.add('active');
    contents[0].classList.add('active');
});
