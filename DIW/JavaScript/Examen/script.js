window.addEventListener("DOMContentLoaded", function () {
    const btnCine = document.getElementById("cine");
    const btnSeries = document.getElementById("series");

    const tipoPelicula = document.getElementById("tipoPelicula");
    const tipoSerie = document.getElementById("tipoSerie");

    const divRecomendacion = document.getElementById("recomendacion");

    function cine() {
        tipoSerie.classList.add("oculto");
        tipoPelicula.classList.remove("oculto");
    }

    function series() {
        tipoPelicula.classList.add("oculto");
        tipoSerie.classList.remove("oculto");
    }

    btnCine.addEventListener("click", cine);
    btnSeries.addEventListener("click", series);

    const btnComedia = document.getElementById("comedia");
    const btnAccion = document.getElementById("accion");

    function comediaFn() {
        btnCine.removeEventListener("click", cine);
        btnSeries.removeEventListener("click", series);
        divRecomendacion.innerHTML = "Te recomendamos una comedia divertida como 'Malas madres'";
    }

    function accionFn() {
        btnCine.removeEventListener("click", cine);
        btnSeries.removeEventListener("click", series);
        divRecomendacion.innerHTML = "Una buena opción es 'Una boda explosiva.'";
    }

    btnComedia.addEventListener("click", comediaFn);
    btnAccion.addEventListener("click", accionFn);

    const btnLarga = this.document.getElementById("larga");
    const btnCorta = this.document.getElementById("corta");

    function larga() {
        btnCine.removeEventListener("click", cine);
        btnSeries.removeEventListener("click", series);
        divRecomendacion.innerHTML = "Si te gustan las series de varias temporadas, The White Lotus es tu opción";
    }

    function corta() {
        btnCine.removeEventListener("click", cine);
        btnSeries.removeEventListener("click", series);
        divRecomendacion.innerHTML = "Para una tarde rápida, 'Yellowstone.";
    }


    btnLarga.addEventListener("click", larga);
    btnCorta.addEventListener("click", corta);
});
