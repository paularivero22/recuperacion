const preguntas = [
    {
        pregunta: "¿Cuál es el material más fácil de reciclar?",
        respuestaCorrecta: "Vidrio",
        opciones: ["Vidrio", "Metal", "Papel"]
    },
    {
        pregunta: "¿Qué color de contenedor se utiliza normalmente para reciclar papel y cartón?",
        respuestaCorrecta: "Azul",
        opciones: ["Verde", "Azul", "Amarillo"]
    },
    {
        pregunta: "¿Qué material tarda más tiempo en degradarse en la naturaleza?",
        respuestaCorrecta: "Plástico",
        opciones: ["Papel", "Plástico", "Cáscaras de frutas"]
    }
];

const productos = [
    {
        nombre: "Cepillo de Bambú",
        precio: 3
    },
    {
        nombre: "Jabón Natural",
        precio: 5
    },
    {
        nombre: "Bolsa de Tela",
        precio: 4
    }
];

document.addEventListener("DOMContentLoaded", function () {
    

    const preguntaEl = document.getElementById("pregunta");
    const botonesOpciones = document.querySelectorAll(".opcion");
    const progreso = document.querySelector("h5");

    let indexPregunta = 0;

    function mostrarPregunta() {
        if (indexPregunta < preguntas.length) {
            const actual = preguntas[indexPregunta];
            preguntaEl.textContent = actual.pregunta;
            progreso.textContent = `Pregunta ${indexPregunta + 1} de ${preguntas.length}`;

            botonesOpciones.forEach((btn, i) => {
                btn.textContent = actual.opciones[i];
                btn.onclick = () => {
                    if (btn.textContent === actual.respuestaCorrecta) {
                        alert("¡Correcto!");
                    } else {
                        alert("Incorrecto.");
                    }

                    indexPregunta++;
                    mostrarPregunta();
                };
            });
        } else {
            preguntaEl.textContent = "Has completado el cuestionario";
            progreso.textContent = "";
            botonesOpciones.forEach(btn => btn.style.display = "none");
        }
    }

    mostrarPregunta();
});
