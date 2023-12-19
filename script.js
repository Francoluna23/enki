document.addEventListener("DOMContentLoaded", function () {
    // Obtén la referencia al elemento scrollbar__line
    const scrollbarLine = document.getElementById("scrollbarLine");
    const scrollbarButton = document.getElementById("scrollbarButton");

    // Obtén la referencia al footer2
    const footer2 = document.querySelector("footer2");

    // Calcula la posición del footer2 con respecto al inicio de la página
    const footer2Position = footer2.offsetTop;

    // Calcula la altura original de la línea
    const originalLineHeight = 25; // Cambia esto con la altura original en vh

    // Agrega un evento de desplazamiento a la ventana
    window.addEventListener("scroll", function () {
        // Calcula el porcentaje de desplazamiento
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        // Calcula el porcentaje ajustado para que la línea blanca no sea más larga que la original
        const adjustedPercentage = Math.min((window.scrollY / (footer2Position - window.innerHeight)) * 100, 100);

        // Calcula la altura de la línea blanca en vh
        const adjustedLineHeight = (adjustedPercentage * originalLineHeight) / 100;

        // Ajusta el estilo de la línea scrollbar__line
        scrollbarLine.style.height = `${adjustedLineHeight}vh`;
        scrollbarLine.style.backgroundColor = `rgb(${255 - adjustedPercentage * 2.55}, ${255 - adjustedPercentage * 2.55}, ${255 - adjustedPercentage * 2.55})`;
    });
});

