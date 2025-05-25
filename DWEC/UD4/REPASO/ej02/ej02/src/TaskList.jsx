import React, { useState, useEffect, useRef } from "react";

function TaskList() {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);
    const esPrimerRender = useRef(true);

    const agregarTarea = () => {
        if (tarea != "") {
            let tareasCopia = [...tareas];
            tareasCopia.push(tarea);
            setTareas(tareasCopia);
        } else {
            alert("La tarea está vacia");
        }
    }

    const eliminarTarea = (tareaAEliminar) => {
        let tareasFiltradas = tareas.filter((tarea) => tarea !== tareaAEliminar);
        setTareas(tareasFiltradas);
    }

    return (
        <>
            <h2>Lista de Tareas</h2>
            <ul>
                {tareas.map((t) => (
                    <li>
                        {t}
                        <button onClick={() => eliminarTarea(t)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <input
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                placeholder="Escribe una tarea"
            />
            <button id="agregarTarea" onClick={agregarTarea}>Agregar Tarea</button>
        </>
    );
}

export default TaskList;