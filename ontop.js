// Obtén el div de destino
const NS = document.getElementById('NS');

const targetDiv = document.getElementById('targetDiv');
    
// Obtén el elemento fijo
const scrollbarButton = document.getElementById('scrollbarButton');

// Obtén el div de fin
const SN = document.getElementById('SN');

// Añade un evento de desplazamiento (scroll)
window.addEventListener('scroll', () => {
  // Obtén la posición vertical del scroll
  const scrollPosition = window.scrollY;

  // Obtén la posición vertical del div de destino
  const NSPosition = NS.offsetTop - window.innerHeight * 0.43;

  const targetDivPosition = targetDiv.offsetTop - window.innerHeight * 0.43;

  const SNPosition = SN.offsetTop - window.innerHeight * 0.43;
  // Verifica si el scroll está en el tercer div
  if ((scrollPosition >= NSPosition && scrollPosition < targetDivPosition)||(scrollPosition >= SNPosition)) {
    scrollbarButton.classList.add('changeColor');
  } else {
    scrollbarButton.classList.remove('changeColor');
  }
});