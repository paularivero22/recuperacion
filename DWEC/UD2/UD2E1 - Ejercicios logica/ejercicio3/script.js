'use strict';

function cuadrado(numero) {
    let cuadrado = "";

    for (let fila = 1; fila <= numero; fila++) {
        for (let columna = 1; columna <= numero; columna++) {
            if (fila === 1 || fila === numero || columna === 1 || columna === numero) {
                cuadrado += "*";
            } else {
                cuadrado += " ";
            }
        }
        cuadrado += "\n";
    }

    return cuadrado;
}

console.log(cuadrado(10));
