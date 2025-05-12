'use strict';

const vehiculosAutonomos = [
    {
        "modelo": "Autobot X1",
        "puntuacion": 9,
        "categoria": "urbano",
        "intentos": 3
    },
    {
        "modelo": "RoadMaster 3000",
        "puntuacion": 8,
        "categoria": "carretera",
        "intentos": 2
    },
    {
        "modelo": "CityCruiser S4",
        "puntuacion": 7,
        "categoria": "urbano",
        "intentos": 1
    },
    {
        "modelo": "Freeway Runner GT",
        "puntuacion": 10,
        "categoria": "carretera",
        "intentos": 4
    },
];

const $vehiculoAI = (function() {
    function bajoRendimiento(vehiculos) {
        let vehiculosBajoRendimiento = [];

        for(let vehiculo of vehiculos) {
            if(vehiculo.puntuacion < 6) {
                vehiculosBajoRendimiento.push({
                    modelo: vehiculo.modelo,
                    puntuacion: vehiculo.puntuacion,
                    categoria: vehiculo.categoria  
                });
            }
        }

        vehiculosBajoRendimiento.sort((a,b) => a.modelo.localeCompare(b.modelo));
        return vehiculosBajoRendimiento;
    }

    function estadisticasPorCategoria(vehiculos) {
        let categorias = {};

        for(let vehiculo of vehiculos) {
            if(!(vehiculo.categoria in categorias)) {
                categorias[vehiculo.categoria] = {
                    vehiculos: 0,
                    puntuaciones: 0,
                    promedioPuntuacion: 0,
                    intentos: 0,
                    promedioIntentos: 0
                };
            }
        }

        for(let vehiculo of vehiculos) {
            let categoriaActual = categorias[vehiculo.categoria];
            categoriaActual.vehiculos++;
            categoriaActual.puntuaciones += vehiculo.puntuacion;
            categoriaActual.intentos += vehiculo.intentos;
        }

        for(let categoria in categorias) {
            categorias[categoria].promedioPuntuacion = (categorias[categoria].puntuaciones) / (categorias[categoria].vehiculos);
            categorias[categoria].promedioIntentos = (categorias[categoria].intentos) / (categorias[categoria].vehiculos);
        }

        const resultado = [];

        for(let categoria in categorias) {
            resultado.push({
                categoria: categoria,
                promedioPuntuacion: categorias[categoria].promedioPuntuacion,
                promedioIntentos: categorias[categoria].promedioIntentos
            });
        }

        resultado.sort((a,b) => a.promedioIntentos - b.promedioIntentos);
        return resultado;
    }

    function exportarDatos(objetoJSON) {
        return JSON.stringify(objetoJSON);
    }

    function cargarDatos(cadenaJSON) {
        return JSON.parse(cadenaJSON);
    }
})();