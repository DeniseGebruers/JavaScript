class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = 2;
    }

    sumarIva () {
        return (this.precio * 1.21).toFixed(2);
    }
}

const mateDiseño1 = new Producto ("Diseño1", 720);
const mateDiseño2 = new Producto ("Diseño2", 850);
const mateDiseño3 = new Producto ("Diseño3", 920);
const accesorioMate = new Producto ("Bombilla", 325);

const stockProducto = [];

stockProducto.push (mateDiseño1);
stockProducto.push (mateDiseño2);
stockProducto.push (mateDiseño3);
stockProducto.push (accesorioMate);

console.log (stockProducto);


/* Funciones */

function menu () {
    alert ("¡Bienvenido a nuestra web!");
    let nombre = prompt ("Ingrese su nombre: ");
    console.log (nombre);
    let opcion = parseInt (prompt ("Hola " + nombre + ", ingrese el producto que desea: \n 1) Diseño1 \n 2) Diseño2 \n 3) Diseño3 \n 4) Salir"));
    return opcion;
}

function producto1 () {
    alert ("Producto añadido. Su pecio es: $" + mateDiseño1.precio + ", con el IVA el precio final es: $" + mateDiseño1.sumarIva());
    let pregunta = prompt ("¿Desea añadir bombilla a su producto? Ingrese si o no");
    while (pregunta === "si") {
        alert ("El producto se ha añadido correctamente. Su precio es: $" + accesorioMate.precio + ", con el IVA el total es: $" + accesorioMate.sumarIva() + ". \n¡Muchas gracias por su compra!");
        break;
    } if (pregunta === "no") {
        alert ("¡Muchas gracias por su compra!");
    }  
    let busqueda = stockProducto.find (Producto => Producto.nombre === "Diseño1");
    console.log (busqueda);
    let nuevoStock = stockProducto.splice (0,1);
    console.log (nuevoStock);
}

function producto2 () {
    alert ("Producto añadido. Su pecio es: $" + mateDiseño2.precio + ", con el IVA el precio final es: $" + mateDiseño2.sumarIva());
    let pregunta = prompt ("¿Desea añadir bombilla a su producto? Ingrese si o no");
    while (pregunta === "si") {
        alert ("El producto se ha añadido correctamente. Su precio es: $" + accesorioMate.precio + ", con el IVA el total es: $" + accesorioMate.sumarIva());
        break;
    } if (pregunta === "no") {
        alert ("¡Muchas gracias por su compra!")
    } 
    let busqueda = stockProducto.find (Producto => Producto.nombre === "Diseño2");
    console.log (busqueda);
    let nuevoStock = stockProducto.splice (1,1);
    console.log (nuevoStock);
}

function producto3 () {
    alert ("Producto añadido. Su pecio es: $" + mateDiseño3.precio + ", con el IVA el precio final es: $" + mateDiseño3.sumarIva());
    let pregunta = prompt ("¿Desea añadir bombilla a su producto? Ingrese si o no");
    while (pregunta === "si") {
        alert ("El producto se ha añadido correctamente. Su precio es: $" + accesorioMate.precio + ", con el IVA el total es: $" + accesorioMate.sumarIva());
        break;
    } if (pregunta === "no") {
        alert ("¡Muchas gracias por su compra!")
    } 
    let busqueda = stockProducto.find (Producto => Producto.nombre === "Diseño3");
    console.log (busqueda);
    let nuevoStock = stockProducto.splice (2,1);
    console.log (nuevoStock);
}

function salir () {
    alert ("¡Muchas gracias por visitarnos!");
}

/* Ejecución */

let opcion = menu ();
    switch (opcion) {
        case 1:
            producto1 ();
            break;
        case 2:
            producto2 ();
            break;
        case 3:
            producto3 ();
            break;
        case 4:
            salir ();
            break;
        default:
            alert ("Opción no válida.")
            break;
    }