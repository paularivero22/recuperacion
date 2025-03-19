'use strict';

function factorial(numero) {
    let factorial = 1;
    let cadena = '';

    for (let i = numero; i > 0; i--) {
        factorial *= i;
        cadena += (i > 1) ? `${i} x ` : `${i}`;
    }

    cadena += ` = ${factorial}`;
    return cadena;
}

console.log(factorial(4));
