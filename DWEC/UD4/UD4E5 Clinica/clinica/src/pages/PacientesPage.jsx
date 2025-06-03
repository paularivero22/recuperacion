import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import $negocio from '../core/negocio';
import './pacientes.css';

function PacientesPage() {
    const [pacientes, setPacientes] = useState([]);

    const [filtro, setFiltro] = useState("");

    const [elementosPorPagina, setElementosPorPagina] = useState("todos");
    const [paginaActual, setPaginaActual] = useState(1);
    const [inicio, setInicio] = useState();
    const [limite, setLimite] = useState();
    const [totalPaginas, setTotalPaginas] = useState(1);

    const [pacientesMostrados, setPacientesMostrados] = useState([]);

    useEffect(() => {
        obtenerPacientes(filtro);
    }, []);

    useEffect(() => {
        handlePaginador();
    }, [pacientes, paginaActual, elementosPorPagina]);


    async function obtenerPacientes(filtro = '', inicio = 0, limite) {
        try {
            let pacientesData = await $negocio.obtenerPacientes(filtro, inicio, limite);
            setPacientes(pacientesData);
        } catch (e) {
            console.log(e);
        }
    }

    const handlerBuscar = async () => {
        await obtenerPacientes(filtro);
        setPaginaActual(1); // Reinicia a la primera página
    };


    const eliminarPaciente = async (id) => {
        if (confirm("¿Seguro que desea eliminar el paciente?")) {
            await $negocio.eliminarPaciente(id);
            await obtenerPacientes(filtro, inicio, limite);
        }
    }

    const handlePaginador = () => {
        const todos = elementosPorPagina === "todos";
        const itemsPorPagina = todos ? pacientes.length : elementosPorPagina;
        const indiceInicio = (paginaActual - 1) * itemsPorPagina;
        const indiceFin = indiceInicio + itemsPorPagina;

        setTotalPaginas(todos ? 1 : Math.ceil(pacientes.length / itemsPorPagina));
        setPacientesMostrados(pacientes.slice(indiceInicio, indiceFin));
    };

    const nuevoPaciente = () => {

    }

    return (
        <div className='contenido'>
            <div className='filtros'>
                <input
                    type='text'
                    name='busqueda'
                    value={filtro}
                    placeholder='Buscar...'
                    onChange={(e) => setFiltro(e.target.value)}
                />
                <button onClick={handlerBuscar}>Buscar</button>

                <label>Mostrar por pagina:
                    <select
                        value={elementosPorPagina}
                        onChange={(e) => {
                            if (e.target.value === "todos") {
                                setElementosPorPagina("todos");
                            } else {
                                setElementosPorPagina(parseInt(e.target.value));
                            }
                        }}
                    >
                        <option value={"todos"}>Todos</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>15</option>
                    </select>
                </label>

                <br></br><br></br>
                <button onClick={nuevoPaciente}>Nuevo Paciente</button>
            </div>

            <div className='pacientes'>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Dni</th>
                            <th>Email</th>
                            <th>Telefono</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Sexo</th>
                            <th>Direccion</th>
                            <th>Seguro Medico</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pacientesMostrados.map((paciente, index) => {
                            return (
                                <tr key={index}>
                                    <td>{paciente.nombre}</td>
                                    <td>{paciente.dni}</td>
                                    <td>{paciente.email}</td>
                                    <td>{paciente.telefono}</td>
                                    <td>{paciente.fechaNacimiento}</td>
                                    <td>{paciente.sexo}</td>
                                    <td>{paciente.direccion}</td>
                                    <td>{paciente.seguroMedico}</td>
                                    <td>
                                        <button onClick={() => eliminarPaciente(paciente.id)}>Eliminar</button>
                                        <Link to={`/detallesPaciente/${paciente.id}`}>Ver Paciente</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="paginador">
                    <button
                        onClick={() => setPaginaActual(pagina => Math.max(pagina - 1, 1))}
                    >
                        Anterior
                    </button>

                    <span>Pagina {paginaActual} de {totalPaginas}</span>

                    <button
                        onClick={() => setPaginaActual(pagina => Math.min(pagina + 1, totalPaginas))}
                    >
                        Siguiente
                    </button>
                </div>
            </div>

        </div>
    );
}

export default PacientesPage;