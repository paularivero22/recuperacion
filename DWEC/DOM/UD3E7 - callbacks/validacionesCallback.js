import ValidacionError from './ValidacionError.js';

export function validarNombre(valor, callback) {
    let numeros = 0;
    for (let i = 0; i < valor.length; i++) {
        if (!isNaN(valor.charAt(i))) {
            numeros++;
        }
    }

    if (valor.length >= 3 && numeros === 0) {
        callback(valor, null);
    } else {
        callback(null, new ValidacionError('El nombre debe tener al menos 3 caracteres y no debe contener numeros', 'nombre'));
    }
}

export function validarContrasenia(valor, callback) {
    let numeros = 0;
    let contieneMayusculas;
    let contieneMinusculas;

    for (let i = 0; i < valor.length; i++) {
        if (!isNaN(valor.charAt(i))) {
            numeros++;
        }
    }

    if (!(valor.toLowerCase() === valor)) {
        contieneMayusculas = true;
    }

    if (!(valor.toUpperCase() === valor)) {
        contieneMinusculas = true;
    }

    if (numeros > 0 && contieneMayusculas && contieneMinusculas) {
        callback(valor, null);
    } else {
        callback(null, new ValidacionError('La contraseña no es valida', 'password'));
    }
}

export function validarEmail(valor, callback) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(valor)) {
        callback(valor, null);
    } else {
        callback(null, new ValidacionError('El email no es válido', 'email'));
    }
}


export function validarFechaNac(valor, callback) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - valor.getFullYear();
    const mes = hoy.getMonth() - valor.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < valor.getDate())) {
        edad--;
    }

    if (edad >= 18 && edad <= 23) {
        callback(valor, null);
    } else {
        callback(null, new ValidacionError('La edad debe estar entre 18 y 24 años', 'fechaNacimiento'));
    }
}