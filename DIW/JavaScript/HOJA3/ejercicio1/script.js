
const coloresFondo = [
    {
        color: "orange",
        rgb: "rgb(255, 165, 0)"
    },
    {
        color: "red",
        rgb: "rgb(255, 0, 0)"
    },
    {
        color: "blue",
        rgb: "rgb(0, 0, 255)"
    },
    {
        color: "yellow",
        rgb: "rgb(255, 255, 0)"
    }
]

const coloresTexto = [
    {
        color: "black",
        rgb: "rgb(0, 0, 0)"
    },
    {
        color: "white",
        rgb: "rgb(255, 255, 255)"
    },
]

window.addEventListener("DOMContentLoaded", function () {

    document.body.addEventListener("click", function () {
        //cambiar el color del fondo
        let colorActualFondo = window.getComputedStyle(document.body).backgroundColor;

        let indexFondo = 0;

        for (let i = 0; i < coloresFondo.length; i++) {
            if (coloresFondo[i].rgb === colorActualFondo) {
                indexFondo = i;
            }
        }

        let colorSiguienteFondo = "";

        if (colorActualFondo === coloresFondo[3].rgb) {
            colorSiguienteFondo = coloresFondo[0].color;
        } else {
            colorSiguienteFondo = coloresFondo[indexFondo + 1].color;
        }

        document.body.style.backgroundColor = colorSiguienteFondo;


        //cambiar el color del texto
        let colorActualTexto = window.getComputedStyle(document.body).color;

        for (let color of coloresTexto) {
            if (color.rgb === colorActualTexto) {
                colorActualTexto = color.color;
            }
        }

        if (colorActualTexto === "white") {
            document.body.style.color = "black";
        } else {
            document.body.style.color = "white";
        }
    })
})