<?php
if (isset($_REQUEST['enviar'])) {
    if (
        isset($_POST['nombre']) && isset($_POST['modulo']) &&
        !empty($_POST['nombre']) && !empty($_POST['modulo'])
    ) {
        $nombre = $_REQUEST['nombre'];
        $modulo = $_REQUEST['modulo'];

        print "Utilizando request <br />";
        print "Nombre: " . $nombre . "<br />";
        print "Modulo: " . $modulo . "<br />";
    } else {
        print "Rellena todos los campos.";
    }
}
?>