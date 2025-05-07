export function guardarFormulario(datos) {
    localStorage.setItem("nombre", datos[0]);
    localStorage.setItem("contrasenia", datos[1]);
    localStorage.setItem("email", datos[2]);
    localStorage.setItem("fechaNacimiento", datos[3]);
}

export function mostrarError(error) {
    console.log(error.message);
}