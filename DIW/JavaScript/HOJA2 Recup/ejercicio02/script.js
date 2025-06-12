
window.addEventListener("DOMContentLoaded", function () {
    const desplegable = this.document.getElementById("desplegable");
    const opcionesDiv = this.document.getElementById("opciones");
    const opciones = this.document.querySelectorAll(".opcion");

    let abierto = false;

    desplegable.addEventListener("click", function () {
        abierto = !abierto;

        if (abierto) {
            opcionesDiv.classList.remove("oculto");
        } else {
            opcionesDiv.classList.add("oculto");
        }
    })

    for (let opcion of opciones) {
        opcion.addEventListener("click", function () {
            desplegable.textContent = opcion.textContent;
            abierto = false;
            opcionesDiv.classList.add("oculto");
        })
    }
})