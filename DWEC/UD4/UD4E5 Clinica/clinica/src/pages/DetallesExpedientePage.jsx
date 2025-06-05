import { useParams } from "react-router-dom";
import $negocio from "../core/negocio.js";
import { useEffect, useState } from "react";
import './detalle.css';

function DetallesExpedientePage() {
    const { id } = useParams();
    const [expediente, setExpediente] = useState(null);

    useEffect(() => {
        cargarDatos(id);
    }, [id]);

    const cargarDatos = async (id) => {
        try {
            let expedienteData = await $negocio.obtenerExpediente(id);
            setExpediente(expedienteData);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            {datos.rol === "medico" || datos.rol === "admin" ? (
                <>
                    <table className="info">
                        <thead>
                            <tr>
                                <th>ID del Paciente</th>
                                <th>Fecha de Apertura</th>
                                <th>Antecedentes</th>
                                <th>Diagnosticos</th>
                                <th>Tratamientos</th>
                                <th>Observaciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {expediente && (
                                <tr>
                                    <td>{expediente.pacienteId}</td>
                                    <td>{expediente.fechaApertura}</td>
                                    <td>{expediente.antecedentes}</td>
                                    <td>{expediente.diagnosticos}</td>
                                    <td>{expediente.tratamientos}</td>
                                    <td>{expediente.observaciones}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            ) : (
                <h2>No tienes permiso para ver esta sección</h2>
            )}
        </>
    );
}

export default DetallesExpedientePage;