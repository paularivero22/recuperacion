'use strict';

function jugarDados(numeroLados) {
    function numeroAleatorio() {
        return Math.floor((Math.random() * numeroLados) + 1);
    }

    return function () {
        let tirada1 = numeroAleatorio();
        let tirada2 = numeroAleatorio();

        return [tirada1, tirada2];
    };
}

let numeroLados = parseInt(prompt("Introduce el numero de lados "));
let juego = jugarDados(numeroLados);

document.addEventListener("DOMContentLoaded", function () {
    let btnTirar = document.getElementById('tirar');
    let btnTerminar = document.getElementById('terminar');
    let contenido = document.getElementById('contenido');
    let i = 0;

    let tiradasJugador = [];
    let tiradasMaquina = [];
    let ganadasMaquina = 0;
    let ganadasJugador = 0;

    btnTirar.addEventListener('click', function () {
        i++;

        let tiradaMaquina = juego();
        let tiradaJugador = juego();

        tiradasMaquina.push(tiradaMaquina);
        tiradasJugador.push(tiradaJugador);

        let resultadoMaquina = tiradaMaquina[0] + tiradaMaquina[1];
        let resultadoJugador = tiradaJugador[0] + tiradaJugador[1];

        contenido.innerHTML+=(`<br/>----- Tirada ${i} ----- <br/>`);
        contenido.innerHTML+=(`<br/>Maquina: ${tiradaMaquina} -> ${resultadoMaquina}<br/>`);
        contenido.innerHTML+=(`<br/>Jugador: ${tiradaJugador} -> ${resultadoJugador}<br/>`);

        if (resultadoJugador > resultadoMaquina) {
            ganadasJugador++;
            contenido.innerHTML+=('Gana el jugador<br/>');
        } else if (resultadoMaquina > resultadoJugador) {
            ganadasMaquina++;
            contenido.innerHTML+=('Gana la maquina<br/>');
        } else {
            contenido.innerHTML+=('Empate<br/>');
        }
    });

    btnTerminar.addEventListener('click', function () {
        contenido.innerHTML+=("<br/>Resultados de la partida: <br/>");
        contenido.innerHTML+=(`<br/>Numero de victorias del jugador: ${ganadasJugador} <br/>`);
        contenido.innerHTML+=(`<br/>Numero de victorias de la maquina: ${ganadasMaquina} <br/>`);

        if (ganadasMaquina > ganadasJugador) {
            contenido.innerHTML += ('<br/> Ha ganado la maquina<br/>');
        } else if (ganadasJugador > ganadasMaquina) {
            contenido.innerHTML += ('<br/>Has ganado<br/>');
        } else {
            contenido.innerHTML+= ('<br/>Ha habido un empate<br/>');
        }
    });
});
