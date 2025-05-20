import { useState } from 'react'

function TresEnRaya() {
    const [turno, setTurno] = useState(1);
    const [tablero, setTablero] = useState();
    const [letra, setLetra] = useState("X");
    
    const handleClick = () => {
        setTurno(turno + 1);
        console.log(turno);   
    }

    handleClick = (casilla) => {
        setTablero()   
    }



    return (
        <>
            <div className='tablero' onClick={handleClick}>
                <Casilla numCasilla={1}/>
            </div>
        </>
    )
}

export default TresEnRaya
