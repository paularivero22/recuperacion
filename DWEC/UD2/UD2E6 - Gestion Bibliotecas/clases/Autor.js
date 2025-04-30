'use strict';

class Autor {
    autorId;
    nombre;
    nacionalidad;
    biografia;
    libros;

    contadorId = 1;

    constructor(nombre, nacionalidad, biografia) {
        this.autorId = Autor.contadorId++;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.biografia = biografia;
        this.libros = []; 
    }

    generarHTMLCreacion() {
        return `
        <form id="formCrearAutor">
            <label>Nombre: <input type="text" name="nombre"></label>
            <label>Nacionalidad: <input type="text" name="nacionalidad"></label>
            <label>Biografía: <textarea name="biografia"></textarea></label>
            <button type="submit">Crear</button>
        </form>
        `;
    }

    generarHTMLEdicion() {
        return `
        <form class="editar-autor" data-id="${this.autorId}">
            <label>Nombre: <input type="text" name="nombre" value="${this.nombre}"></label>
            <label>Nacionalidad: <input type="text" name="nacionalidad" value="${this.nacionalidad}"></label>
            <label>Biografía: <textarea name="biografia">${this.biografia}</textarea></label>
            <button type="submit">Guardar</button>
        </form>
        `;
    }

    generarHTMLPropiedades() {
        const listaLibros = this.libros.map(t => `<li>${t}</li>`).join('');
        return `
        <div class="autor-detalle" data-id="${this.autorId}">
            <div id="celda">
                <p>${this.nombre}</p>
            </div>

            <div id="celda">
                <p>${this.nacionalidad}</p>
            </div>

            <div id="celda">
                <p>${this.biografia}</p>
            </div>

            <div id="celda">
                <ul>${listaLibros}</ul>
            </div>

            <div id="celda">
                <button data-accion="ver" data-id="${this.autorId}">Ver</button>
                <button data-accion="editar" data-id="${this.autorId}">Editar</button>
                <button data-accion="borrar" data-id="${this.autorId}">Borrar</button>
            </div>
        </div>
        `;
    }
}