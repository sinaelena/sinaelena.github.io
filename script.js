// Funktion zum Umschalten der "active"-Klasse
function toggleMenu() {
  const menu = document.querySelector(".menu");  // Menü-Container
  const menuIcon = document.querySelector(".menu-icon");  // Hamburger-Menü-Icon
  
  // Umschalten der "active"-Klasse
  menu.classList.toggle("active");
  menuIcon.classList.toggle("active");
}