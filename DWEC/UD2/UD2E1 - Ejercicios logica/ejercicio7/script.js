'use strict';

function tablaMultiplicar(num1, num2) {
    let tabla;
    for(let i=num1; i<=num2; i++) {
        for(let n=0; n<=10; n++) {
            tabla += `${i} x ${n} = ${i*n}`;
            tabla += "\n";
        }
        tabla += "\n";
    }
    return tabla;
}

console.log(tablaMultiplicar(1,5));