// Funktion, um das Menü anzuzeigen oder zu verbergen
function toggleMenu() {
    const menu = document.querySelector('.menu'); // Menü-Element
    console.log('Hamburger Menu clicked!'); // Debugging-Hilfe
    menu.classList.toggle('open'); // Menü öffnen oder schließen
  }
  
  // Event Listener für das Hamburger-Icon hinzufügen
  const hamburger = document.querySelector('.menu-icon');
  hamburger.addEventListener('click', toggleMenu);
  


const canvas = document.getElementById("fluidCanvas");
const ctx = canvas.getContext("2d");

let colors = ['#00bcd4', '#03a9f4', '#4caf50', '#ffeb3b']; // Türkis, Blau, Grün, Gelb
let currentColor = 0;

// Füllung des Canvas mit Farben
function fillCanvas(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas löschen

    // Dynamische, flüssige Farbänderung
    ctx.beginPath();
    ctx.arc(x, y, 80, 0, 2 * Math.PI);
    ctx.fillStyle = colors[currentColor];
    ctx.fill();
    
    currentColor = (currentColor + 1) % colors.length; // Nächste Farbe
}

// Event-Listener für Mausbewegungen
canvas.addEventListener("mousemove", function(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    fillCanvas(x, y);
});

// Event-Listener für Mausverlassen
canvas.addEventListener("mouseleave", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas löschen
});

