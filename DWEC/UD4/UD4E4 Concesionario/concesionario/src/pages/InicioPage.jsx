import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
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
                            <b><p>{coche.marca} {coche.modelo}</p></b>
                            <p>Año: {coche.anno}</p>
                            <p>Km: {coche.km}</p>
                            <p>Color: {coche.color}</p>
                            <p>
                                <Link to={`/detallesCoche/${coche.id}`}>Ver ficha</Link>
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default InicioPage;