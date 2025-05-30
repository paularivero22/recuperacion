import { useState, useEffect } from 'react';
import $negocio from '../core/negocio';
import './inicio.css';

function InicioPage() {
    const [coches, setCoches] = useState([]);

    useEffect(() => {
        getCoches();
    }, []);

    async function getCoches() {
        try {
            let cochesData = await $negocio.obtenerCoches();
            setCoches(cochesData);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <h1>Pagina de Inicio</h1>
            <div className='coches'>
                {coches && coches.map((coche, index) => {
                    return (
                        <div className='coche' key={index}>
                            <p>{coche.marca}{coche.modelo}</p>
                            <p>{coche.anno}</p>
                            <p>{coche.km}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default InicioPage;