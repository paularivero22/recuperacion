
window.addEventListener("DOMContentLoaded", function () {
    const contador = this.document.getElementById("contador");
    const diminuir = this.document.getElementById("disminuir");
    const aumentar = this.document.getElementById("aumentar");
    const mensaje = this.document.getElementById("mensaje");

    let count = 0;
    contador.textContent = 0;

    diminuir.addEventListener("click", function () {
        if (count > 0) {
            count--;

            contador.textContent = count;
            mensaje.textContent = "";
        } else {
            mensaje.textContent = "No puede bajar mas del 0";
        }
    })

    aumentar.addEventListener("click", function () {
        if (count < 10) {
            count++;

            contador.textContent = count;
            mensaje.textContent = "";
        } else {
            mensaje.textContent = "No puede subir mas del 10";
        }
    })
})