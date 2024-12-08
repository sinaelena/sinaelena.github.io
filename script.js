
  // Funktion, um das Menü anzuzeigen/zu verbergen
function toggleMenu() {
  const menu = document.querySelector('.menu');  // Menü
  menu.classList.toggle('open');  // Menü anzeigen oder ausblenden
}

// Event Listener für das Hamburger-Icon hinzufügen
const hamburger = document.querySelector('.hamburger');
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

