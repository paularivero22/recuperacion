'use strict';

import Factura from './Factura.js';
import Utilidades from './Utilidades.js';

let factura = new Factura();

document.addEventListener("DOMContentLoaded", function() {
    let btnEditarFactura = document.getElementById('btnEditarFactura');
    let btnAgregarLinea = document.getElementById('btnAgregarLinea');
    let btnEliminarLinea = document.getElementById('btnEliminarLinea');

    btnEditarFactura.addEventListener("click", function() {
        let clienteNIF = document.getElementById('clienteNIF').value;
        let fechaFactura = document.getElementById('fechaFactura').value;
        let horaFactura = document.getElementById('horaFactura').value;

        factura.clienteNIF = clienteNIF;
        factura.fechaFactura = fechaFactura;
        factura.horaFactura = horaFactura;
    });

    btnAgregarLinea.addEventListener("click", function() {
        
    });
})