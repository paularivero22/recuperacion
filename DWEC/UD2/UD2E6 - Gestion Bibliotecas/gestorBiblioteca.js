'use strict';

import { Libro } from './clases/Libro.js';
import { Autor } from './clases/Autor.js';
import { Biblioteca } from './clases/Biblioteca.js';
import { datos } from './datos.js';

const $biblio = (function () {
    const autores = datos.autores;
    const libros = datos.libros;
    const bibliotecas = datos.bibliotecas;

    function generarHTMLListadoAutores(autores) {
        return `
        <div id="tabla">
            ${libros.map(libro => libro.generarHTMLPropiedades()).join('')}
        </div>
        `;
    }

    function generarHTMLListadoBibliotecas() {
        <div id="tabla">
            ${bibliotecas.map(biblioteca => biblioteca.generarHTMLPropiedades()).join('')}
        </div>
    }

    function generarHTMLListadoLibros() {
        <div id="tabla">
            ${libros.map(libro => libro.generarHTMLPropiedades()).join('')}
        </div>
    }

    function buscarLibrosPorTitulo(titulo) {
        return libros.filter(libro => libro.titulo === titulo);
    }

    function buscarLibrosPorAutor(autor) {
        return libros.filter(libro => libro.autor === autor);
    }

    function generarHTMLResultadoBuscador(busqueda, filtro) {
        if(filtro === "autor") {
            let autoresFilter = autores.filter(autor => autor.nombre === busqueda);
            return `
                <div id="tabla">
                    ${autoresFilter.map(autor => autor.generarHTMLPropiedades()).join('')}
                </div>
            `;
        } else if(filtro === "libro") {
            let librosFilter = libros.filter(libro => libro.titulo === busqueda);
        }
    }
})