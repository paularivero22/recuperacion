import { useState } from 'react'

function ListaTareas() {
    const tareasIniciales = [
        { id: 1, titulo: "Comprar alimentos", encargado: "Ana", estado: "abierta" },
        { id: 2, titulo: "Lavar el auto", encargado: "Luis", estado: "cerrada" },
        { id: 3, titulo: "Preparar presentación", encargado: "Marta", estado: "abierta" },
        { id: 4, titulo: "Hacer ejercicio", encargado: "Carlos", estado: "abierta" },
        { id: 5, titulo: "Enviar correos", encargado: "Sofía", estado: "cerrada" },
    ];


    const [nuevaTarea, setNuevaTarea] = useState({ titulo: '', encargado: '' });
    const [tareas, setTareas] = useState(tareasIniciales);
    const [estadoAMostrar, setEstadoAMostrar] = useState("abierta");

    const agregarTarea = () => {
        let tareasCopia = [...tareas];

        if (nuevaTarea.titulo != undefined && nuevaTarea.encargado != undefined) {
            tareasCopia.push({
                id: tareasCopia.length,
                titulo: nuevaTarea.titulo,
                encargado: nuevaTarea.encargado,
                estado: "abierta"
            });
        } else {
            alert("No puedes añadir una tarea vacia");
        }

        setTareas(tareasCopia);
    }

    const eliminarTarea = (id) => {
        let tareasCopia = [...tareas];

        const tareasFiltradas = tareasCopia.filter((tarea) => tarea.id != id);

        setTareas(tareasFiltradas);
    }

    const cerrarTarea = (id) => {
        let tareasCopia = [...tareas];

        for (let tarea of tareasCopia) {
            if (tarea.id === id) {
                tarea.estado = "cerrada";
            }
        }

        setTareas(tareasCopia);
    }

    const abrirTarea = (id) => {
        let tareasCopia = [...tareas];

        for (let tarea of tareasCopia) {
            if (tarea.id === id) {
                tarea.estado = "abierta";
            }
        }
        setTareas(tareasCopia);
    }


    return (
        <>
            <h2>Tareas</h2>
            <button onClick={() => setEstadoAMostrar("todas")}>Todas</button>
            <button onClick={() => setEstadoAMostrar("abierta")}>Abiertas</button>
            <button onClick={() => setEstadoAMostrar("cerrada")}>Cerradas</button>
            <br /><br />
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Titulo</th>
                        <th>Encargado</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tareas.map((tarea, indice) => {
                        if (tarea.estado === estadoAMostrar || estadoAMostrar === "todas") {
                            return (
                                <tr key={indice}>
                                    <td>{tarea.id}</td>
                                    <td>{tarea.titulo}</td>
                                    <td>{tarea.encargado}</td>
                                    <td>{tarea.estado}</td>
                                    <td>
                                        <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                                        <br></br>
                                        {tarea.estado === "abierta" ? (
                                            <button onClick={() => cerrarTarea(tarea.id)}>Cerrar Tarea</button>
                                        ) : (
                                            <button onClick={() => abrirTarea(tarea.id)}>Abrir Tarea</button>
                                        )}

                                    </td>
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </table>

            <h2>Añadir una tarea</h2>
            <input
                type='text'
                value={nuevaTarea.titulo}
                placeholder='Titulo'
                onChange={(e) =>
                    setNuevaTarea({ ...nuevaTarea, titulo: e.target.value })
                }
            />

            <br></br>

            <input
                type='text'
                value={nuevaTarea.encargado}
                placeholder='Encargado'
                onChange={(e) =>
                    setNuevaTarea({ ...nuevaTarea, encargado: e.target.value })
                }
            />
            <button onClick={agregarTarea}>Añadir</button>
        </>
    );
}

export default ListaTareas;