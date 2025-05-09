import ValidacionError from '../ValidacionError.js';

export function validarNombre(valor) {
    let numeros = 0;
    for (let i = 0; i < valor.length; i++) {
        if (!isNaN(valor.charAt(i))) {
            numeros++;
        }
    }

    return new Promise((resuelve, rechazo) => {
        setTimeout(() => {
            if (valor.length >= 3 && numeros === 0) {
                resuelve(true);
            } else {
                rechazo(new ValidacionError('El nombre debe tener al menos 3 caracteres y no debe contener numeros', 'nombre'));
            }
        }, 0);
    });
}

export function validarContrasenia(valor) {
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

    return new Promise((resuelve, rechazo) => {
        setTimeout(() => {
            if (numeros > 0 && contieneMayusculas && contieneMinusculas) {
                resuelve(true);
            } else {
                rechazo(new ValidacionError('La contraseña no es valida', 'password'));
            }
        },0);
    });
}


export function validarEmail(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /*
    split por la @
    comprobar que tiene . y texto despues del .
    */

    return new Promise((resuelve, rechazo) => {
        setTimeout(() => {
            if (regex.test(valor)) {
                resuelve(true);
            } else {
                rechazo(new ValidacionError('El email no es válido', 'email'));
            }
        },0);
    });
}

export function validarFechaNac(valor) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - valor.getFullYear();
    const mes = hoy.getMonth() - valor.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < valor.getDate())) {
        edad--;
    }

    return new Promise((resuelve, rechazo) => {
        setTimeout(() => {
            if (edad >= 18 && edad <= 23) {
                resuelve(true);
            } else {
                rechazo(new ValidacionError('La edad debe estar entre 18 y 24 años', 'fechaNacimiento'));
            }
        },0);
    });
}