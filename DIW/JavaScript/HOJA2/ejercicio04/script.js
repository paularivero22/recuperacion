
window.addEventListener("DOMContentLoaded", function () {
    const texto = this.document.getElementById("texto");
    const boton = this.document.getElementById("boton");
    let mostrado = false;
    
    boton.addEventListener("click", function () {
        mostrado = !mostrado;

        if (mostrado) {
            boton.textContent = "Ocultar";
            texto.classList.remove("oculto");

        } else {
            boton.textContent = "Mostrar";
            texto.classList.add("oculto");
        }
    })

})