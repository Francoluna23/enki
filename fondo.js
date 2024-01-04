var fondo = document.querySelector('.fondo');
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  if (window.innerWidth > 800) {
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
    console.log("La resolución es suficientemente alta. Ejecutando el script...");
} else {
    console.log("La resolución es demasiado baja. El script no se ejecutará.");
}
});
