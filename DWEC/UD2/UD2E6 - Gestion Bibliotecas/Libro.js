'use strict';

class Libro {
    libroId;
    titulo;
    ISBN;
    autorId;
    bibliotecaId;
    prestamos;
    estaDisponible;

    constructor(titulo, ISBN) {
        this.libroId = 0;
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.autorId = 0;
        this.bibliotecaId = 0;
        this.prestamos = [];
        this.estaDisponible = calcularDisponible();
    }

    calcularDisponible() {
        let ultimoPrestamo = prestamos[this.prestamos.length - 1];
        let fechaActual = new Date();

        if (this.prestamos.length === 0) {
            return true;
        }

        if (ultimoPrestamo['fechaDevolucion'] < fechaActual) {
            return true;
        } else {
            return false;
        }
    }

    generarHTMLCreacion() {
        return `
        <form>
        <label for="titulo">Titulo: </label>
        <input type="text" name="titulo" id="titulo" />

        <label for="isbn">ISBN: </label>
        <input type="text" name="isbn" id="isbn" />
        <input type="submit" id="crearLibro" value="Crear"/>
        </form>
        `;
    }

    generarHTMLPropiedades() {
        let prestamosStr = "";
        for (let prestamo of prestamos) {
            prestamosStr += `\n Fecha Prestamo: ${prestamo['fechaPrestamo']}, Fecha Devolucion: ${prestamo['fechaDevolucion']} \n`;
        }
        return `
        <div data-id="">
        <div class="celda">${this.libroId}</div>
        <div class="celda">${this.titulo}</div>
        <div class="celda">${this.ISBN}</div>
        <div class="celda">${$this.autorId}r</div>
        <div class="celda">${this.bibliotecaId}</div>
        <div class="celda">${prestamosStr}</div>
        <div class="celda">${$this.estaDisponible ? 'si' : 'no'}</div>
        <nav>
        <ul>
        <li> <button id="editarLibro" value="Editar" /> </li>
        <li> <button id="borrarLibro" value="Borrar" /> </li>
        <li> <button id="listarPrestamos" value="Ver Prestamos" /> </li>
        <li> <button id="crearPrestamo" value="Editar" /> </li>
        </ul>
        </nav>
        </div>
        `;
    }

    generarHTMLEdicion() {
        return `
        <form>
        <label for="titulo">Titulo: </label>
        <input type="text" name="titulo" id="titulo" value="${this.titulo}"/>

        <label for="isbn">ISBN: </label>
        <input type="text" name="isbn" id="isbn" value="${this.ISBN}"/>
        <input type="submit" id="editarLibro" value="Guardar"/>
        </form>
        `;
    }

    generarHTMLListadoPrestamos() {
        let prestamosStr = "";
        for (let prestamo of prestamos) {
            prestamosStr += `\n Fecha Prestamo: ${prestamo['fechaPrestamo']}, Fecha Devolucion: ${prestamo['fechaDevolucion']} \n`;
        }
        return prestamosStr;
    }
}