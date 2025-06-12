window.addEventListener("DOMContentLoaded", function () {

    const boton = this.document.getElementById("boton");

    const textoOculto = this.document.getElementById("textoOculto");

    mostrado = false;

    boton.addEventListener("click", function () {
        if (mostrado) {
            textoOculto.classList.add("oculto");
            mostrado = false;
            boton.textContent = "Mostrar Más";
        } else {
            textoOculto.classList.remove("oculto");
            mostrado = true;
            boton.textContent = "Mostrar Menos";
        }
    })

    const izquierda = this.document.getElementById("izquierda");
    const centro = this.document.getElementById("centro");
    const justificada = this.document.getElementById("justificada");

    const textos = this.document.querySelectorAll(".texto");

    izquierda.addEventListener("click", function () {
        for (let texto of textos) {
            texto.style.textAlign = "left";
        }
    })

    centro.addEventListener("click", function () {
        for (let texto of textos) {
            texto.style.textAlign = "center";
        }
    })

    justificada.addEventListener("click", function () {
        for (let texto of textos) {
            texto.style.textAlign = "justify";
        }
    })
})