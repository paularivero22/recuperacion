'use strict';
const especiesFantasticas = [
    { nombre: "Dragón", poder: 10 },
    { nombre: "Fénix", poder: 9 },
    { nombre: "Grifo", poder: 8 },
    { nombre: "Quimera", poder: 7 },
    { nombre: "Hidra", poder: 9 },
    { nombre: "Basilisco", poder: 8 },
    { nombre: "Mantícora", poder: 7 },
    { nombre: "Kraken", poder: 10 },
    { nombre: "Unicornio", poder: 6 },
    { nombre: "Centauro", poder: 5 },
    { nombre: "Minotauro", poder: 6 },
    { nombre: "Serpiente Alada", poder: 7 },
    { nombre: "Troll de Cueva", poder: 5 },
    { nombre: "Hada de Fuego", poder: 4 },
    { nombre: "Gólem de Piedra", poder: 8 },
    { nombre: "Lobo Fantasma", poder: 6 },
    { nombre: "Espectro de Hielo", poder: 7 },
    { nombre: "Djinn", poder: 9 },
    { nombre: "Naga", poder: 6 },
    { nombre: "Elemental de Tierra", poder: 8 }
];

function crearGeneradorCriaturas(cantidadTipos) {
    function aleatorio() {
        return Math.floor(Math.random() * cantidadTipos) + 1;
    }

    return function creacionCriaturas() {
        let criatura1 = especiesFantasticas[aleatorio()];
        let criatura2 = especiesFantasticas[aleatorio()];

        return [criatura1, criatura2];
    }
}

let cantidadCriaturas = parseInt(prompt("Introduce la cantidad de tipos de criaturas que quieras"));
let pares = parseInt(prompt("Introduce cuantos pares de criaturas quieres sacar"));

let crearCriaturas = crearGeneradorCriaturas(cantidadCriaturas);

let ganadasJugador = 0;
let ganadasMaquina = 0;

for (let i = 0; i < pares; i++) {
    let criaturasJugador = crearCriaturas(cantidadCriaturas);
    let criaturasMaquina = crearCriaturas(cantidadCriaturas);

    let sumaJugador = criaturasJugador[0].poder + criaturasJugador[1].poder;
    let sumaMaquina = criaturasMaquina[0].poder + criaturasMaquina[1].poder;

    console.log(`Combate ${i + 1}: \n Jugador: ${criaturasJugador[0].nombre}, ${criaturasJugador[1].nombre} \n Maquina: ${criaturasMaquina[0].nombre}, ${criaturasMaquina[1].nombre}`);

    if (sumaJugador > sumaMaquina) {
        console.log(`${criaturasJugador[0].nombre} y ${criaturasJugador[1].nombre} son mas fuertes que ${criaturasMaquina[0].nombre} y ${criaturasMaquina[1].nombre}`);
        console.log('Gana el jugador');
        ganadasJugador++;
    } else if (sumaMaquina > sumaJugador) {
        console.log(`${criaturasMaquina[0].nombre} y ${criaturasMaquina[1].nombre} son mas fuertes que ${criaturasJugador[0].nombre} y ${criaturasJugador[1].nombre}`);
        console.log('Gana la maquina');
        ganadasMaquina++;
    } else {
        console.log(`Empate`);
    }
}

if(ganadasJugador > ganadasMaquina) {
    console.log('El ganador es el jugador');
} else if(ganadasMaquina > ganadasJugador) {
    console.log('El ganador es la maquina')
} else {
    console.log('Hay un empate');
}