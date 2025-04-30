'use strict';

class Biblioteca {
    bibliotecaId;
    nombre;
    ubicacion;
    libros;

    contadorId = 1;

    constructor(nombre, ubicacion) {
        this.bibliotecaId = Biblioteca.contadorId++;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.libros = [];
    }

    generarHTMLCreacion() {
        return `
        <form id="formCrearBiblioteca">
            <label>Nombre: <input type="text" name="nombre"></label>
            <label>Ubicación: <input type="text" name="ubicacion"></label>
            <button type="submit">Crear</button>
        </form>
        `;
    }

    generarHTMLEdicion() {
        return `
        <form class="editar-biblioteca" data-id="${this.bibliotecaId}">
            <label>Nombre: <input type="text" name="nombre" value="${this.nombre}"></label>
            <label>Ubicación: <input type="text" name="ubicacion" value="${this.ubicacion}"></label>
            <button type="submit">Guardar</button>
        </form>
        `;
    }

    generarHTMLPropiedades() {
        return `
        <div class="biblioteca-detalle" data-id="${this.bibliotecaId}">
            <div id="celda">
                <p>${this.nombre}</p>
            </div>

            <div id="celda">
                <p>${this.ubicacion}</p>
            </div>

            <div id="celda">
                <button data-accion="ver" data-id="${this.bibliotecaId}">Ver</button>
                <button data-accion="editar" data-id="${this.bibliotecaId}">Editar</button>
                <button data-accion="borrar" data-id="${this.bibliotecaId}">Borrar</button>
            </div>
        </div>
        `;
    }
}