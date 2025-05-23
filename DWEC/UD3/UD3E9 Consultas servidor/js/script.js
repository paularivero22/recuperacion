import AplicacionError from "./AplicacionError.js";

async function obtenerDatos(endpoint) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
        if (!response.ok) {
            throw new AplicacionError(`Error HTTP: ${response.status}`, null);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al realizar la solicitud:", error.message);
        if (error instanceof AplicacionError) {
            throw error;
        }
        throw new AplicacionError("Ha ocurrido un problema", error);
    }
}


async function mostrarTarjetas(div) {
    const entidades = ['users', 'todos', 'posts', 'comments', 'albums', 'photos'];
    
    let tarjetas = document.createElement('div');
    tarjetas.classList.add('tarjetas');

    for (let i = 0; i < entidades.length; i++) {
        let entidad = entidades[i];
        let tarjeta = document.createElement('div');

        let datos = await obtenerDatos(entidad);

        tarjeta.innerHTML = `<p>${entidad}</p> <br/> <p>Total: ${datos.length}`;

        tarjeta.addEventListener('click', () => {
            window.location.href = `./entidades/${entidad}.html`;
        });

        tarjetas.appendChild(tarjeta);
    }
    let contenido = document.getElementById('contenido');
    div.appendChild(tarjetas);
}

let contenido = document.getElementById('contenido');
mostrarTarjetas(contenido);

export default obtenerDatos;