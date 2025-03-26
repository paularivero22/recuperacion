<?php
require_once '../vendor/autoload.php';

use App\Clases\ServicioCorreo;
use App\Clases\ProveedorMailtrap;

if (isset($_POST['enviar'])) {
    if(!isset($_POST['paraQuien']) || !isset($_POST['asunto']) || !isset($_POST['cuerpoMensaje'])) {
        header('Location: index.php?error=1');
        exit();
    } 

    if(!filter_var($_POST['paraQuien'], FILTER_VALIDATE_EMAIL)) {
        header('Location: index.php?error=2');
        exit();
    }
}
?>