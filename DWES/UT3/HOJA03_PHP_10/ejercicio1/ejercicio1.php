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
        <h2 class="fw-bold mb-4">Busca tu coche</h2>
        <form action="" method="post" class="mb-5">
            <div class="mb-3">
                <label for="marca" class="form-label fw-bold">Marca: *</label>
                <select id="marca" name="marca" class="form-select">
                    <option value="Toyota">Toyota</option>
                    <option value="Ford">Ford</option>
                    <option value="BMW">BMW</option>
                </select>
            </div>

            <div class="text-center">
                <input type="submit" name="mostrar" value="Mostrar" class="me-4 mb-3 btn btn-success fw-bold px-4">
            </div>
        </form>
    </div>

    <?php
    $coches = [
        "Toyota" => ["Corolla", "Yaris", "Camry", "RAV4"],
        "Ford" => ["Fiesta", "Focus", "Mustang", "Explorer"],
        "BMW" => ["Serie 3", "Serie 5", "X5", "Z4"]
    ];

    if (isset($_POST['mostrar'])) {
        if (
            isset($_POST['marca']) && !empty($_POST['marca'])
        ) {
            $marcaCoche = $_POST['marca'];

            if (isset($coches[$marcaCoche])) {
                echo "<div class='mt-4 p-4 border rounded bg-light'>";
                echo "<h3 class='text-primary fw-bold'>Marca: $marcaCoche </h3>";

                echo "<form>";
                foreach ($coches[$marcaCoche] as $modelo) {
                    echo "<input type='text' placeholder='$modelo'></input>";
                }
                echo "</form>";

                echo "<div class='text-center'>";
                echo "<input type='submit' name='actualizar' value='Actualizar' class='me-4 mb-3 btn btn-success fw-bold px-4'>";
                echo "</div>";
                echo "</div>";
            }
        }
    }
    ?>
</body>

</html>