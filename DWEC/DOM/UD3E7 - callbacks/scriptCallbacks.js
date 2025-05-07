import {validarNombre, validarContrasenia, validarEmail, validarFechaNac} from './validacionesCallback.js';
import {guardarFormulario, mostrarError} from "./Utilidades.js";

function validarFormulario(nombre, contrasenia, email, fechaNacimiento) {
    validarNombre(nombre, (nombreValidado, error) => {
        if (error) {
            mostrarError(error);
            return;
        }

        validarContrasenia(contrasenia, (contraseniaValidada, error) => {
            if (error) {
                mostrarError(error);
                return;
            }

            validarEmail(email, (emailValidado, error) => {
                if (error) {
                    mostrarError(error);
                    return;
                }

                validarFechaNac(fechaNacimiento, (fechaNacValidada, error) => {
                    if (error) {
                        mostrarError(error);
                        return;
                    }

                    alert("Formulario enviado");
                    guardarFormulario([nombreValidado, contraseniaValidada, emailValidado, fechaNacValidada]);
                });
            });
        });
    });
}

const botonGuardar = document.getElementById('guardar');

botonGuardar.addEventListener("click", function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const contrasenia = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    
    validarFormulario(nombre, contrasenia, email, new Date(fechaNacimiento));
});