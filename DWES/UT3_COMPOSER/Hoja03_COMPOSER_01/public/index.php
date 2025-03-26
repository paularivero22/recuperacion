<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validador de IBAN</title>
</head>
<body>
    <h1>Validador de IBAN</h1>
    <form method="post">
        <label for="iban">Introduce tu IBAN:</label><br>
        <input type="text" name="iban" id="iban" maxlength="24" required><br><br>
        <button type="submit" name="validar">Validar</button>
    </form>

    <?php
    require_once __DIR__ . '/../vendor/autoload.php';

    use Banco\ValidadorIBAN;

    if (isset($_POST['validar'])) {
        $iban = trim($_POST['iban']);

        if (ValidadorIBAN::validarIBAN($iban)) {
            echo "El IBAN es válido</p>";
        } else {
            echo "El IBAN no es válido</p>";
        }
    }
    ?>
</body>
</html>
