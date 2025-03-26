<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio Mailtrap</title>
</head>

<body>
    <h1>Enviar Correo: </h1>
    <form action="procesar.php" method="post">
        <label for="paraQuien">Destinatario: </label>
        <input type="text" name="paraQuien" id="paraQuien"/>
        <br/><br/>

        <label for="asunto">Asunto: </label>
        <input type="text" name="asunto" id="asunto"/>
        
        <br/><br/>
        <label for="cuerpoMensaje">Cuerpo: </label>
        <textarea name="cuerpoMensaje" id="cuerpoMensaje"></textarea>

        <input type="submit" name="enviar" value="Enviar">
    </form>

    <?php 
        if($_SERVER['REQUEST_METHOD'] == 'GET') {
            if(isset($_GET['error'])) {
                $error = $_GET['error'];

                switch($error) {
                    case 1:
                        echo "Por favor, rellena todos los campos.";
                        break;
                    case 2:
                        echo "Por favor, introduce un email válido.";
                        break;
                    case 3:
                        echo "Ha ocurrido un error al enviar el email.";
                        break;
                    case 4:
                        echo "El email se ha enviado correctamente.";
                        break;
                }
            }
        }
    ?>
</body>

</html>