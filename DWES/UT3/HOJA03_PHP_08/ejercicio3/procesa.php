<?php
if (isset($_POST['enviar'])) {
    if (
        isset($_POST['nombre']) && isset($_POST['modulo']) &&
        !empty($_POST['nombre']) && !empty($_POST['modulo'])
    ) {

        $nombre = $_POST['nombre'];
        $modulo = $_POST['modulo'];

        print "Con metodo post <br />";
        print "Nombre: " . $nombre . "<br />";
        print "Modulo: " . $modulo . "<br />";
    } else {
        print "Rellena todos los campos.";
    }
}
?>