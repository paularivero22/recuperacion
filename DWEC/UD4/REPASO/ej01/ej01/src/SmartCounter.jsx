import { useState } from 'react'

function SmartCounter() {
    const [numero, setNumero] = useState(0);

    const incrementar = () => {
        if (numero < 10) {
            setNumero(numero + 1);
        } else {
            alert("¡Máximo alcanzado!");
        }
    }

    const decrementar = () => {
        if (numero > 0) {
            setNumero(numero - 1);
        } else {
            alert("No puede ser menor a 0");
        }
    }

    const resetear = () => {
        setNumero(0);
    }


    return (
        <>
            <h1>{numero}</h1>
            <button id='incrementar' onClick={incrementar}>Incrementar</button>
            <button id='decrementar' onClick={decrementar}>Decrementar</button>
            <button id='incrementar' onClick={resetear}>Resetear</button>
        </>
    );
}

export default SmartCounter;