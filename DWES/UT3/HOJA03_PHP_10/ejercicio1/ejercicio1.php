<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Busca tu coche</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body class="p-4">
    <div class="container bg-white p-4 rounded shadow">
        <h2 class="fw-bold mb-4 text-center">Busca tu coche</h2>
        <form action="" method="post" class="mb-5">
            <div class="mb-3 text-center">
                <label for="marca" class="form-label fw-bold">Marca: *</label>
                <select id="marca" name="marca" class="form-select w-50 mx-auto">
                    <option value="Toyota">Toyota</option>
                    <option value="Ford">Ford</option>
                    <option value="BMW">BMW</option>
                </select>
            </div>

            <div class="text-center">
                <input type="submit" name="mostrar" value="Mostrar" class="btn btn-success fw-bold px-4">
            </div>
        </form>

        <?php
        $coches = [
            "Toyota" => ["Corolla", "Yaris", "Camry", "RAV4"],
            "Ford" => ["Fiesta", "Focus", "Mustang", "Explorer"],
            "BMW" => ["Serie 3", "Serie 5", "X5", "Z4"]
        ];

        if (isset($_POST['mostrar']) && isset($_POST['marca']) && !empty($_POST['marca'])) {
            $marcaCoche = $_POST['marca'];

            if (isset($coches[$marcaCoche])) {
                echo "<div class='mt-4 p-4 border rounded bg-light text-center'>";
                echo "<h3 class='text-primary fw-bold mb-3'>Marca: $marcaCoche</h3>";

                echo "<form class='d-flex flex-column align-items-center'>";
                foreach ($coches[$marcaCoche] as $modelo) {
                    echo "<input type='text' class='form-control w-50 mb-2 text-center' placeholder='$modelo'>";
                }
                echo "</form>";

                echo "<div class='text-center mt-3'>";
                echo "<input type='submit' name='actualizar' value='Actualizar' class='btn btn-primary fw-bold px-4'>";
                echo "</div>";
                echo "</div>";
            }
        }
        ?>
    </div>
</body>

</html>