    const track = document.getElementById('track');
const slides = track.children;
const dotsContainer = document.getElementById('dots');
const progress = document.getElementById('progress');
const total = slides.length;

let indice = 0;
let autoplayInterval;
const DURACION = 4000; // 4 segundos por slide

function crearDots() {
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('span');
        dot.className = 'w-2.5 h-2.5 rounded-full cursor-pointer ' + (i === 0 ? 'bg-emerald-400' : 'bg-white/40');
        dot.onclick = () => irA(i);
        dotsContainer.appendChild(dot);
    }
}

function actualizarDots() {
    [...dotsContainer.children].forEach((dot, i) => {
        dot.className = 'w-2.5 h-2.5 rounded-full cursor-pointer ' + (i === indice ? 'bg-emerald-400' : 'bg-white/40');
    });
}

function moverA(i) {
    indice = (i + total) % total;
    track.style.transform = `translateX(-${indice * 100}%)`;
    actualizarDots();
    reiniciarProgreso();
}

function irA(i) {
    moverA(i);
    reiniciarAutoplay();
}

function siguiente() { moverA(indice + 1); }
function anterior() { moverA(indice - 1); }

document.getElementById('next').onclick = () => { siguiente(); reiniciarAutoplay(); };
document.getElementById('prev').onclick = () => { anterior(); reiniciarAutoplay(); };

function reiniciarProgreso() {
    progress.style.transition = 'none';
    progress.style.width = '0%';
    requestAnimationFrame(() => {
        progress.style.transition = `width ${DURACION}ms linear`;
        progress.style.width = '100%';
    });
}

function reiniciarAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(siguiente, DURACION);
    reiniciarProgreso();
}

// Pausar al pasar el mouse (funcionalidad extra)
const contenedor = document.getElementById('slider-container');
contenedor.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
contenedor.addEventListener('mouseleave', reiniciarAutoplay);

// Soporte swipe en móvil (funcionalidad extra)
let touchStartX = 0;
contenedor.addEventListener('touchstart', (e) => touchStartX = e.touches[0].clientX);
contenedor.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? siguiente() : anterior();
    reiniciarAutoplay();
});

crearDots();
reiniciarAutoplay();