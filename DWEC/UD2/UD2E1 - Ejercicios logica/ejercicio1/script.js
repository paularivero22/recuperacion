'use strict';

let nombre = "Paula";
let apellido = "Rivero";
let edad = 20;
let anioNac = 2004;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(anioNac);

alert(
    `Nombre: "${nombre}"
    Apellido: "${apellido}"
    Edad: '${edad}'
    Año de Nacimiento: '${anioNac}'`
);

alert(nombre + '\n' + apellido);

let suma = edad + anioNac;

alert(suma);

alert(nombre + apellido + edad + anioNac);