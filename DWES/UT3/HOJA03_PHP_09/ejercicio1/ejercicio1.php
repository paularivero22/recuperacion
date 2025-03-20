<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversor de monedas</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body class="p-4">
    <div class="container bg-white p-4 rounded shadow">
        <h2 class="fw-bold mb-4">Conversor de monedas</h2>

        <form action="" method="post">
            <div class="mb-3">
                <label for="cantidad" class="form-label fw-bold">Cantidad: *</label>
                <input type="number" id="cantidad" name="cantidad" class="form-control">
            </div>

            <div class="mb-3">
                <label for="origen" class="form-label fw-bold">Origen: *</label>
                <select id="origen" name="origen" class="form-select">
                    <option value="euros">Euros</option>
                    <option value="dolares">Dólares</option>
                    <option value="libras">Libras</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="destino" class="form-label fw-bold">Destino: *</label>
                <select id="destino" name="destino" class="form-select">
                    <option value="euros">Euros</option>
                    <option value="dolares">Dólares</option>
                    <option value="libras">Libras</option>
                </select>
            </div>

            <div class="text-center">
                <input type="submit" name="enviar" value="Convertir" class="btn btn-success fw-bold px-4">
            </div>
        </form>
    </div>

    <?php
    if (isset($_POST['enviar'])) {
        if (
            isset($_POST['cantidad']) && !empty($_POST['cantidad']) &&
            isset($_POST['origen']) && !empty($_POST['origen']) &&
            isset($_POST['destino']) && !empty($_POST['destino'])
        ) {
            $cantidad = $_POST['cantidad'];
            $origen = $_POST['origen'];
            $destino = $_POST['destino'];

            $tasas = [
                "euros" => ["euros" => 1, "dolares" => 1.0897, "libras" => 0.84282],
                "dolares" => ["euros" => 0.9177, "dolares" => 1, "libras" => 0.7736],
                "libras" => ["euros" => 1.1865, "dolares" => 1.2930, "libras" => 1]
            ];

            $resultado = $cantidad * $tasas[$origen][$destino];
            echo '<div class="container mt-4">';
            echo '<div class="alert alert-primary text-center fw-bold" role="alert">';
            echo $resultado . " $destino";
            echo '</div>';
            echo '</div>';
        } else {
            echo '<div class="container mt-4">';
            echo '<div class="alert alert-primary text-center fw-bold" role="alert">';
            echo "Completa todos los campos";
            echo '</div>';
            echo '</div>';
        }
    }
    ?>
</body>

</html>