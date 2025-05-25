import React, { useState } from 'react'


function TemperatureConverter() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);
    const [mensaje, setMensaje] = useState("");

    const convertir = () => {
        setFahrenheit((celsius * 9 / 5) + 32);
        mostrarMensaje();
    }

    const mostrarMensaje = () => {
        setMensaje("");
        if (celsius < 0) {
            setMensaje("¡Hace mucho frío!");
        }

        if (celsius > 35) {
            setMensaje("¡Hace mucho calor!");
        }
    }

    return (
        <>
            <input
                type='number'
                id='celsius'
                value={celsius}
                placeholder='celsius'
                onChange={(e) => setCelsius(e.target.value)}></input>
            <button id='convertir' onClick={convertir}>Convertir</button>

            <br></br>
            <p>Son {fahrenheit}ºF</p>

            <p>{mensaje}</p>
        </>
    );
}

export default TemperatureConverter;