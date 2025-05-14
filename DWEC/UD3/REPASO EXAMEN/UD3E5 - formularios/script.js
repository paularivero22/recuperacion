'use strict';

function validarFormulario() {
    let nombre = document.getElementById('nombre');
    let errorNombre = document.getElementById('errorNombre');
    validarNombre(nombre, errorNombre);

    let email = document.getElementById('correo');
    let errorEmail = document.getElementById('errorEmail');
    validarEmail(email, errorEmail);

    let contrasena = document.getElementById('contrasena');
    let errorContrasena = document.getElementById('errorContrasena');
    validarContrasenia(contrasena, errorContrasena);

    let confirmarContrasena = document.getElementById('confirmarContrasena');
    let errorConfirmarContrasena = document.getElementById('errorConfirmarContrasena');
    validarConfirmarContrasena(contrasena, confirmarContrasena, errorConfirmarContrasena);

    let fechaNacimiento = document.getElementById('fechaNacimiento');
    let errorNacimiento = document.getElementById('errorNacimiento');
    validarFechaNacimiento(fechaNacimiento, errorNacimiento);


    let telefono = document.getElementById('telefono');
    let errorTelefono = document.getElementById('errorTelefono');
    validarTelefono(telefono, errorTelefono);

    let genero = document.getElementById('genero');
    let errorGenero = document.getElementById('errorGenero');
    validarGenero(genero, errorGenero);

    let terminos = document.getElementById('terminos');
    let errorTerminos = document.getElementById('errorCondiciones');
    validarCondiciones(terminos, errorTerminos);
    
}

function validarNombre(nombre, errorNombre) {
    nombre.addEventListener('input', function (event) {
        event.preventDefault();
        if (!(nombre.checkValidity())) {
            errorNombre.textContent = "El nombre debe contener minimo 3 caracteres";
            nombre.classList.remove('valido');
            nombre.classList.add('invalido');
        } else {
            errorNombre.textContent = "";
            nombre.classList.remove('invalido');
            nombre.classList.add('valido');
        }
    })
}

function validarEmail(email, errorEmail) {
    email.addEventListener('input', function (event) {
        event.preventDefault();
        if (!(email.checkValidity())) {
            errorEmail.textContent = "El email debe tener un formato valido";
            email.classList.remove('valido');
            email.classList.add('invalido');
        } else {
            errorEmail.textContent = "";
            email.classList.remove('invalido');
            email.classList.add('valido');
        }
    })
}

function validarContrasenia(contrasena, errorContrasena) {
    contrasena.addEventListener('input', function (event) {
        event.preventDefault();
        if (!(contrasena.checkValidity())) {
            errorContrasena.textContent = "La contraseña debe tener un formato valido";
            contrasena.classList.remove('valido');
            contrasena.classList.add('invalido');
        } else {
            errorContrasena.textContent = "";
            contrasena.classList.remove('invalido');
            contrasena.classList.add('valido');
        }
    })
}

function validarConfirmarContrasena(contrasena, confirmarContrasena, errorConfirmarContrasena) {
    confirmarContrasena.addEventListener('input', function (event) {
        event.preventDefault();
        if (confirmarContrasena.value === contrasena.value) {
            errorConfirmarContrasena.textContent = "";
            confirmarContrasena.classList.remove('invalido');
            confirmarContrasena.classList.add('valido');
        } else {
            errorConfirmarContrasena.textContent = "Las contraseñas deben coincidir";
            confirmarContrasena.classList.remove('valido');
            confirmarContrasena.classList.add('invalido');
        }
    })
}

function validarFechaNacimiento(fechaNacimiento, errorNacimiento) {
    fechaNacimiento.addEventListener('input', function (event) {
        event.preventDefault();

        const fecha = new Date(fechaNacimiento.value);
        const hoy = new Date();
        const edad = hoy.getFullYear() - fecha.getFullYear();
        const mes = hoy.getMonth() - fecha.getMonth();
        const dia = hoy.getDate() - fecha.getDate();

        const tiene16 = edad > 16 || (edad === 16 && (mes > 0 || (mes === 0 && dia >= 0)));

        if (!tiene16) {
            errorNacimiento.textContent = "Debes tener al menos 16 años.";
            fechaNacimiento.classList.remove('valido');
            fechaNacimiento.classList.add('invalido');
        } else {
            errorNacimiento.textContent = "";
            fechaNacimiento.classList.remove('invalido');
            fechaNacimiento.classList.add('valido');
        }
    });
}

function validarTelefono(telefono, errorTelefono) {
    telefono.addEventListener('input', function (event) {
        event.preventDefault();
        if (!(telefono.checkValidity())) {
            errorTelefono.textContent = "El telefono debe tener un formato valido";
            telefono.classList.remove('valido');
            telefono.classList.add('invalido');
        } else {
            errorTelefono.textContent = "";
            telefono.classList.remove('invalido');
            telefono.classList.add('valido');
        }
    })
}

function validarGenero(genero, errorGenero) {
    genero.addEventListener('change', function (event) {
        event.preventDefault();

        if (genero.value === "") {
            errorGenero.textContent = "Debe seleccionar un género válido.";
            genero.classList.remove('valido');
            genero.classList.add('invalido');
        } else {
            errorGenero.textContent = "";
            genero.classList.remove('invalido');
            genero.classList.add('valido');
        }
    });
}

function validarCondiciones(terminos, errorCondiciones) {
    terminos.addEventListener('change', function (event) {
        event.preventDefault();
        
        if (!terminos.checked) {
            errorCondiciones.textContent = "Debes aceptar los términos y condiciones.";
            terminos.classList.remove('valido');
            terminos.classList.add('invalido');
        } else {
            errorCondiciones.textContent = "";
            terminos.classList.remove('invalido');
            terminos.classList.add('valido');
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        validarFormulario();
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
            formulario.reset();
        } else {
            alert('Corrige los errores antes de enviar el formulario')
        }
    })
})