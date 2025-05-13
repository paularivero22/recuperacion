'use strict';

function validarCampo(campo) {
    if (!(campo.checkValidity())) {
        campo.classList.remove('valido');
        campo.classList.add('invalido');
        return false;
    } else {
        campo.classList.remove('invalido');
        campo.classList.add('valido');
        return true;
    }
}

function validarConfirmarContrasena(contrasena, confirmarContrasena) {
    if (confirmarContrasena.value === contrasena.value) {
        confirmarContrasena.classList.remove('invalido');
        confirmarContrasena.classList.add('valido');
        return true;
    } else {
        confirmarContrasena.classList.remove('valido');
        confirmarContrasena.classList.add('invalido');
        return false;
    }
}

function validarFechaNacimiento(fechaNacimiento) {
    const fecha = new Date(fechaNacimiento.value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();
    const dia = hoy.getDate() - fecha.getDate();

    const tiene16 = edad > 16 || (edad === 16 && (mes > 0 || (mes === 0 && dia >= 0)));

    if (!tiene16) {
        fechaNacimiento.classList.remove('valido');
        fechaNacimiento.classList.add('invalido');
        return false;
    } else {
        fechaNacimiento.classList.remove('invalido');
        fechaNacimiento.classList.add('valido');
        return true;
    }
}

function validarGenero(genero) {
    if (genero.value === "") {
        genero.classList.remove('valido');
        genero.classList.add('invalido');
        return false;
    } else {
        genero.classList.remove('invalido');
        genero.classList.add('valido');
        return true;
    }
}

function validarCondiciones(terminos) {
    if (!terminos.checked) {
        terminos.classList.remove('valido');
        terminos.classList.add('invalido');
        return false;
    } else {
        terminos.classList.remove('invalido');
        terminos.classList.add('valido');
        return true;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById('enviar');

    boton.addEventListener('click', function (event) {
        event.preventDefault();

        let nombre = document.getElementById('nombre');
        let errorNombre = document.getElementById('errorNombre');
        nombre.addEventListener('blur', function () {
            if (!validarCampo(nombre)) {
                errorNombre.textContent = "El nombre debe contener minimo 3 caracteres";
            } else {
                errorNombre.textContent = "";
            }
        })

        let email = document.getElementById('correo');
        let errorEmail = document.getElementById('errorEmail');
        if (!validarCampo(email)) {
            errorEmail.textContent = "El email debe tener un formato valido";
        } else {
            errorEmail.textContent = "";
        }

        let contrasena = document.getElementById('contrasena');
        let errorContrasena = document.getElementById('errorContrasena');
        if (!validarCampo(contrasena)) {
            errorContrasena.textContent = "La contraseña debe tener un formato valido";
        } else {
            errorContrasena.textContent = "";
        }

        let confirmarContrasena = document.getElementById('confirmarContrasena');
        let errorConfirmarContrasena = document.getElementById('errorConfirmarContrasena');
        if (!validarConfirmarContrasena(contrasena, confirmarContrasena)) {
            errorConfirmarContrasena.textContent = "Las contraseñas deben coincidir";
        }

        let fechaNacimiento = document.getElementById('fechaNacimiento');
        let errorNacimiento = document.getElementById('errorNacimiento');
        if (!validarFechaNacimiento(fechaNacimiento)) {
            errorNacimiento.textContent = "Debe tener mas de 16 años";
        } else {
            errorNacimiento.textContent = "";
        }

        let telefono = document.getElementById('telefono');
        let errorTelefono = document.getElementById('errorTelefono');
        if (!validarCampo(telefono)) {
            errorTelefono.textContent = "El telefono debe tener un formato valido";
        } else {
            errorTelefono.textContent = "";
        }

        let genero = document.getElementById('genero');
        let errorGenero = document.getElementById('errorGenero');
        if (!validarGenero(genero)) {
            errorGenero.textContent = "Debes seleccionar una opcion valida";
        } else {
            errorGenero.textContent = "";
        }

        let terminos = document.getElementById('terminos');
        let errorTerminos = document.getElementById('errorCondiciones');
        if (!validarCondiciones(terminos)) {
            errorTerminos.textContent = "Debes aceptar los terminos y condiciones";
        } else {
            errorTerminos.textContent = "";
        }

        const invalidos = document.querySelectorAll('.invalido');

        if (invalidos.length === 0) {
            alert('Formulario enviado');
            const datos = {
                nombre: document.getElementById('nombre').value,
                correo: document.getElementById('correo').value,
                contrasena: document.getElementById('contrasena').value,
                fechaNacimiento: document.getElementById('fechaNacimiento').value,
                telefono: document.getElementById('telefono').value,
                genero: document.getElementById('genero').value,
                terminos: document.getElementById('terminos').checked
            };

            localStorage.setItem('datosFormulario', JSON.stringify(datos));
            alert('Formulario enviado');
        } else {
            alert('Corrige los errores antes de enviar el formulario')
        }

    })
})