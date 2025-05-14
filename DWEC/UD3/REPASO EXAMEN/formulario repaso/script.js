import { alumnos } from './datos.js';

function generarFormularioCreacion() {
    return `
        <form>
        <label for="nombre">Nombre: </label>
        <input type="text" id="nombre" name="nombre">
        <br><br>

        <label for="edad">Edad: </label>
        <input type="number" id="edad" name="edad" step="1">
        <br><br>

        <label form="email">Email: </label>
        <input type="email" name="email" id="email">
        <br><br>

        <button id="guardar">Guardar</button>
    </form>
    `;
}

function añadirAlumno(nombre, edad, correo) {
    alumnos.push({
        nombre: nombre,
        edad: edad,
        correo: correo
    });
}

function mostrarAlumnos() {
    for (let alumno of alumnos) {
        console.log(alumno);
    }
}

const boton = document.getElementById('añadir');
boton.addEventListener('click', function (event) {
    event.preventDefault();
    
    const contenido = document.getElementById('contenido');
    contenido.innerHTML = generarFormularioCreacion();

    const guardar = document.getElementById('guardar');
    guardar.addEventListener('click', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const edad = document.getElementById('edad').value;
        const email = document.getElementById('email').value;

        añadirAlumno(nombre, edad, email);
        mostrarAlumnos();
    })
});