import { useState } from "react";

function Casilla({numFila, numColumna, letra, comunicarPadre}) {
    const [mostrar, setMostrar] = useState(false);

    const handleClick = () => {
        comunicarPadre(numFila, numColumna);
    }   


    return (
        <div onClick={handleClick} className="casilla">
            <h1>{letra}</h1>
        </div>
    );
}

export default Casilla;