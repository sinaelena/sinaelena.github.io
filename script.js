
  // Funktion, um das Menü anzuzeigen/zu verbergen
function toggleMenu() {
  const menu = document.querySelector('.menu');  // Menü
  menu.classList.toggle('open');  // Menü anzeigen oder ausblenden
}

// Event Listener für das Hamburger-Icon hinzufügen
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleMenu);
  

