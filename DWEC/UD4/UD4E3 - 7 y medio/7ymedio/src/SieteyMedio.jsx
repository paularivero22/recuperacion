import { useState } from "react";
import { barajarCartas, sumarCartas, recuperarCarta } from './utilidades.js';

const imagenes = {
    oros: "./src/assets/oros.png",
    bastos: "./src/assets/bastos.png",
    espadas: "./src/assets/espadas.png",
    copas: "./src/assets/copas.png",
}

function SieteyMedio() {
    const [manoJugador, setManoJugador] = useState([]);
    const [manoMaquina, setManoMaquina] = useState([]);
    const [cartasBarajadas, setCartasBarajadas] = useState(barajarCartas());
    const [ganador, setGanador] = useState("");

    const sacarCarta = (cartas) => {
        const copiaCartas = [...cartas];
        const idCarta = copiaCartas.shift();
        const carta = recuperarCarta(idCarta);
        return { carta, nuevaBaraja: copiaCartas };
    }

    const añadirCarta = () => {
        if (sumarCartas(manoJugador) <= 7.5) {
            const { carta, nuevaBaraja } = sacarCarta(cartasBarajadas);
            setManoJugador([...manoJugador, carta]);
            setCartasBarajadas(nuevaBaraja);
        } else {
            setGanador("maquina");
        }
    }


    const juegoMaquina = () => {
        let nuevaMano = [...manoMaquina];
        let barajaActual = [...cartasBarajadas];

        while (sumarCartas(nuevaMano) <= 7.5 && barajaActual.length > 0) {
            const { carta, nuevaBaraja } = sacarCarta(barajaActual);
            nuevaMano.push(carta);
            barajaActual = nuevaBaraja;
        }

        setManoMaquina(nuevaMano);
        setCartasBarajadas(barajaActual);
        comprobarGanador();
    }

    const comprobarGanador = () => {
        const distanciaMaquina = sumarCartas(manoMaquina) - 7.5;
        const diferenciaJugador = sumarCartas(manoJugador) - 7.5
        if(distanciaMaquina < diferenciaJugador) {
            setGanador("Maquina");
        } else {
            setGanador("Jugador");
        }
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
                    <ul>
                        {manoMaquina.map((carta, key) => {
                            return (
                                <li key={key} className="carta">
                                    <img src={imagenes[carta.palo]}></img>
                                    {carta.numero}
                                    <p className="valor">Valor: {carta.valor}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <p>Total: {sumarCartas(manoMaquina)}</p>
            </div>

            <div className='jugador'>
                <h2>Jugador</h2>
                <div className='cartasJugador'>
                    <ul>
                        {manoJugador.map((carta, key) => {
                            return (
                                <li key={key} className="carta">
                                    <img src={imagenes[carta.palo]}></img>
                                    {carta.numero}
                                    <p className="valor">Valor: {carta.valor}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <p>Total: {sumarCartas(manoJugador)}</p>
                <div className='botones'>
                    <button id='dameCarta' name='dameCarta' onClick={() => añadirCarta()}>Dame Carta</button>
                    <button id='mePlanto' name='mePlanto' onClick={() => juegoMaquina()}>Me Planto</button>
                </div>
            </div>
        </>
    )
}

export default SieteyMedio;