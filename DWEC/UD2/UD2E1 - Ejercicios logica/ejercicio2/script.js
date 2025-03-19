'use strict';

let numero;
let maximo;
let minimo;
let suma = 0;
let media = 0;
let total = 0;

do {
    numero = parseInt(prompt("Introduce un numero (0 para salir)"));
    if (numero !== 0) {
        suma += numero;
        total++;

        if(total === 1) {
            minimo = numero;
        }

        if (numero > maximo) {
            maximo = numero;
        }

        if (numero < minimo) {
            minimo = numero;
        }
    }

} while(numero !== 0);

media = suma / total;

alert(
    `
        Numero maximo: ${maximo}
        Numero minimo: ${minimo}
        Suma: ${suma}
        Media: ${media.toFixed(2)}
        Total de numeros introducidos: ${total}
    `
);