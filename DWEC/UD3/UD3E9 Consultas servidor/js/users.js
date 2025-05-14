import obtenerDatos from './script.js';

async function cargarUsuarios() {
    try {
        const usuarios = await obtenerDatos('users');
        return usuarios;
    } catch (error) {
        console.log('Error', err);
    }
}

async function mostrarTablaUsuarios(buscar, numeroUsuarios) {
    const usuarios = await cargarUsuarios();
    let busqueda = buscar.toLowerCase();
    const tabla = document.createElement('div');

    let elementosPorPagina;

    if (numeroUsuarios === "all") {
        elementosPorPagina = usuarios.length;
    } else {
        elementosPorPagina = numeroUsuarios;
    }

    let index = 0;

    for (let usuario of usuarios) {
        let fila = document.createElement('div');
        fila.classList.add('fila');

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

        fila.appendChild(name);
        fila.appendChild(username);
        fila.appendChild(email);
        fila.appendChild(address);
        fila.appendChild(phone);
        fila.appendChild(website);
        fila.appendChild(company);

        index++;

        if (index <= elementosPorPagina) {
            if ((usuario.name.toLowerCase().includes(busqueda.toLowerCase())) || (busqueda === "")) {
                tabla.appendChild(fila);
            }
        }
    }

    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = "";
    contenedor.appendChild(tabla);
}

window.addEventListener("load", function () {
    mostrarTablaUsuarios("", 'all');

    const filtro = document.getElementById('mostrarPorPagina');
    const busqueda = document.getElementById('buscar');


    filtro.addEventListener("input", function () {
        mostrarTablaUsuarios(busqueda.value, filtro.value);
    });

    busqueda.addEventListener("input", function () {
        mostrarTablaUsuarios(busqueda.value, filtro.value);
    });
})
