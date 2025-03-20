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
            print "TABLA DE MULTIPLICAR DEL " . $numero . ": <br/>";

            for($i = 1; $i <= 10; $i++) {
                print $numero . " x " . $i . " = " . ($numero * $i) . "<br/>";
            }
        }
    }
    ?>
    <br />
    <br />
    <a href="ejercicio6.html">Volver</a>
</body>

</html>