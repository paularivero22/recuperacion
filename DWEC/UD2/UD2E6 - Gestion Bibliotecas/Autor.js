'use strict';

class Autor {
    autorId;
    nombre;
    nacionalidad;
    biografia;
    libros;

    constructor(nombre, nacionalidad, biografia) {
        this.autorId = 0;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.biografia = biografia;
        this.libros = []; 
    }

    generarHTMLCreacion() {
        return `
        <form>
        <label for="nombre">Nombre: </label>
        <input type="text" name="nombre" id="nombre" />

        <label for="nacionalidad">Nacionalidad: </label>
        <input type="text" name="nacionalidad" id="nacionalidad" />

        <label for="biografia">Biografia: </label>
        <input type="text" name="biografia" id="biografia" />

        <input type="submit" id="crearAutor" value="Crear"/>
        </form>
        `;
    }

    generarHTMLPropiedades() {
        let librosStr = "";
        for (let libro of libros) {
            librosStr += `\n Titulo: ${libro['titulo']} \n`;
        }
        return `
        <div class="celda">${this.autorId}</div>
        <div class="celda">${this.nombre}</div>
        <div class="celda">${this.nacionalidad}</div>
        <div class="celda">${$this.autorId}r</div>
        <div class="celda">${this.biografia}</div>
        <div class="celda">${librosStr}</div>
        <div class="celda">${$this.estaDisponible ? 'si' : 'no'}</div>
        `;
    }

    generarHTMLEdicion() {
        return `
        <form>
        <label for="nombre">Nombre: </label>
        <input type="text" name="nombre" id="nombre" value="${this.nombre}"/>

        <label for="nacionalidad">Nacionalidad: </label>
        <input type="text" name="nacionalidad" id="nacionalidad" value="${this.nacionalidad}"/>

        <label for="biografia">Biografía: </label>
        <input type="text" name="biografia" id="biografia" value="${this.biografia}"/>


        <input type="submit" id="editarAutor" value="Guardar"/>
        </form>
        `;
    }
}