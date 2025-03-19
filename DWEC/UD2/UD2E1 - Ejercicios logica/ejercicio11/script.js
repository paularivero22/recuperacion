'use strict';

function comprobarRango(num1, num2) {
    let propiedades = {
        multiplos3: [],
        multiplos5: [],
        primos: []
    }

    for(let i = num1; i<=num2; i++){
        if(i % 3 === 0) {
            propiedades[multiplos3].push(i);
        } 

        if(i % 5 === 0) {
            propiedades[multiplos5].push(i);   
        }

        
    }
}