import React, { useState } from 'react'

function Quiz() {
    const preguntas = [
        {
            pregunta: "¿Cuál es la capital de Francia?",
            opciones: ["Madrid", "París", "Roma", "Berlín"],
            respuesta: "París",
        },
        {
            pregunta: "¿Quién escribió 'Cien años de soledad'?",
            opciones: ["Gabriel García Márquez", "Pablo Neruda", "Cervantes", "Borges"],
            respuesta: "Gabriel García Márquez",
        },
        {
            pregunta: "¿Qué lenguaje se usa con React?",
            opciones: ["PHP", "Python", "JavaScript", "Ruby"],
            respuesta: "JavaScript",
        },
    ];

    const [preguntaActual, setPreguntaActual] = useState(0);
    const [correctas, setCorrectas] = useState(0);
    const [falladas, setFalladas] = useState(0);
    const [acabado, setAcabado] = useState(false);

    const handleRespuesta = (opcion) => {
        if (preguntas[preguntaActual].respuesta === opcion) {
            setCorrectas(correctas + 1);
        } else {
            setFalladas(falladas + 1);
        }

        if (preguntaActual < preguntas.length - 1) {
            setPreguntaActual(preguntaActual + 1);
        } else {
            setAcabado(true);
        }

    }

    return (
        <>
            <p>{preguntas[preguntaActual].pregunta}</p>
            <ul>
                {preguntas[preguntaActual].opciones.map((opcion, key) => (
                    <li key={key}>
                        <button onClick={() => handleRespuesta(opcion)}>{opcion}</button>
                    </li>
                ))}
            </ul>
            {acabado ? (
                <div>
                    <h2>¡Quiz terminado!</h2>
                    <p>Correctas: {correctas}</p>
                    <p>Incorrectas: {falladas}</p>
                    <p>Puntuación: {correctas} / {preguntas.length}</p>
                </div>
            ) : (
                <p></p>
            )}
        </>
    );
}

export default Quiz;