<?php
if (isset($_GET['enviar'])) {
    if (
        isset($_GET['nombre']) && isset($_GET['modulo']) &&
        !empty($_GET['nombre']) && !empty($_GET['modulo'])
    ) {

        $nombre = $_GET['nombre'];
        $modulo = $_GET['modulo'];

        print "Con metodo get <br />";
        print "Nombre: " . $nombre . "<br />";
        print "Modulo: " . $modulo . "<br />";
    } else {
        print "Rellena todos los campos.";
    }
}
?>