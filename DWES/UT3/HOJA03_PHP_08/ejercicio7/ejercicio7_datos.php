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
            isset($_POST['numero1']) && !empty($_POST['numero1']) &&
            isset($_POST['numero2']) && !empty($_POST['numero2'])
        ) {
            $numero1 = $_POST['numero1'];
            $numero2 = $_POST['numero2'];
            print "LISTA DE PARES DE NÚMEROS DE " . $numero1 . " y " . $numero2 . ": <br />";

            for ($j = $numero2, $i = $numero1; $j >= $numero1, $i <= $numero2; $j--, $i++) {
                print "(" . $i . "," . "$j" . ")";
            }
        }
    }
    ?>
    <br />
    <br />
    <a href="ejercicio7.html">Volver</a>
</body>

</html>