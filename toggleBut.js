/*document.getElementById("myButton").addEventListener("click", function() {
    this.classList.toggle("toggleed");
  });
  */
document.getElementById("myButton").addEventListener("click", function() {
  this.classList.toggle("toggleed");
  var header = document.querySelector('.header');
  var header2 = document.querySelector('.header2');
  var whatsapp = document.querySelector('.whatsapp');
  if (header.style.display === 'none' || header2.style.display === 'flex') {
      header.style.display = 'flex';
      header2.style.display = 'none';
      whatsapp.style.display = 'flex';
  } else {
      header.style.display = 'none';
      header2.style.display = 'flex';
      whatsapp.style.display = 'none';
  }
});

// Obtenemos todos los elementos <li> dentro de .nav-links
var navLinks = document.querySelectorAll('.nav-links li');

// Iteramos sobre cada elemento <li>
navLinks.forEach(function(link) {
    // Agregamos un event listener para el evento 'click'
    link.addEventListener('click', function() {
        // Ocultamos el header2
        var header2 = document.querySelector('.header2');
        header2.style.display = 'none';
        
        // Mostramos el header original
        var header = document.querySelector('.header');
        header.style.display = 'flex';

        // Ocultamos el botón de WhatsApp si es necesario
        var whatsapp = document.querySelector('.whatsapp');
        whatsapp.style.display = 'flex';
    });
});
