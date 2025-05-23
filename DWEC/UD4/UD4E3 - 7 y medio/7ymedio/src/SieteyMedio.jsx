import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from "react";
import { barajarCartas, sumarCartas, recuperarCarta } from './utilidades.js';

function SieteyMedio() {
    const [manoJugador, setManoJugador] = useState([]);
    const [manoMaquina, setManoMaquina] = useState([]);

    const cartasBarajadas = barajarCartas();

    const sacarCarta = () => {
        let carta = recuperarCarta(cartasBarajadas.shift());
        return carta;
    }

    const añadirCarta = (mano) => {
        if (mano.toLowerCase() === "jugador") {
            let manoJ = [...manoJugador];
            let carta = sacarCarta();
            manoJ.push(carta);
            setManoJugador(manoJ);
            return true;
        } else if (mano.toLowerCase() === "maquina") {
            let manoM = [...manoMaquina];
            let carta = sacarCarta();
            manoM.push(carta);
            setManoMaquina(manoM);
            return true;
        }
        return false;
    }
    
    const juegoMaquina = () => {
        
    }

    return (
        <>
            <div className='resumen'>
                <h3>Resumen de las partidas</h3>
                <div>
                    <p>Ganadas por el jugador: </p>
                </div>
                <div>
                    <p>Ganadas por la maquina: </p>
                </div>
                <button id='nuevaPartida' name='nuevaPartida'>Nueva Partida</button>
            </div>

            <div className='crupier'>
                <h2>Crupier</h2>
                <div className='cartasCrupier'>

                </div>
                <p>Total: </p>
            </div>

            <div className='jugador'>
                <h2>Jugador</h2>
                <div className='cartasJugador'>

                </div>
                <p>Total: </p>
                <div className='botones'>
                    <button id='dameCarta' name='dameCarta' onClick={() => añadirCarta("jugador")}>Dame Carta</button>
                    <button id='mePlanto' name='mePlanto'>Me Planto</button>
                </div>
            </div>
        </>
    )
}

export default SieteyMedio;