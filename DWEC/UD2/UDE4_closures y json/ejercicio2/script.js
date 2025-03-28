'use strict';

let alumnos = [
    {
        nombre: 'Elena',
        nota: 3.25,
        modulo: 'DWEC',
        convocatorias: 2
    },
    {
        nombre: 'Diego',
        nota: 3.81,
        modulo: 'DWEC',
        convocatorias: 2
    },
    {
        nombre: 'Carlos',
        nota: 7.93,
        modulo: 'DWES',
        convocatorias: 2
    },
    {
        nombre: 'Andrea',
        nota: 6.18,
        modulo: 'DWEC',
        convocatorias: 1
    },
    {
        nombre: 'Raul',
        nota: 0.31,
        modulo: 'DWEC',
        convocatorias: 1
    },
]

function alumnosSuspensos(alumnos) {
    let suspensos = [];

    for (let alumno of alumnos) {
        if (alumno.nota < 5) {
            suspensos.push({
                alumno: alumno.nombre,
                nota: alumno.nota,
                modulo: alumno.modulo
            });
        }
    }

    suspensos.sort((a, b) => a.toString().localeCompare(b.toString()));
    return suspensos;
}

function estadisticasPorModulo(alumnos) {
    /*
        modulos = [
            {
                modulo: 'dwec',
                notaMedia: 4,
                mediaConvocatorias: 1
            }
        ]
    */

    let modulos = {};

    for (let alumno of alumnos) {
        if (!(alumno.modulo in modulos)) {
            modulos[alumno.modulo]={                
                notas: 0,
                notaMedia: 0,
                alumnos: 0,
                convocatorias: 0,
                mediaConvocatorias: 0
            
            };
        }
    }

    for (let alumno of alumnos) {
        let moduloActual = modulos[alumno.modulo];
        moduloActual.alumnos++;
        moduloActual.notas += alumno.nota;
        moduloActual.convocatorias += alumno.convocatorias;
    }

    for (let modulo of modulos) {
        modulo.notaMedia = modulo.notas / modulo.alumnos;
    }

    //a partir de modulos devolver [] con estadisticas

}