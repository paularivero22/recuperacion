import { useState } from 'react'
import Casilla from './Casilla.jsx';

function TresEnRaya() {
    const [turno, setTurno] = useState(1);
    const [tablero, setTablero] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
    const [letra, setLetra] = useState("");
    const [ganador, setGanador] = useState("");

    /*
    [
    [0,1,2]
    [3,4,5]
    [6,7,8]
    ]
    */

    const comunicarPadre = async (numFila, numColumna) => {
        if (!ganador) {
            if (tablero[numFila][numColumna] === '') {
                if (turno % 2 === 0) {
                    setLetra("X");
                    let nuevoTablero = [...tablero];
                    nuevoTablero[numFila][numColumna] = "X";
                    setTablero(nuevoTablero);
                } else {
                    setLetra("O");
                    let nuevoTablero = [...tablero];
                    nuevoTablero[numFila][numColumna] = "O";
                    setTablero(nuevoTablero);
                }
            }
            setTurno(turno + 1);

            if (comprobarGanador("X")) {
                alert("Gana X");
            } else if (comprobarGanador("O")) {
                alert("Gana O");
            } else if (comprobarEmpate()) {
                alert("Empate");
            }
        }
    }

    const comprobarGanador = (letra) => {
        //en horizontal
        if (tablero[0][0] === letra && tablero[0][1] === letra && tablero[0][2] === letra) {
            setGanador(letra);
            return true;
        }

        if (tablero[1][0] === letra && tablero[1][1] === letra && tablero[1][2] === letra) {
            setGanador(letra);
            return true;
        }

        if (tablero[2][0] === letra && tablero[2][1] === letra && tablero[2][2] === letra) {
            setGanador(letra);
            return true;
        }

        //en vertical
        if (tablero[0][0] === letra && tablero[1][0] === letra && tablero[2][0] === letra) {
            setGanador(letra);
            return true;
        }

        if (tablero[0][1] === letra && tablero[1][1] === letra && tablero[2][1] === letra) {
            setGanador(letra);
            return true;
        }

        if (tablero[0][2] === letra && tablero[1][2] === letra && tablero[2][2] === letra) {
            setGanador(letra);
            return true;
        }

        //en diagonal
        if (tablero[0][2] === letra && tablero[1][1] === letra && tablero[2][0] === letra) {
            setGanador(letra);
            return true;
        }

        if (tablero[0][0] === letra && tablero[1][1] === letra && tablero[2][2] === letra) {
            setGanador(letra);
            return true;
        }
        return false;
    }

    const comprobarEmpate = () => {
        let casillasOcupadas = 0;
        for (let i = 0; i < tablero.length; i++) {
            for (let j = 0; j < tablero.length; j++) {
                if (tablero[i][j] != "") {
                    casillasOcupadas++;
                }
            }
        }
        console.log(casillasOcupadas);
        
        if(casillasOcupadas === 9) {
            setGanador("empate");
            return true;
        }

        return false;
    }

    return (
        <>
            <div className='tablero'>
                <div className='fila'>
                    <Casilla numFila={0} numColumna={0} letra={tablero[0][0]} comunicarPadre={comunicarPadre} />
                    <Casilla numFila={0} numColumna={1} letra={tablero[0][1]} comunicarPadre={comunicarPadre} />
                    <Casilla numFila={0} numColumna={2} letra={tablero[0][2]} comunicarPadre={comunicarPadre} />
                </div>

                <div className='fila'>
                    <Casilla numFila={1} numColumna={0} letra={tablero[1][0]} comunicarPadre={comunicarPadre} />
                    <Casilla numFila={1} numColumna={1} letra={tablero[1][1]} comunicarPadre={comunicarPadre} />
                    <Casilla numFila={1} numColumna={2} letra={tablero[1][2]} comunicarPadre={comunicarPadre} />
                </div>

                <div className='fila'>
                    <Casilla numFila={2} numColumna={0} letra={tablero[2][0]} comunicarPadre={comunicarPadre} />
                    <Casilla numFila={2} numColumna={1} letra={tablero[2][1]} comunicarPadre={comunicarPadre} />
                    <Casilla numFila={2} numColumna={2} letra={tablero[2][2]} comunicarPadre={comunicarPadre} />
                </div>
            </div>
        </>
    )
}

export default TresEnRaya
