window.addEventListener("DOMContentLoaded", function() {

    const boton = this.document.getElementById("boton");
    const contadorP = this.document.getElementById("contador");

    let contadorClicks = 0;

    boton.addEventListener("click", function(e) {
        e.preventDefault();

        contadorClicks++;
        contadorP.textContent = contadorClicks;

        if(contadorClicks < 5) {
            boton.textContent = "Haz clic";
        } else if(contadorClicks === 5) {
            boton.textContent = "Vas en racha";
        } else if (contadorClicks === 10) {
            boton.textContent = "Eres un campeon";
        } else if(contadorClicks === 15) {
            boton.textContent = "Increible, se reinicia";
            contadorClicks = 0;
        }

    })
})