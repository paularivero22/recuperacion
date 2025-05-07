'use strict';

let registro = document.getElementById('registro');
registro.addEventListener('click', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let contraseña = document.getElementById('password');
    let confirmarContrseña = document.getElementById('confirmPassword');
    let fechaNacimiento = document.getElementById('fechaNacimiento');
    let telefono = document.getElementById('telefono');
    let genero = document.getElementById('genero');
    let terminos = document.getElementById('terminos');

    let propiedades = [nombre, email, contraseña, confirmarContrseña, fechaNacimiento, telefono, genero, terminos];

    for (let propiedad of propiedades) {
        if (propiedad.checkValidity()) {
            propiedad.classList.add('valido');
        } else {
            propiedad.classList.add('invalido');
        }
    }

    
    
});