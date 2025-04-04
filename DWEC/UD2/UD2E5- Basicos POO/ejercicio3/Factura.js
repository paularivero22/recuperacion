'use strict';

class Factura {
    clienteNIF;
    fecha;
    hora;
    pagada;
    lineas;

    constructor() {
        let fechaActual = new Date();
        this.clienteNIF = "";
        this.fecha = `${fechaActual.getDate()}-${fechaActual.getMonth() + 1}-${fechaActual.getFullYear()}`;
        this.hora = `${fechaActual.getHours()}:${fechaActual.getMinutes()}`;
        this.pagada = false;
        this.lineas = [];
    }

    get importeTotal() {
        let importe = 0;
        for (let linea of this.lineas) {
            if (linea.cantidad > 0) {
                importe += linea['precioUnitario'] * linea.cantidad;
            }
        }
        return importe.toFixed(2);
    }

    get numeroArticulos() {
        let suma = 0;
        for (let linea of this.lineas) {
            suma += linea.cantidad;
        }
        return suma;
    }

    imprimirFactura() {
        let cadena = "";

        cadena += `NIF del Cliente: ${this.clienteNIF} \t Fecha y Hora: ${this.fecha} ${this.hora} \t Pagada: ${this.pagada ? 'si' : 'no'} \n `;

        for (let linea of this.lineas) {
            cadena += `Concepto: ${linea['concepto']} \n Cantidad: ${linea['cantidad']} \n Precio: ${linea.precioUnitario}€ \n \n`
        }

        cadena += `\n \n Importe Total: ${this.importeTotal}€`;

        return cadena;
    }

    agregarLinea(concepto, cantidad, precioUnitario) {
        if (cantidad > 0 && precioUnitario > 0) {
            this.lineas.push({
                concepto: concepto,
                cantidad: cantidad,
                precioUnitario: precioUnitario
            })
            console.log(`Se ha añadido "${concepto}" `)
        } else {
            console.log('Datos incorrectos');
        }
    }

    eliminarLinea() {
        if (this.lineas.length > 0) {
            console.log(`Se ha eliminado la linea "${(this.lineas[this.lineas.length - 1])['concepto']}" `);
            this.lineas.pop();
        } else {
            console.log('No hay lineas en la factura');
        }
    }
}

export default Factura;