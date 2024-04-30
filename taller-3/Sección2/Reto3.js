let nombre = "Producto 1";
let idCounter = 1;
let precio = 100;
let cantidad = 10;
let descripcion = "Descripción del Producto 1";
let inventario = [];

function crearProducto(nombre, precio, cantidad, descripcion) {
    let producto = {
        id: idCounter,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        descripcion: descripcion,
    };
    idCounter++;
    inventario.push(producto);
}

function buscarProducto(nombre) {
    let busqueda;
    inventario.forEach((producto) => {
        if (producto.nombre == nombre) busqueda = producto;
    });
    if (busqueda) {
        console.log(busqueda);
    } else {
        log("No hay prodcuto con ese nombre");
    }
}

function buscarProducto(nombre, precio) {
    let nombre1 = confirm("Quiere buscar por nombre?");
    if (nombre1) {
        let busqueda;
        inventario.forEach((producto) => {
            if (producto.nombre == nombre) busqueda = producto;
        });
        if (busqueda) {
            console.log(busqueda);
        } else {
            console.log("No hay prodcuto con ese nombre");
        }
    } else {
        let busqueda;
        let listaPrecios = [];
        inventario.forEach((producto) => {
            if (producto.precio == precio) {
                busqueda = producto;
                listaPrecios.push(busqueda);
            }
        });
        if (listaPrecios) {
            console.log(listaPrecios);
        } else {
            console.log("No hay prodcuto con ese precio");
        }
    }
}
function duplicarProducto(id) {
    let busqueda;
    let cantidadCopias = 0;
    inventario.forEach((producto) => {
        if (producto.id == id) busqueda = producto;
    });
    if (busqueda) {
        inventario.forEach((producto) => {
            if (producto.nombre.includes(busqueda.nombre)) {
                cantidadCopias = cantidadCopias + 1;
            }
        });
        if (cantidadCopias == 0) {
            let producto = {
                id: idCounter,
                nombre: busqueda.nombre + "copy",
                precio: busqueda.precio,
                cantidad: busqueda.cantidad,
                descripcion: busqueda.descripcion,
            };
            idCounter++;
            inventario.push(producto);
        } else if (cantidadCopias > 0) {
            let producto = {
                id: idCounter,
                nombre: busqueda.nombre + " copy " + cantidadCopias,
                precio: busqueda.precio,
                cantidad: busqueda.cantidad,
                descripcion: busqueda.descripcion,
            };
            idCounter++;
            inventario.push(producto);
        }
    } else {
        log("No hay prodcuto con ese id");
    }
}

crearProducto(nombre, precio, cantidad, descripcion);
duplicarProducto(1);
duplicarProducto(1);
duplicarProducto(1);
console.log(inventario);
buscarProducto(nombre, precio);
buscarProducto(nombre, precio);
