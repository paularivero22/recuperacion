import { validarNombre, validarContrasenia, validarEmail, validarFechaNac } from './validacionesPromesas.js';
import { guardarFormulario, mostrarError } from "./Utilidades.js";

function validarFormulario(nombre, contrasenia, email, fechaNacimiento) {
    validarNombre(nombre)
        .then((_) => {
            return validarContrasenia(contrasenia);
        })
        .then((_) => {
            return validarEmail(email);
        })
        .then((_) => {
            return validarFechaNac(fechaNacimiento);
        })
        .then((_) => {
            alert("Formulario enviado");
            guardarFormulario([nombre, contrasenia, email, fechaNacimiento]);
        })
        .catch((error) => {
            mostrarError(error);
        });
}


const botonGuardar = document.getElementById('guardar');

botonGuardar.addEventListener("click", function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const contrasenia = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    validarFormulario(nombre, contrasenia, email, new Date(fechaNacimiento));
});