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

let scrollTimer;

// Beim Scrollen die Sichtbarkeit des Scrollbalkens steuern
window.addEventListener('scroll', () => {
  // Scrollbalken sichtbar machen, wenn der Benutzer scrollt
  document.documentElement.style.setProperty('--scrollbar-opacity', '1');
  
  // Wenn nach einer Sekunde nicht mehr gescrollt wird, Scrollbalken wieder ausblenden
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    document.documentElement.style.setProperty('--scrollbar-opacity', '0');
  }, 1000); // 1 Sekunde nach dem letzten Scrollen
});

// Initiale Einstellung: Setzt die Opazität auf 0, wenn die Seite geladen wird
document.documentElement.style.setProperty('--scrollbar-opacity', '0');
// Anfangs den Scrollbalken verstecken
document.body.style.overflowY = 'hidden';


