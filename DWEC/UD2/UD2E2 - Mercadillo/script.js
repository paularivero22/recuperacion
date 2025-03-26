'use strict';

let productos = [
    {
        nombre: "Laptop",
        cantidad: 10,
        precio: 1200,
        categoria: "Electronica"
    },
    {
        nombre: "Smartphone",
        cantidad: 25,
        precio: 800,
        categoria: "Electronica"
    },
    {
        nombre: "Teclado Mecanico",
        cantidad: 15,
        precio: 150,
        categoria: "Accesorios"
    },
    {
        nombre: "Silla Gamer",
        cantidad: 5,
        precio: 400,
        categoria: "Muebles"
    }
];


function agregarProducto(nombre, cantidad, precio, categoria) {
    for (let producto of productos) {
        if (nombre === producto.nombre) {
            console.log("El producto ya existe");
            return;
        }
    }

    productos.push({
        nombre: nombre,
        cantidad: cantidad,
        precio: precio,
        categoria: categoria
    });
    console.log(`El producto ${nombre} se ha añadido correctamente`);
}

function eliminarProducto(nombre) {
    let encontrado = false;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre === nombre) {
            encontrado = true;
            productos.splice(i, 1);
            console.log(`El producto ${nombre} se ha eliminado correctamente`);
            break;
        }
    }

    if (!encontrado) {
        console.log("No se ha encontrado el producto");
    }
}

function buscarProducto(nombre) {
    let productosEncontrados = productos.filter(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
    return productosEncontrados;
}

function actualizarInventario(nombre, cantidad) {
    let producto = productos.find(producto => producto.nombre === nombre);
    if (producto) {
        producto.cantidad = cantidad;
        console.log(`Se ha actualizado la cantidad del producto ${producto.nombre} a ${cantidad}`);
    } else {
        console.log("El producto no existe");
    }
}

function ordenarProductosPorPrecio() {
    let arrayOrdenado = productos.toSorted((a, b) => a.precio - b.precio);
    console.log(arrayOrdenado);
}

function imprimirInventario() {
    let cadena = "";
    for (let i = 0; i < productos.length; i++) {
        cadena += `<br/>  Producto ${i + 1}: <br/> Nombre: ${productos[i].nombre} <br/> Categoria: ${productos[i].categoria} <br/> Cantidad: ${productos[i].cantidad} <br/> Precio: ${productos[i].precio} <br/> Total: ${productos[i].cantidad * productos[i].precio} <br/>`;
    }
    return cadena;
}

function filtrarProductosPorCategoria(categoria) {

}

document.addEventListener("DOMContentLoaded", function () {
    let contenedor = document.getElementById("contenedor");

    document.getElementById("btnImprimir").addEventListener("click", function () {
        contenedor.innerHTML = "";
        contenedor.innerHTML = `<h1>Lista de Productos</h1> ${imprimirInventario()}`;
    });

    document.getElementById("btnAgregar").addEventListener("click", function () {
        contenedor.innerHTML = "";
        contenedor.innerHTML = `<h1>Agregar Producto</h1>
        <label for="nombre">Nombre: </label>
        <input type="text" id="nombre" name="nombre" />
        <br /><br />

        <label for="cantidad">Cantidad: </label>
        <input type="number" id="cantidad" name="cantidad" />
        <br /><br />

        <label for="precio">Precio: </label>
        <input type="number" id="precio" name="precio" step="0.1" />
        <br /><br />

        <label for="categoria">Categoria: </label>
        <input type="text" id="categoria" name="categoria" />
        <br /><br />
        <button type="submit" id="submitAgregar">Agregar</button>`;

        let botonAgregar = document.getElementById("submitAgregar");
        botonAgregar.addEventListener("click", function () {
            let nombre = document.getElementById("nombre").value;
            let cantidad = document.getElementById("cantidad").value;
            let precio = document.getElementById("precio").value;
            let categoria = document.getElementById("categoria").value;

            agregarProducto(nombre, cantidad, precio, categoria);
        });
    });

    document.getElementById("btnEliminar").addEventListener("click", function () {
        contenedor.innerHTML = "";
        contenedor.innerHTML = `<h1>Eliminar Producto</h1> 
        <label for="nombre">Nombre: </label>
        <input type="text" id="nombre" name="nombre" />
        <br /><br />
        <button type="submit" id="submitEliminar">Eliminar</button>`;

        let botonEliminar = document.getElementById("submitEliminar");
        botonEliminar.addEventListener("click", function () {
            let nombre = document.getElementById("nombre").value;

            eliminarProducto(nombre);
        });
    });

    document.getElementById("btnBuscar").addEventListener("click", function () {
        contenedor.innerHTML = "";
        contenedor.innerHTML = `<div><h1>Buscar Producto</h1> 
        <label for="nombre">Nombre: </label>
        <input type="text" id="nombre" name="nombre" />
        <br /><br />
        <button type="submit" id="submitBuscar">Buscar</button></div>
        <div id="busqueda"></div>`;

        let botonBuscar = document.getElementById("submitBuscar");
        botonBuscar.addEventListener("click", function () {
            let nombre = document.getElementById("nombre").value;
            let contenedorBusqueda = document.getElementById("busqueda");
            contenedorBusqueda.innerHTML = "";
            let productosEncontrados = buscarProducto(nombre);

            if (productosEncontrados.length > 0) {
                productosEncontrados.forEach(producto => {
                    contenedorBusqueda.innerHTML = `
                        <br/> Nombre: ${producto.nombre} 
                        <br/> Categoría: ${producto.categoria} 
                        <br/> Cantidad: ${producto.cantidad} 
                        <br/> Precio: ${producto.precio}
                        <br/> Total: ${producto.cantidad * producto.precio} 
                        <br/><br/>
                    `;
                });
            } else {
                contenedorBusqueda.innerHTML = `<p>No se encontró el producto "${nombre}".</p>`;
            }
            productosEncontrados = null;
        });
    });
});
