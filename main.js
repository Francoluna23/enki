window.onscroll = function() {
    if (window.innerWidth > 800) {
        scrollFunction();
        console.log("La resolución es suficientemente alta. Ejecutando el script...");
    } else {
        console.log("La resolución es demasiado baja. El script no se ejecutará.");
    }
};
    
    function scrollFunction() {
        var header = document.querySelector(".header");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
