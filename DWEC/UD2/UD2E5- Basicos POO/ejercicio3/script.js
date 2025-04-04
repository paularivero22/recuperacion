'use strict';

import Factura from './Factura.js';
import Utilidades from './Utilidades.js';

let factura = new Factura();


const btnEditarFactura = document.getElementById('btnEditarFactura');
const btnAgregarLinea = document.getElementById('btnAgregarLinea');
const btnEliminarLinea = document.getElementById('btnEliminarLinea');

btnEditarFactura.addEventListener("click", function (event) {
    event.preventDefault();

    let clienteNIF = document.getElementById('clienteNIF').value;
    let fechaFactura = document.getElementById('fechaFactura').value;
    let horaFactura = document.getElementById('horaFactura').value;

    factura.clienteNIF = clienteNIF;
    factura.fecha = fechaFactura;
    factura.hora = horaFactura;
    console.log(factura.imprimirFactura());
});

btnAgregarLinea.addEventListener("click", function (event) {
    event.preventDefault();

    let concepto = document.getElementById('concepto').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let precio = parseFloat(document.getElementById('precio').value);

    if (!concepto || cantidad <= 0 || precio <= 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    factura.agregarLinea(concepto, cantidad, precio);
    console.log(factura.imprimirFactura());
});

btnEliminarLinea.addEventListener("click", function (event) {
    event.preventDefault();

    factura.eliminarLinea();
    console.log(factura.imprimirFactura());
});