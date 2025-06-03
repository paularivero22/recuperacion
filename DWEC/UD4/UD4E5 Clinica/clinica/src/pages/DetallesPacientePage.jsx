import { useState, useEffect, useParams } from 'react';
import $negocio from '../core/negocio';
import './detallePacientes.css';

function DetallesPacientePage() {
    const { id } = useParams();
    const [paciente, setPaciente] = useState(null);

    useEffect(() => {
        obtenerPaciente();
    }, []);

    async function obtenerPaciente() {
        try {
            let pacienteData = await $negocio.obtenerPaciente(id);
            setPaciente(pacienteData);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
        
        </>
    );
}

export default DetallesPacientePage;