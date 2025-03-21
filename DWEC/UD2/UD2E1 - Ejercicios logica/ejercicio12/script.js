'use strict';

function aleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    return numeroAleatorio;
}

function juego() {
    let numero = 0;
    let numeroAleatorio = aleatorio();
    let valido = false;
    let intentos = 5;

    do {
        do {
            numero = parseInt(prompt("Introduce un numero entre 1 y 100"));
            if (numero <= 100 && numero >= 1) {
                valido = true;
            } else {
                valido = false;
                alert("El numero no esta entre 1 y 100");
            }
        } while (!valido);

        if (numero < numeroAleatorio) {
            alert("El numero es menor");
            intentos--;
        }

        if (numero > numeroAleatorio) {
            alert("El numero es mayor");
            intentos--;
        }

        if(numero === numeroAleatorio) {
            alert("Has acertado el numero!!");
            intentos--;
        }

        if(intentos === 0) {
            alert("Te has quedado sin intentos");
        }
    }while(intentos > 0);
}

juego();