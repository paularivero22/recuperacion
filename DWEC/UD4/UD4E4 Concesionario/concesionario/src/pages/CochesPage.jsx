import { useState, useEffect } from 'react';
import $negocio from '../core/negocio';
import './coches.css';

function CochesPage() {
    const [coches, setCoches] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [cochesFiltrados, setCochesFiltrados] = useState([]);
    const [elementosPorPagina, setElementosPorPagina] = useState("todos");
    const [paginaActual, setPaginaActual] = useState(1);

    useEffect(() => {
        getCoches();
    }, []);

    async function getCoches() {
        try {
            const cochesData = await $negocio.obtenerCoches();
            setCoches(cochesData);
            setCochesFiltrados(cochesData);
        } catch (e) {
            console.log(e);
        }
    }

    const buscar = () => {
        const filtro = coches.filter(coche =>
            coche.modelo.toLowerCase().includes(busqueda.toLowerCase())
        );
        setCochesFiltrados(filtro);
        setPaginaActual(1); // reinicia a la primera pagina cuando se hace una nueva búsqueda
    };

    // calculo de indices para calcular que coches mostrar en esta pagina
    const indiceInicio = (paginaActual - 1) * (elementosPorPagina === "todos" ? cochesFiltrados.length : elementosPorPagina);
    const indiceFin = indiceInicio + (elementosPorPagina === "todos" ? cochesFiltrados.length : elementosPorPagina);

    // coches visibles en la pagina actual
    const cochesMostrados = cochesFiltrados.slice(indiceInicio, indiceFin);

    // calculo total de paginas
    const totalPaginas = elementosPorPagina === "todos"
        ? 1
        : Math.ceil(cochesFiltrados.length / elementosPorPagina);

    return (
        <>
            <div className='contenido'>
                <h1>Coches</h1>
                <div className='cuerpo'>

                    <div className='filtros'>
                        <input
                            type='text'
                            value={busqueda}
                            placeholder='Buscar por modelo...'
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                        <button onClick={buscar}>Buscar</button>

                        <p>Elementos por pagina
                            <select
                                value={elementosPorPagina}
                                onChange={(e) => {
                                    const valor = e.target.value;

                                    // if else para convertir el valor a numero
                                    if (valor === "todos") {
                                        setElementosPorPagina("todos");
                                    } else {
                                        setElementosPorPagina(parseInt(valor));
                                    }

                                    setPaginaActual(1); // volver a la primera pagina al cambiar de valor
                                }}
                            >
                                <option value="todos">Todos</option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                            </select>
                        </p>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Año</th>
                                <th>Km</th>
                                <th>Color</th>
                                <th>Precio</th>
                                <th>Combustible</th>
                                <th>Transmision</th>
                                <th>Potencia</th>
                                <th>Puertas</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cochesMostrados.map((coche, index) => (
                                <tr key={index}>
                                    <td>{coche.marca}</td>
                                    <td>{coche.modelo}</td>
                                    <td>{coche.anno}</td>
                                    <td>{coche.km}</td>
                                    <td>{coche.color}</td>
                                    <td>{coche.precio}</td>
                                    <td>{coche.combustible}</td>
                                    <td>{coche.transmision}</td>
                                    <td>{coche.potencia}</td>
                                    <td>{coche.puertas}</td>
                                    <td>{coche.estado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="paginador">
                        {/* boton para pasar a la pagina anterior */}
                        <button
                            onClick={() => setPaginaActual(p => Math.max(p - 1, 1))}
                        >
                            Anterior
                        </button>

                        <span>Página {paginaActual} de {totalPaginas}</span>

                        {/* boton para la siguiente pagina */}
                        <button
                            onClick={() => setPaginaActual(p => Math.min(p + 1, totalPaginas))}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CochesPage;
