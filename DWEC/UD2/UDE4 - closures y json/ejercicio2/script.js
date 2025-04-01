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
    {
        nombre: 'Iker',
        nota: 1,
        modulo: 'DIW',
        convocatorias: 1
    },
];

// Ejecutar $yedra para obtener el objeto con los métodos
const $yedra = (function () {
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

        suspensos.sort((a, b) => a.alumno.localeCompare(b.alumno));
        return suspensos;
    }

    function estadisticasPorModulo(alumnos) {
        let modulos = {};

        for (let alumno of alumnos) {
            if (!(alumno.modulo in modulos)) {
                modulos[alumno.modulo] = {
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

        for (let nombreModulo in modulos) {
            modulos[nombreModulo].notaMedia = (modulos[nombreModulo].notas / modulos[nombreModulo].alumnos).toFixed(2);
            modulos[nombreModulo].mediaConvocatorias = modulos[nombreModulo].convocatorias / modulos[nombreModulo].alumnos;
        }

        let resultados = [];

        for (let nombreModulo in modulos) {
            resultados.push({
                modulo: nombreModulo,
                notaMedia: modulos[nombreModulo].notaMedia,
                mediaConvocatorias: modulos[nombreModulo].mediaConvocatorias
            });
        }

        resultados.sort((a, b) => b.mediaConvocatorias - a.mediaConvocatorias);
        return resultados;
    }

    function devolverJSON(alumnos) {
        return JSON.stringify(alumnos, null, 2);
    }

    function cargarJSON(nuevaCadena) {
        let mensaje = ""

        try {
            const parse = JSON.parse(nuevaCadena);;

            if (Array.isArray(parse)) {
                alumnos = parse;
                mensaje = 'Los datos se han cargado';
            } else {
                throw new Error('El JSON no es un array valido');
            }
        } catch (error) {
            mensaje = 'Error al cargar los datos JSON:', error.message;
        }

        return mensaje;
    }

    return {
        alumnosSuspensos,
        estadisticasPorModulo,
        devolverJSON,
        cargarJSON
    };
})();

console.log($yedra.alumnosSuspensos(alumnos));
console.log($yedra.estadisticasPorModulo(alumnos));
console.log($yedra.devolverJSON(alumnos));

const cadenaJSON = '[{"nombre":"Laura","nota":8.5,"modulo":"DWEC","convocatorias":1},{"nombre":"Carlos","nota":3.0,"modulo":"DWES","convocatorias":2}]';

console.log($yedra.cargarJSON(cadenaJSON));
console.log($yedra.devolverJSON(alumnos));