'use strict';

function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function comprobarRango(num1, num2) {
    let propiedades = {
        multiplos3: [],
        multiplos5: [],
        primos: []
    }

    for (let i = num1; i <= num2; i++) {
        if (i % 3 === 0) {
            propiedades['multiplos3'].push(i);
        }

        if (i % 5 === 0) {
            propiedades['multiplos5'].push(i);
        }

        if (esPrimo(i)) {
            propiedades.primos.push(i);
        }
    }
    console.log(propiedades);
}

comprobarRango(1, 20);