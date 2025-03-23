'use strict';

const alumnos = [
    {
        nombre: "Juan Pérez",
        asignaturas: [
            { modulo: "DWEC", nota: 7 },
            { modulo: "DIW", nota: 6 },
            { modulo: "DWES", nota: 8 },
            { modulo: "DAW", nota: 5 }
        ]
    },
    {
        nombre: "María López",
        asignaturas: [
            { modulo: "DWEC", nota: 4 },
            { modulo: "DIW", nota: 5 },
            { modulo: "DWES", nota: 3 },
            { modulo: "DAW", nota: 6 }
        ]
    },
    {
        nombre: "Carlos Gómez",
        asignaturas: [
            { modulo: "DWEC", nota: 8 },
            { modulo: "DIW", nota: 9 },
            { modulo: "DWES", nota: 7 },
            { modulo: "DAW", nota: 8 }
        ]
    }
];

function evaluar(listaAlumnos) {
    for (let alumno of listaAlumnos) {
        let asignaturasAprobadas = 0;
        let asignaturasPendientes = [];
        let sumaNotas = 0;

        for (let asignatura of alumno.asignaturas) {
            if (asignatura.nota >= 5) {
                asignaturasAprobadas++;
            } else {
                asignaturasPendientes.push(
                    { modulo: asignatura.modulo, nota: asignatura.nota }
                );
            }

            sumaNotas += asignatura.nota;
        }

        if (asignaturasAprobadas === alumno.asignaturas.length) {
            alumno.promociona = true;
        } else {
            alumno.promociona = false;
            alumno.pendientes = asignaturasPendientes;
        }

        let media = sumaNotas / alumno.asignaturas.length;
        alumno.media = media;
    }
}

function alumnosPromocionan(listaAlumnos) {
    let alumnosStr = "Alumnos que promocionan: \n";
    let index = 0;

    for (let alumno of alumnos) {
        if (alumno.promociona === true) {
            index++;
            alumnosStr += `Alumno ${index}: \n Nombre: ${alumno.nombre} \n Media: ${alumno.media} \n`;
        }
    }
    console.log(alumnosStr);
}

function alumnosNoPromocionan(listaAlumnos) {
    let alumnosStr = "Alumnos que no promocionan: \n";
    let index = 0;
    let asignaturasPendienteStr = "";

    for (let alumno of alumnos) {
        if (alumno.promociona === false) {
            index++;
            for (let asignaturaPendiente of alumno.pendientes) {
                asignaturasPendienteStr += `\t ${asignaturaPendiente.modulo}: ${asignaturaPendiente.nota} \n`;
            }
            alumnosStr += `Alumno ${index}: \n Nombre: ${alumno.nombre} \n Asignaturas Pendientes: \n ${asignaturasPendienteStr}`;
        }
    }
    console.log(alumnosStr);
}

evaluar(alumnos);
alumnosPromocionan(alumnos);
alumnosNoPromocionan(alumnos);