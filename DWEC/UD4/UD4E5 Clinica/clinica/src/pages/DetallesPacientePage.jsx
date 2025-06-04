import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import $negocio from '../core/negocio';
import './detalle.css';

function DetallesPacientePage() {
    const { id } = useParams();
    const [paciente, setPaciente] = useState(null);
    const [nuevoPaciente, setNuevoPaciente] = useState();
    
    useEffect(() => {
        if (!id) {
            
        } else {
            obtenerPaciente();
        }
    }, [id]);

    async function obtenerPaciente() {
        try {
            let pacienteData = await $negocio.obtenerPaciente(id);
            setPaciente(pacienteData);
        } catch (e) {
            console.log(e);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        let actualizado = { ...paciente, [name]: value };
        setPaciente(actualizado);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        await $negocio.actualizarPaciente(paciente);
    }

    return (
        <>
            <h1>Paciente</h1>
            {paciente && (
                <form className='detalle' onSubmit={handleSubmit}>
                    <label htmlFor='nombre'>Nombre</label>
                    <input
                        type='text'
                        name='nombre'
                        value={paciente.nombre}
                        onChange={handleChange}
                    />
                    <br></br>

                    <label htmlFor='dni'>Dni </label>
                    <input
                        type='text'
                        name='dni'
                        value={paciente.dni}
                        onChange={handleChange}
                    />

                    <br></br>

                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={paciente.email}
                        onChange={handleChange}
                    />
                    <br></br>

                    <label htmlFor='telefono'>Telefono</label>
                    <input
                        type='text'
                        name='telefono'
                        value={paciente.telefono}
                        onChange={handleChange}
                    />
                    <br></br>

                    <label htmlFor='fechaNacimiento'>Fecha de Nacimiento</label>
                    <input
                        type='date'
                        name='fechaNacimiento'
                        value={paciente.fechaNacimiento}
                        onChange={handleChange}
                    />
                    <br></br>

                    <label htmlFor='sexo'>Sexo</label>
                    <select
                        value={paciente.sexo}
                        name='sexo'
                        onChange={handleChange}
                    >
                        <option>Masculino</option>
                        <option>Femenino</option>
                        <option>Otro</option>
                    </select>

                    <br></br>

                    <label htmlFor='direccion'>Dirección</label>
                    <br />
                    <textarea
                        value={paciente.direccion}
                        name='direccion'
                        onChange={handleChange}>
                    </textarea>

                    <br></br>

                    <label htmlFor='seguro'>Seguro Médico</label>
                    <input
                        type='text'
                        name='seguro'
                        value={paciente.seguroMedico}
                        onChange={handleChange}
                    />
                    <br></br>

                    <button type="submit">Guardar</button>
                </form>
            )}
        </>
    );
}

export default DetallesPacientePage;