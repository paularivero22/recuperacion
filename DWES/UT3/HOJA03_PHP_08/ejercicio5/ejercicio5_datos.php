<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=ç, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    if (isset($_POST['enviar'])) {
        if (
            isset($_POST['numero']) && !empty($_POST['numero'])
        ) {
            $numero = $_POST['numero'];

            if ($numero % 2 === 0) {
                print "El numero " . $numero . " es par";
            } else {
                print "El numero " . $numero . " es impar";

            }
        }
    }
    ?>
    <br />
    <a href="ejercicio5.html">Volver</a>
</body>

</html>