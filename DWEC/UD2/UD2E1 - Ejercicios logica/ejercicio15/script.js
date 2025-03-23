class Trabajador {
    constructor(nombre, categoria, contratacion) {
        this.codigo = `E${String(Trabajador.contador++).padStart(2, '0')}`; // codigo unico
        this.nombre = nombre;
        this.categoria = categoria; // 1, 2 o 3
        this.contratacion = contratacion;
    }

    calcularNomina() {
        const salarioBase = [1100, 1400, 1900]; 
        const antiguedad = new Date().getFullYear() - this.contratacion;
        const incrementoAntiguedad = salarioBase[this.categoria - 1] * 0.04 * antiguedad; 
        return salarioBase[this.categoria - 1] + incrementoAntiguedad;
    }
}

Trabajador.contador = 1;

let trabajadores = [];


function listarTrabajadores() {
    if (trabajadores.length === 0) {
        alert("No hay trabajadores registrados.");
        return;
    }

    alert("Listado de trabajadores:");
    trabajadores.forEach((trabajador) => {
        alert(`Código: ${trabajador.codigo}, Nombre: ${trabajador.nombre}, Categoría: ${trabajador.categoria}, Contratación: ${trabajador.contratacion}`);
    });
}

function crearTrabajador() {
    const nombre = prompt("Introduce el nombre del trabajador:");
    const categoria = parseInt(prompt("Introduce la categoría (1-1100€, 2-1400€, 3-1900€):"));
    const contratacion = parseInt(prompt("Introduce el año de contratación:"));

    if (!nombre || categoria < 1 || categoria > 3 || isNaN(contratacion)) {
        alert("Datos inválidos. No se pudo crear el trabajador.");
        return;
    }

    const nuevoTrabajador = new Trabajador(nombre, categoria, contratacion);
    trabajadores.push(nuevoTrabajador);
    alert(`Trabajador creado: ${nuevoTrabajador.codigo}`);
}

function borrarTrabajador() {
    const codigo = prompt("Introduce el código del trabajador a borrar:");
    const trabajadorIndex = trabajadores.findIndex((t) => t.codigo === codigo);

    if (trabajadorIndex === -1) {
        alert("Trabajador no encontrado.");
        return;
    }

    const trabajador = trabajadores[trabajadorIndex];

    const confirmacion = confirm(`¿Estás seguro de que quieres borrar el trabajador con código ${trabajador.codigo} y nombre ${trabajador.nombre}?`);

    if (confirmacion) {
        trabajadores.splice(trabajadorIndex, 1);
        alert(`Trabajador con código ${trabajador.codigo} borrado.`);
    } else {
        alert("Cancelado");
    }
}

function modificarTrabajador() {
    const codigo = prompt("Introduce el código del trabajador a modificar:");
    const trabajador = trabajadores.find((t) => t.codigo === codigo);

    if (!trabajador) {
        alert("Trabajador no encontrado.");
        return;
    }

    const nuevoNombre = prompt(`Nuevo nombre (actual: ${trabajador.nombre}):`, trabajador.nombre);
    const nuevaCategoria = parseInt(prompt(`Nueva categoría (actual: ${trabajador.categoria}):`, trabajador.categoria));
    const nuevaContratacion = parseInt(prompt(`Nuevo año de contratación (actual: ${trabajador.contratacion}):`, trabajador.contratacion));

    if (!nuevoNombre || nuevaCategoria < 1 || nuevaCategoria > 3 || isNaN(nuevaContratacion)) {
        alert("Datos inválidos. No se pudo modificar el trabajador.");
        return;
    }

    trabajador.nombre = nuevoNombre;
    trabajador.categoria = nuevaCategoria;
    trabajador.contratacion = nuevaContratacion;

    alert(`Trabajador con código ${trabajador.codigo} modificado.`);
}

function calcularNominas() {
    let resumenCategoria = [0, 0, 0]; 
    let totalNominas = 0;

    trabajadores.forEach((trabajador) => {
        const nomina = trabajador.calcularNomina();
        alert(`Código: ${trabajador.codigo}, Nombre: ${trabajador.nombre}, Nómina: ${nomina.toFixed(2)}€`);

        resumenCategoria[trabajador.categoria - 1] += nomina;
        totalNominas += nomina;
    });

    alert("\nResumen de nóminas por categoría:");
    for (let i = 0; i < 3; i++) {
        alert(`Categoría ${i + 1}: ${resumenCategoria[i].toFixed(2)}€`);
    }

    alert(`\nResumen total de nóminas de la empresa: ${totalNominas.toFixed(2)}€`);
}

function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt(`Selecciona una opción:
    1. Listar trabajadores
    2. Crear trabajador
    3. Borrar trabajador
    4. Modificar trabajador
    5. Calcular nóminas
    6. Salir`);

        switch (opcion) {
            case "1":
                listarTrabajadores();
                break;
            case "2":
                crearTrabajador();
                break;
            case "3":
                borrarTrabajador();
                break;
            case "4":
                modificarTrabajador();
                break;
            case "5":
                calcularNominas();
                break;
            case "6":
                alert("Saliendo...");
                break;
            default:
                alert("Opción no válida.");
                break;
        }
    } while (opcion !== "6");
}

mostrarMenu();