import obtenerDatos from "./script.js";

let paginaActual = 1;

async function cargarTareas() {
    try {
        const tareas = await obtenerDatos('todos');
        return tareas;
    } catch (error) {
        console.log('Error', error);
        return [];
    }
}

async function mostrarTablaTareas(buscador = "", numeroTareas = 10) {
    const todasLasTareas = await cargarTareas();
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = "";

    // Filtrar por buscador (título)
    const tareasFiltradas = todasLasTareas.filter(tarea =>
        tarea.title.toLowerCase().includes(buscador.toLowerCase())
    );

    // Determinar cantidad de tareas por página
    const elementosPorPagina = numeroTareas === "all"
        ? tareasFiltradas.length
        : parseInt(numeroTareas);

    const totalPaginas = Math.ceil(tareasFiltradas.length / elementosPorPagina);

    // Asegurarse que la página actual esté dentro del rango
    paginaActual = Math.max(1, Math.min(paginaActual, totalPaginas));

    // Cortar la lista para la página actual
    const inicio = (paginaActual - 1) * elementosPorPagina;
    const tareasPagina = tareasFiltradas.slice(inicio, inicio + elementosPorPagina);

    // Crear tabla
    const tabla = document.createElement('div');
    const filaTitulos = crearFila(["ID de Usuario", "Título", "Completada"]);
    filaTitulos.classList.add('fila');
    tabla.appendChild(filaTitulos);

    for (const tarea of tareasPagina) {
        const fila = crearFila([
            tarea.userId,
            tarea.title,
            tarea.completed ? "Sí" : "No"
        ]);
        fila.classList.add('fila');
        tabla.appendChild(fila);
    }

    contenedor.appendChild(tabla);

    crearPaginador(totalPaginas, buscador, numeroTareas);
}

function crearFila(contenidos) {
    const fila = document.createElement('div');
    fila.classList.add('fila');
    contenidos.forEach(texto => {
        const celda = document.createElement('div');
        celda.innerHTML = texto;
        fila.appendChild(celda);
    });
    return fila;
}

function crearPaginador(totalPaginas, buscador, numeroTareas) {
    const paginador = document.getElementById('paginador');
    paginador.innerHTML = "";

    for (let i = 1; i <= totalPaginas; i++) {
        const boton = document.createElement('button');
        boton.textContent = i;
        boton.classList.add('botonPagina');
        if (i === paginaActual) {
            boton.classList.add('activa');
        }

        boton.addEventListener('click', () => {
            paginaActual = i;
            mostrarTablaTareas(buscador, numeroTareas);
        });

        paginador.appendChild(boton);
    }
}

window.addEventListener("load", () => {
    const filtro = document.getElementById('mostrarPorPagina');
    const busqueda = document.getElementById('buscar');

    mostrarTablaTareas("", filtro.value);

    filtro.addEventListener("input", () => {
        paginaActual = 1;
        mostrarTablaTareas(busqueda.value, filtro.value);
    });

    busqueda.addEventListener("input", () => {
        paginaActual = 1;
        mostrarTablaTareas(busqueda.value, filtro.value);
    });
});
