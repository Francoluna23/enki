document.addEventListener("DOMContentLoaded", function () {
    const eslogan = "Alcanzá tus objetivos\ncomerciales con nuestras\nsoluciones en marketing digital.";
    const esloganElement = document.getElementById("maquinaEscribir");

    function escribirTexto(texto, elemento, velocidad) {
        let i = 0;
        const intervalo = setInterval(function () {
            if (i < texto.length) {
                if (texto.charAt(i) === "\n") {
                    elemento.innerHTML += "<br>";
                } else if (texto.charAt(i) === " ") {
                    elemento.innerHTML += "&nbsp;";
                } else {
                    elemento.innerText += texto.charAt(i);
                }
                i++;
            } else {
                clearInterval(intervalo);
            }
        }, velocidad);
    }

    escribirTexto(eslogan, esloganElement, 50);
});