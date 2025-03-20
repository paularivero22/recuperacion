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
        <h2 class="fw-bold mb-4">Buscador de peliculas</h2>

        <form action="" method="post" class="mb-5">
            <div class="mb-3">
                <label for="busqueda" class="form-label fw-bold">Buscador </label>
                <input type="text" id="busqueda" name="busqueda" class="form-control">
            </div>

            <div class="text-center">
                <input type="submit" name="enviar" value="Buscar" class="mb-3 btn btn-success fw-bold px-4">
            </div>
        </form>

        <table class="w-100">
            <?php
            $peliculas = [
                [
                    "titulo" => "El Padrino",
                    "imagen" => "./img/El_padrino.jpg"
                ],
                [
                    "titulo" => "Titanic",
                    "imagen" => "./img/titanic.jpg"
                ],
                [
                    "titulo" => "Forrest Gump",
                    "imagen" => "./img/Forrest_Gump.jpg"
                ],
                [
                    "titulo" => "Inception",
                    "imagen" => "./img/Inception.jpg"
                ],
                [
                    "titulo" => "Star Wars: A New Hope",
                    "imagen" => "./img/star-wars.jpg"
                ],
                [
                    "titulo" => "The Dark Knight",
                    "imagen" => "./img/batman.jpg"
                ]
            ];

            if (
                isset($_POST['busqueda']) && !empty($_POST['busqueda'])
            ) {
                $busqueda = $_POST['busqueda'];

                foreach ($peliculas as $pelicula) {
                    print strpos($pelicula['titulo'], $busqueda);
                    if ((strpos($pelicula['titulo'], $busqueda))) {
                        echo "<tr>";
                        echo "<td>" . $pelicula['titulo'] . "</td>";
                        echo "<td><img src='" . $pelicula['imagen'] . "' alt='" . $pelicula['titulo'] . "' width='100'></td>";
                        echo "</tr>";
                    }
                }
            } else {
                foreach ($peliculas as $pelicula) {
                    echo "<tr>";
                    echo "<td>" . $pelicula['titulo'] . "</td>";
                    echo "<td><img src='" . $pelicula['imagen'] . "' alt='" . $pelicula['titulo'] . "' width='100'></td>";
                    echo "</tr>";
                }
                echo "</table>";
                echo "</div>";
            }
            ?>

</body>

</html>