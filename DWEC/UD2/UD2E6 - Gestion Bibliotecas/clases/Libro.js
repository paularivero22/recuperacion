'use strict';

class Libro {
    libroId;
    titulo;
    ISBN;
    autorId;
    bibliotecaId;
    prestamos;
    estaDisponible;
    contadorId = 1;

    constructor(titulo, ISBN, autorId, bibliotecaId) {
        this.libroId = Libro.contadorId++;
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.autorId = autorId;
        this.bibliotecaId = bibliotecaId;
        this.prestamos = [];
    }

    get estaDisponible() {
        if (this.prestamos.length === 0) return true;
        const ultimo = this.prestamos[this.prestamos.length - 1];
        return new Date(ultimo.fechaDevolucion) < new Date();
    }

    generarHTMLCreacion() {
        return `
        <label>Título: <input type="text" name="titulo"></label>
            <label>ISBN: <input type="text" name="isbn"></label>
            <label>Autor ID: <input type="number" name="autorId"></label>
            <label>Biblioteca ID: <input type="number" name="bibliotecaId"></label>
            <button type="submit">Crear</button>
        </form>
        `;
    }

    generarHTMLPropiedades() {
        return `
        <div class="libro-detalle" data-id="${this.libroId}">
            <div id="celda">
                <p><strong>ID:</strong> ${this.libroId}</p>
            </div>
            <div id="celda">
                <p><strong>Título:</strong> ${this.titulo}</p>
            </div>
            <div id="celda">
                <p><strong>ISBN:</strong> ${this.ISBN}</p>
            </div>
            <div id="celda">
                <p><strong>Autor ID:</strong> ${this.autorId}</p>
            </div>
            <div id="celda">
                <p><strong>Biblioteca ID:</strong> ${this.bibliotecaId}</p>
            </div>
            <div id="celda">
                <p><strong>Disponible:</strong> ${this.estaDisponible ? 'Sí' : 'No'}</p>
            </div>

            <div id="celda">
                <button data-accion="ver" data-id="${this.libroId}">Editar</button>
                <button data-accion="borrar" data-id="${this.libroId}">Borrar</button>
                <button data-accion="ver-prestamos" data-id="${this.libroId}">Ver Préstamos</button>
                <button data-accion="prestar" data-id="${this.libroId}">Prestar</button>
            </div>
        </div>`;
    }


    generarHTMLEdicion() {
        return `
        <form class="editar-libro" data-id="${this.libroId}">
            <label>Título: <input type="text" name="titulo" value="${this.titulo}"></label>
            <label>ISBN: <input type="text" name="isbn" value="${this.ISBN}"></label>
            <button type="submit">Guardar</button>
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