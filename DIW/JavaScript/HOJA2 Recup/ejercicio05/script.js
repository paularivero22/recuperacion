
window.addEventListener("DOMContentLoaded", function () {
    const enviar = this.document.getElementById("enviar");
    const error = this.document.getElementById("error");
    const inputNombre = this.document.getElementById("nombreUsuario");

    const regex = /^[a-zA-Z0-9]+$/;

    enviar.addEventListener("click", function (e) {
        e.preventDefault();

        const nombreUsuario = inputNombre.value;

        if (regex.test(nombreUsuario)) {
            alert("Usuario correcto");
        } else {
            error.textContent = "Solo puede contener letras y numeros";
        }
    })
})