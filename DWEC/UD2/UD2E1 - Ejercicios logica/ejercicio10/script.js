'use strict';

function contarCaracteres(cadena) {
    let caracteres = {};

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena.charAt(i);

        if (caracteres[caracter]) {
            caracteres[caracter]++;
        } else {
            caracteres[caracter] = 1;
        }
    }

    return caracteres;
}

console.log(contarCaracteres('hola mundo'));