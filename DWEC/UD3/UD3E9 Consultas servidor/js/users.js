import obtenerDatos from './script.js';

let paginaActual = 1;

async function cargarUsuarios(buscador = "", start = 0, limit = 10) {
    try {
        let url = `users?_start=${start}&_limit=${limit}`;

        if (buscador.trim() !== "") {
            url += `&name_like=${encodeURIComponent(buscador)}`;
        }

        const usuarios = await obtenerDatos(url);
        return usuarios;
    } catch (error) {
        console.log('Error', error);
        return [];
    }
}

async function mostrarTablaUsuarios(buscar, numeroUsuarios) {
    const usuarios = await cargarUsuarios();
    let busqueda = buscar.toLowerCase();

    const usuariosFiltrados = usuarios.filter(usuario =>
        usuario.name.toLowerCase().includes(busqueda)
    );

    if (usuariosFiltrados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron usuarios.</p>";
        document.getElementById('paginador').innerHTML = "";
        return;
    }


    //si es el valor "all" el total de elementos por pagina son todos los que hay
    let elementosPorPagina;
    if (numeroUsuarios === "all") {
        elementosPorPagina = usuariosFiltrados.length;
    } else {
        elementosPorPagina = parseInt(numeroUsuarios);
    }

    //calcular cuantas paginas mostrar redondeando los usuarios a mostrar entre 
    //los usuarios por pagina
    let totalPaginas = Math.ceil(usuariosFiltrados.length / elementosPorPagina);

    //controlar que pagina actual este en una pagina que exista
    if (paginaActual > totalPaginas) {
        paginaActual = totalPaginas;
    }
    if (paginaActual < 1) {
        paginaActual = 1;
    }

    //calcular el indice del primer y ultimo usuario a mostrar
    const inicio = (paginaActual - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;

    const tabla = document.createElement('div');
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = "";

    let filaTitulos = document.createElement('div');
    filaTitulos.classList.add('fila');

    let nombre = document.createElement('div');
    nombre.innerHTML = "Nombre";

    let usuario = document.createElement('div');
    usuario.innerHTML = "Usuario";

    let email = document.createElement('div');
    email.innerHTML = "Email";

    let direccion = document.createElement('div');
    direccion.innerHTML = "Direccion";

    let telefono = document.createElement('div');
    telefono.innerHTML = "Telefono";

    let paginaWeb = document.createElement('div');
    paginaWeb.innerHTML = "Pagina Web";

    let compania = document.createElement('div');
    compania.innerHTML = "Compañia";

    let acciones = document.createElement('div');
    acciones.innerHTML = "Acciones";

    filaTitulos.appendChild(nombre);
    filaTitulos.appendChild(usuario);
    filaTitulos.appendChild(email);
    filaTitulos.appendChild(direccion);
    filaTitulos.appendChild(telefono);
    filaTitulos.appendChild(paginaWeb);
    filaTitulos.appendChild(compania);
    filaTitulos.appendChild(acciones);

    tabla.appendChild(filaTitulos);

    for (let i = inicio; i < fin; i++) {
        let usuario = usuariosFiltrados[i];
        let filaSeleccionada = null;

        //crear cada fila y ponerle la clase para el css
        let fila = document.createElement('div');
        fila.classList.add('fila');

        //crear los campos
        let name = document.createElement('div');
        name.innerHTML = usuario.name;

        let username = document.createElement('div');
        username.innerHTML = usuario.username;

        let email = document.createElement('div');
        email.innerHTML = usuario.email;

        let address = document.createElement('div');
        address.innerHTML = `${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`;

        let phone = document.createElement('div');
        phone.innerHTML = usuario.phone;

        let website = document.createElement('div');
        website.innerHTML = usuario.website;

        let company = document.createElement('div');
        company.innerHTML = usuario.company.name;

        let acciones = document.createElement('div');
        acciones.innerHTML = `
            <button class="btn-editar" data-id="${usuario.id}">Editar</button>
            <button class="btn-eliminar" data-id="${usuario.id}">Eliminar</button>
        `;

        //añadir los campos a la fila
        fila.appendChild(name);
        fila.appendChild(username);
        fila.appendChild(email);
        fila.appendChild(address);
        fila.appendChild(phone);
        fila.appendChild(website);
        fila.appendChild(company);
        fila.appendChild(acciones);

        fila.addEventListener("click", function () {
            let seleccionadas = document.querySelectorAll('.seleccionada');
            let yaSeleccionada = fila.classList.contains('seleccionada');

            for (let seleccionada of seleccionadas) {
                seleccionada.classList.remove('seleccionada');
            }

            if (yaSeleccionada) {
                fila.classList.remove('seleccionada');
                filaSeleccionada = null;
            } else {
                fila.classList.add('seleccionada');
                filaSeleccionada = fila;
            }
            console.log(filaSeleccionada);
            console.log(botonEditar);
        });

        //añadir las filas a la tabla
        tabla.appendChild(fila);
    }

    contenedor.appendChild(tabla);

    crearPaginador(totalPaginas);
}

function crearPaginador(totalPaginas) {
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
            const filtro = document.getElementById('mostrarPorPagina').value;
            const busqueda = document.getElementById('buscar').value;
            mostrarTablaUsuarios(busqueda, filtro);
        });

        paginador.appendChild(boton);
    }
}

window.addEventListener("load", function () {
    mostrarTablaUsuarios("", 'all');

    const filtro = document.getElementById('mostrarPorPagina');
    const busqueda = document.getElementById('buscar');

    filtro.addEventListener("input", function () {
        paginaActual = 1;
        mostrarTablaUsuarios(busqueda.value, filtro.value);
    });

    busqueda.addEventListener("input", function () {
        paginaActual = 1;
        mostrarTablaUsuarios(busqueda.value, filtro.value);
    });
});
