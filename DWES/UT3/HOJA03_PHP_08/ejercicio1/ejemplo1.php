<?php
if (isset($_POST['enviar'])) {
    if (
        isset($_POST['nombre']) && isset($_POST['apellidos']) && isset($_POST['edad']) &&
        !empty($_POST['nombre']) && !empty($_POST['apellidos']) && !empty($_POST['edad'])
    ) {

        $nombre = $_POST['nombre'];
        $apellidos = $_POST['apellidos'];
        $edad = $_POST['edad'];

        print "Nombre: " . $nombre . "<br />";
        print "Apellidos: " . $apellidos . "<br />";
        print "Edad: " . $edad . "<br />";
    } else {
        print "Rellena todos los campos.";
    }
}
?>