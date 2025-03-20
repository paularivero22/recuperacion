<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body class="p-4">
    <div class="container bg-white p-4 rounded shadow">
        <h2 class="fw-bold mb-4">Suma de cantidades</h2>

        <form action="" method="post" class="mb-5">
            <div class="row">
                <?php
                for ($i = 1; $i <= 10; $i++) {
                    echo "<div class='col-2 mb-3'>";
                    echo "<label class='form-label fw-bold'>Cantidad $i</label>";
                    echo "<input type='number' name='numeros[]' value='$i' class='form-control'>";
                    echo "</div>";
                }
                ?>
            </div>

            <div class="text-center">
                <input type="submit" name="enviar" value="Sumar" class="me-4 mb-3 btn btn-success fw-bold px-4">
            </div>
        </form>
    </div>

    <?php
    if (
        isset($_POST['enviar']) && isset($_POST['numeros']) && !empty($_POST['numeros'])
    ) {
        $numeros = $_POST['numeros'];
        $suma = array_sum($numeros);

        echo "<div class='mt-4 alert alert-info text-center fw-bold'>";
        echo "La suma de los números es: <span class='text-success'>$suma</span>";
        echo "</div>";
    }
    ?>
</body>

</html>