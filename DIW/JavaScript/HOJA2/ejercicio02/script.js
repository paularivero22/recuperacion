window.addEventListener("load", function () {
    const desplegable = document.getElementById("desplegable");
    const opciones = document.getElementById("opciones");

    let abierto = false;

    desplegable.addEventListener("click", function () {
        abierto = !abierto;

        if (!abierto) {
            opciones.classList.add("oculto");
        } else {
            opciones.classList.remove("oculto");
        }

    });
    
    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const javascript = document.getElementById("javascript");

    html.addEventListener("click", function () {
        desplegable.textContent = "html";
        opciones.classList.add("oculto");
        abierto = false;
    });

    css.addEventListener("click", function () {
        desplegable.textContent = "css";
        opciones.classList.add("oculto");
        abierto = false;
    });

    javascript.addEventListener("click", function () {
        desplegable.textContent = "javascript";
        opciones.classList.add("oculto");
        abierto = false;
    });
});
