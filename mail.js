
        document.addEventListener('DOMContentLoaded', function () {
            // Agregar el listener al formulario principal
            document.getElementById('formulario').addEventListener('submit', function (event) {
                event.preventDefault(); // Evitar el envío del formulario por defecto
          
                // Obtener los datos del formulario
                const formData = new FormData(this);
                console.log('formData:', formData); // Agregar esta línea para depurar
          
                const correo = formData.get('correo');
                const consulta = formData.get('consulta');
          
                console.log('Datos enviados al servidor:');
                console.log('Correo:', correo);
                console.log('Consulta:', consulta);
          
                // Enviar los datos al servidor usando fetch
                fetch('http://127.0.0.1:3000/enviar-correo', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.text())
                .then(data => {
                    console.log(data); // Imprimir respuesta del servidor en la consola
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            });
          });
    