window.addEventListener("load", function () {
    const desplegable = document.getElementById("desplegable");
    const opciones = document.getElementById("opciones");

    let abierto = false;

    desplegable.addEventListener("click", function () {
        abierto = !abierto;
        if (!abierto) {
            opciones.classList.toggle("oculto", !abierto);
        } else {
            opciones.classList.remove("oculto", !abierto);
        }
    });

    const opcion = document.querySelectorAll(".opcion");
    for (let opc of opcion) {
        opc.addEventListener("click", function () {
            const valor = opc.getAttribute("data-value");
            desplegable.textContent = valor;
            opciones.classList.add("oculto");
            abierto = false;
        });
    }
});
