import obtenerDatos from './script.js';

let paginaActual = 1;

async function cargarUsuarios() {
    try {
        const usuarios = await obtenerDatos('users');
        return usuarios;
    } catch (error) {
        console.log('Error', error);
    }
}

async function mostrarTablaUsuarios(buscar, numeroUsuarios) {
    const usuarios = await cargarUsuarios();
    let busqueda = buscar.toLowerCase();

    let usuariosFiltrados = usuarios.filter(usuario =>
        usuario.name.toLowerCase().includes(busqueda)
    );

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

    for (let i = inicio; i < fin; i++) {
        let usuario = usuariosFiltrados[i];
        
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
        address.innerHTML = JSON.stringify(usuario.address);

        let phone = document.createElement('div');
        phone.innerHTML = usuario.phone;

        let website = document.createElement('div');
        website.innerHTML = usuario.website;

        let company = document.createElement('div');
        company.innerHTML = JSON.stringify(usuario.company);

        //añadir los campos a la fila
        fila.appendChild(name);
        fila.appendChild(username);
        fila.appendChild(email);
        fila.appendChild(address);
        fila.appendChild(phone);
        fila.appendChild(website);
        fila.appendChild(company);

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
