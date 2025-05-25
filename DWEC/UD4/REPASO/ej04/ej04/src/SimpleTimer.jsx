import React, { useState, useEffect, useRef } from "react";

function SimpleTimer () {
    const [segundos, setSegundos] = useState(0);
    const [enEjecucion, setEnEjecucion] = useState(false);
    
    //guardar el id del intervalo para luego poder pararlo con clearInterval, que necesita el id
    //useRef guarda un estado sin que se reanderize el componente
    const idIntervalo = useRef(null);

    useEffect(() => {
        if (enEjecucion) {
            idIntervalo.current = setInterval(() => {
                let anterior = segundos;
                anterior += 1;
                setSegundos(anterior);
            }, 1000);
        }

        return () => clearInterval(idIntervalo.current);
    }, [enEjecucion] /* este parametro es la condicion de cuando se va a volver a ejecutar el useEffect*/);

    const iniciar = () => {
        setEnEjecucion(true);
    }

    const pausar = () => {
        //detener el intervalo 
        clearInterval(idIntervalo.current);
        setEnEjecucion(false);
    };

    const reiniciar = () => {
        clearInterval(idIntervalo.current);
        setSegundos(0);
        setEnEjecucion(false);
    };

    return (
        <div>
            <h2>Temporizador: {segundos}s</h2>
            <div>
                <button onClick={iniciar}>Iniciar</button>
                <button onClick={pausar}>Pausar</button>
                <button onClick={reiniciar}>Reiniciar</button>
            </div>
        </div>
    );
};

export default SimpleTimer;
