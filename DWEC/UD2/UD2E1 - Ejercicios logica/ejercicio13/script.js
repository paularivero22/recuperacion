'use strict';

function aleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

function operadorAleatorio() {
    return Math.floor(Math.random() * 5) + 1;
}

function juegoMates() {
    let continuar = false;
    let preguntasCorrectas = [];
    let preguntasFalladas = [];
    let preguntasNoContestadas = [];

    do {
        for (let i = 1; i <= 4; i++) {
            let numero1 = aleatorio();
            let numero2 = aleatorio();
            let operadorNum = operadorAleatorio();
            let resultado = 0;
            let operador = "";

            switch (operadorNum) {
                case 1:
                    operador = "+";
                    resultado = numero1 + numero2;
                    break;
                case 2:
                    operador = "-";
                    resultado = numero1 - numero2;
                    break;
                case 3:
                    operador = "x";
                    resultado = numero1 * numero2;
                    break;
                case 4:
                    operador = "/";
                    resultado = Math.round((numero1 / numero2) * 100) / 100;
                    break;
                case 5:
                    operador = "%";
                    resultado = Math.round((numero1 % numero2) * 100) / 100;
                    break;
            }

            let enunciado = `Pregunta ${i}: \n ${numero1} ${operador} ${numero2} = ?`;
            let respuesta = prompt(enunciado);

            if (respuesta === null || respuesta.trim() === "") {
                alert("No contestado, la respuesta correcta era " + resultado);
                preguntasNoContestadas.push(`${enunciado} (No respondido)`);
            } else {
                respuesta = parseFloat(respuesta);
                if (respuesta === resultado) {
                    alert("Correcto!");
                    preguntasCorrectas.push(`${enunciado} Tu respuesta: ${respuesta}`);
                } else {
                    alert(`Incorrecto, la respuesta correcta era ${resultado}`);
                    preguntasFalladas.push(`${enunciado} Tu respuesta: ${respuesta}`);
                }
            }
        }

        continuar = confirm("¿Desea continuar?");
    } while (continuar);
    
    alert("Preguntas Falladas:\n" + (preguntasFalladas.length ? preguntasFalladas.join("\n") : "Ninguna"));

    alert("Preguntas Correctas:\n" + (preguntasCorrectas.length ? preguntasCorrectas.join("\n") : "Ninguna"));

    alert("Preguntas No Contestadas:\n" + (preguntasNoContestadas.length ? preguntasNoContestadas.join("\n") : "Ninguna"));

    console.log("Preguntas Correctas:", preguntasCorrectas);
    console.log("Preguntas Falladas:", preguntasFalladas);
    console.log("Preguntas No Contestadas:", preguntasNoContestadas);
}

juegoMates();
