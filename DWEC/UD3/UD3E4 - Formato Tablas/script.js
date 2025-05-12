import { alumnos } from './datos.js';

let datosAlumnos = alumnos;

function mostrarAlumnos(nodo, tipo) {
    if (tipo === "tabla") {
        let filaTitulos = document.createElement('div');
        filaTitulos.classList.add('fila', 'fila-titulo');

        //TITULOS
        let tituloNombre = document.createElement('div');
        tituloNombre.innerHTML = "Nombre";

        let tituloDni = document.createElement('div');
        tituloDni.innerHTML = "Dni";

        let tituloCurso = document.createElement('div');
        tituloCurso.innerHTML = "Curso";

        let tituloAsignaturas = document.createElement('div');
        tituloAsignaturas.innerHTML = "Asignaturas";

        let tituloTelefono = document.createElement('div');
        tituloTelefono.innerHTML = "Telefono";

        let tituloEmail = document.createElement('div');
        tituloEmail.innerHTML = "Email";

        filaTitulos.appendChild(tituloNombre);
        filaTitulos.appendChild(tituloDni);
        filaTitulos.appendChild(tituloCurso);
        filaTitulos.appendChild(tituloAsignaturas);
        filaTitulos.appendChild(tituloTelefono);
        filaTitulos.appendChild(tituloEmail);

        nodo.appendChild(filaTitulos);
    } 

    let contenedorFichas;
    if (tipo === "ficha") {
        contenedorFichas = document.createElement('div');
        contenedorFichas.classList.add('fichas');
        nodo.appendChild(contenedorFichas);
    }

    for (let datoAlumno of datosAlumnos) {
        const alumno = document.createElement('div');

        //PROPIEDADES
        let nombre = document.createElement('div');
        nombre.innerHTML = datoAlumno.nombre;

        let dni = document.createElement('div');
        dni.innerHTML = datoAlumno.dni;

        let curso = document.createElement('div');
        curso.innerHTML = datoAlumno.curso;

        let asignaturas = document.createElement('div');
        if(tipo ==="tabla") {
            asignaturas.innerHTML = datoAlumno.asignaturas.join(', ');
        } else {
            let lista = document.createElement('ul');
            asignaturas.appendChild(lista);
            for(let asignatura of datoAlumno.asignaturas) {
                let elementoLista = document.createElement('li');
                elementoLista.innerHTML = asignatura;
                lista.appendChild(elementoLista);
            }
        }


        let telefono = document.createElement('div');
        telefono.innerHTML = datoAlumno.telefono;

        let email = document.createElement('div');
        email.innerHTML = datoAlumno.email;

        alumno.appendChild(nombre);
        alumno.appendChild(dni);
        alumno.appendChild(curso);
        alumno.appendChild(asignaturas);
        alumno.appendChild(telefono);
        alumno.appendChild(email);



        if (tipo === "tabla") {
            alumno.classList.add('fila');
            nodo.appendChild(alumno);
        } else if (tipo === "ficha") {
            alumno.classList.add('ficha');
            contenedorFichas.appendChild(alumno);
        }

        //CONTROLAR FILA SELECCIONADA
        alumno.addEventListener("click", function () {
            let seleccionadas = document.querySelectorAll('.seleccionada');
            for (let seleccionada of seleccionadas) {
                seleccionada.classList.remove('seleccionada');
            }

            alumno.classList.add('seleccionada');
        });
    }
}

function iniciar() {
    let tabla = document.getElementById('tabla');
    let ficha = document.getElementById('ficha');
    let contenido = document.getElementById('contenido');

    tabla.addEventListener('click', function () {
        contenido.innerHTML = " ";
        mostrarAlumnos(contenido, "tabla");
    });

    ficha.addEventListener('click', function () {
        contenido.innerHTML = "";
        mostrarAlumnos(contenido, "ficha");
    });
}

iniciar();