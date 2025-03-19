'use strict';

function triangulo(altura){
        for (let fila = 0; fila < altura; fila++) { 
            let String ="";
            //for para espacios en blanco
            for(let columna =0 ;columna<altura -fila-1;columna++){ //
                String +=" ";
            }
            //for para rellenar
            for(let columna = 0; columna < 2*fila+1; columna++){
                String += '*';
            }
            console.log(String);   
        }
}

triangulo(5);