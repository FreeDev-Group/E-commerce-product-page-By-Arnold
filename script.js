document.addEventListener('DOMContentLoaded', () => {
  // Sélection des éléments importants
  const body = document.body;
  const menuButton = document.querySelector('.menu'); // bouton hamburger
  const overlay = document.querySelector('.overlay'); // fond sombre
  const navLinks = document.querySelectorAll('.nav-link'); // tous les liens du menu

  // Fonction pour fermer le menu
  const closeNav = () => {
    body.classList.remove('nav-open');
  };

  // Fonction pour ouvrir/fermer le menu
  const toggleNav = () => {
    body.classList.toggle('nav-open');
  };

  // Ouvrir / fermer le menu avec le bouton hamburger
  if (menuButton) {
    menuButton.addEventListener('click', toggleNav);
  }

  // Fermer le menu en cliquant sur l'overlay
  if (overlay) {
    overlay.addEventListener('click', closeNav);
  }

  // Fermer le menu en cliquant sur un lien
  navLinks.forEach(link => link.addEventListener('click', closeNav));

  // Fermer le menu automatiquement si l'écran devient plus grand que mobile
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeNav();
    }
  });
});
