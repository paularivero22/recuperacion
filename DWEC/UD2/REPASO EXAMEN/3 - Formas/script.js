'use strict';

function diavolo(tamanio) {
    for(let fila = Math.floor(tamanio / 2) - 1; fila >= 0; fila--) {
        let cadena = "";

        for(let columna = 0; columna < tamanio - fila - 1; columna++) {
            cadena += " ";
        }

        for(let columna = 0; columna < 2 * fila + 1; columna++) {
            cadena += "*";
        }

        console.log(cadena);
    }
    
    for(let fila = 0; fila < tamanio / 2; fila++) {
        let cadena = "";

        for(let columna = 0; columna < tamanio - fila - 1; columna++) {
            cadena += " ";
        }

        for(let columna = 0; columna < 2 * fila + 1; columna++) {
            cadena += "*";
        }

        console.log(cadena);
    }
}

diavolo(10);
