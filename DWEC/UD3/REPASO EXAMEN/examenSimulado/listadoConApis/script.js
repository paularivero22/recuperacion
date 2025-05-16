import { ValidacionError } from "./ValidacionError.js";

async function cargarAlumnos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new ValidacionError(`Error al hacer la peticion`, null);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof ValidacionError) {
            throw error;
        }
        throw new ValidacionError("Ha ocurrido un problema inesperado: ", error);
    }
}

let alumnos = [];

async function mostrarTablaAlumnos(buscador) {
    try {
        if (alumnos.length === 0) {
            alumnos = await cargarAlumnos();
        }
        
        let busqueda = buscador.toLowerCase();
        let alumnosFiltrados = alumnos.filter(alumno => alumno.name.toLowerCase().includes(busqueda));

        const tabla = document.createElement('div');
        tabla.classList.add('tabla');

        const filaTitulos = document.createElement('div');

        const nombre = document.createElement('div');
        nombre.innerHTML = "Nombre";

        const correo = document.createElement('div');
        correo.innerHTML = "Correo";

        const telefono = document.createElement('div');
        telefono.innerHTML = "Teléfono";

        const acciones = document.createElement('div');
        acciones.innerHTML = "Acciones";

        filaTitulos.appendChild(nombre);
        filaTitulos.appendChild(correo);
        filaTitulos.appendChild(telefono);
        filaTitulos.appendChild(acciones);

        filaTitulos.classList.add('fila', 'fila-titulo');

        tabla.appendChild(filaTitulos);

        const cuerpoTabla = document.createElement('div');
        cuerpoTabla.classList.add("cuerpoTabla");

        for (let i = 0; i < alumnosFiltrados.length; i++) {
            let alumno = alumnosFiltrados[i];

            const filaALumno = document.createElement('div');

            const name = document.createElement('div');
            name.innerHTML = alumno.name;

            const email = document.createElement('div');
            email.innerHTML = alumno.email;

            const phone = document.createElement('div');
            phone.innerHTML = alumno.phone;

            const acciones = document.createElement('div');
            acciones.innerHTML = `
            <button class="eliminar">Eliminar</button>`;

            filaALumno.appendChild(name);
            filaALumno.appendChild(email);
            filaALumno.appendChild(phone);
            filaALumno.appendChild(acciones);

            filaALumno.classList.add('fila');
            filaALumno.dataset.id = alumno.id;
            //filaALumno.setAttribute('data-id', alumno.id);

            filaALumno.addEventListener("click", function () {
                let seleccionadas = document.querySelectorAll(".seleccionada");
                for (let seleccionada of seleccionadas) {
                    seleccionada.classList.remove('seleccionada');
                }
                filaALumno.classList.add('seleccionada');
            })
            cuerpoTabla.appendChild(filaALumno);
        }

        tabla.appendChild(cuerpoTabla);
        const contenedor = document.getElementById('contenedor');
        contenedor.appendChild(tabla);

    } catch (error) {
        console.error("Error", error.message);
    }
}

function eliminarAlumno(idAlumno) {
    return alumnos.filter(alumno => alumno.id !== idAlumno);
}


function editarAlumno(id, nuevoNombre, nuevoEmail, nuevoTelefono) {
    for (let alumno of alumnos) {
        if (alumno.id === id) {
            alumno.name = nuevoNombre;
            alumno.email = nuevoEmail;
            alumno.phone = nuevoTelefono;
        }
    }
}

function crearAlumno(nombre, email, telefono) {
    alumnos.push({
        id: alumnos.length,
        name: nombre,
        email: email,
        phone: telefono
    });
}

let alumnoSeleccionado = null;

window.addEventListener("load", async function () {
    const contenedor = this.document.getElementById('contenedor');

    await mostrarTablaAlumnos("");

    const buscar = this.document.getElementById('buscar');
    buscar.addEventListener("input", async function () {
        contenedor.innerHTML = "";
        await mostrarTablaAlumnos(buscar.value);
    });

    const limpiar = this.document.getElementById('limpiar');
    limpiar.addEventListener("click", function (e) {
        e.preventDefault();

        document.getElementById('inputNombre').value = "";
        document.getElementById('inputEmail').value = "";
        document.getElementById('inputTelefono').value = "";

        alumnoSeleccionado = null;
    });


    const guardar = this.document.getElementById('guardar');
    guardar.addEventListener("click", async function (e) {
        e.preventDefault();


        let nuevoNombre = document.getElementById('inputNombre').value;
        let nuevoEmail = document.getElementById('inputEmail').value;
        let nuevoTelefono = document.getElementById('inputTelefono').value;

        if (alumnoSeleccionado != null) {
            editarAlumno(alumnoSeleccionado.id, nuevoNombre, nuevoEmail, nuevoTelefono);
            buscar.value = "";
            contenedor.innerHTML = "";
            await mostrarTablaAlumnos("");
        } else {
            crearAlumno(nuevoNombre, nuevoEmail, nuevoTelefono);
            buscar.value = "";
            contenedor.innerHTML = "";
            await mostrarTablaAlumnos("");
        }
    })

    contenedor.addEventListener("click", function (e) {
        e.preventDefault();

        if (alumnos.length > 0) {
            if (e.target.classList.contains('eliminar')) {
                let filaSeleccionada = e.target.closest('.fila');
                if (filaSeleccionada && alumnos.length > 0) {
                    let id = filaSeleccionada.dataset.id;
                    alumnos = eliminarAlumno(parseInt(id));
                    filaSeleccionada.remove();
                }
                alumnoSeleccionado = null;
                document.getElementById('inputNombre').value = "";
                document.getElementById('inputEmail').value = "";
                document.getElementById('inputTelefono').value = "";
            } else {
                let filaSeleccionada = e.target.closest('.fila');
                let id = parseInt(filaSeleccionada.dataset.id);

                if (filaSeleccionada) {
                    for (let alumno of alumnos) {
                        if (alumno.id === id) {
                            alumnoSeleccionado = alumno;
                        }
                    }

                    document.getElementById('inputNombre').value = alumnoSeleccionado.name;
                    document.getElementById('inputEmail').value = alumnoSeleccionado.email;
                    document.getElementById('inputTelefono').value = alumnoSeleccionado.phone;
                }
            }
        } else {
            console.log("No hay alumnos");
        }
    })
})
