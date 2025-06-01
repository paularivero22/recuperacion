import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import $negocio from '../core/negocio';

function DetallesCochePage() {
    const { id } = useParams();
    const [coche, setCoche] = useState(null);

    useEffect(() => {
        async function fetchCoche() {
            try {
                const cocheData = await $negocio.obtenerCoche(id);
                setCoche(cocheData);
            } catch (e) {
                console.log(e);
            }
        }
        fetchCoche();
    }, [id]);

    if (!coche) {
        return <>
        </>
    };

    return (
        <>
            <div>
                <h1>Ficha del coche</h1>
                <p><b>Marca:</b> {coche.marca}</p>
                <p><b>Modelo:</b> {coche.modelo}</p>
                <p><b>Año:</b> {coche.anno}</p>
                <p><b>Kilometraje:</b> {coche.km}</p>
                <p><b>Color:</b> {coche.color}</p>
                <p><b>Precio:</b> {coche.precio}</p>
                <p><b>Combustible:</b> {coche.combustible}</p>
                <p><b>Transmisión:</b> {coche.transmision}</p>
                <p><b>Potencia:</b> {coche.potencia}</p>
                <p><b>Puertas:</b> {coche.puertas}</p>
                <p><b>Estado:</b> {coche.estado}</p>
            </div>
        </>
    );
}

export default DetallesCochePage;