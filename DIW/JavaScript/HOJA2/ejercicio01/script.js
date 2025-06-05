
window.addEventListener("load", function () {
    const boton = this.document.getElementById("boton");

    let contador = 0;

    boton.addEventListener("click", function (e) {
        e.preventDefault();

        contador++;
        if (contador < 5) {
            boton.textContent = "Haz clic";
        } else if (contador < 10) {
            boton.textContent = "Vas en racha";
        } else if (contador < 15) {
            boton.textContent = "Eres un campeon";
        } else {
            boton.textContent = "Increíble, se reinicia.";
            contador = 0;
        }
    })
})