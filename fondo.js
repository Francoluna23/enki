var fondo = document.querySelector('.fondo');
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    // El usuario está desplazándose hacia abajo
    fondo.style.transform = 'translateY(0)';
  } else {
    // El usuario está desplazándose hacia arriba
    if (scrollTop === 0) {
      // Solo aplicar transformación cuando el scroll está en la parte superior
      fondo.style.transform = 'translateY(-90px)';
    }
  }

  lastScrollTop = scrollTop;
});
