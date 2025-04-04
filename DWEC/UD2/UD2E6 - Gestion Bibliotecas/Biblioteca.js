'use strict';

class Biblioteca {
    bilbiotecaId;
    nombre;
    ubicacion;
    libros;

    constructor(nombre, ubicacion) {
        this.bilbiotecaId = 0;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.libros = [];
    }

    generarHTMLCreacion() {
        return `
        <form>
        <label for="nombre">Nombre: </label>
        <input type="text" name="nombre" id="nombre" />

        <label for="ubicacion">Ubicacion: </label>
        <input type="text" name="ubicacion" id="ubicacion" />


        <input type="submit" id="crearBiblioteca" value="Crear"/>
        </form>
        `;
    }

    generarHTMLEdicion() {
        return `
        <form>
        <label for="nombre">Nombre: </label>
        <input type="text" name="nombre" id="nombre" value=${this.nombre}/>

        <label for="ubicacion">Ubicacion: </label>
        <input type="text" name="ubicacion" id="ubicacion value=${this.ubicacion}" />


        <input type="submit" id="editarBiblioteca" value="Guardar"/>
        </form>
        `;
    }
}