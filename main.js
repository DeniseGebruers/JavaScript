/*class Producto {
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
 */

/* Funciones *//*

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
 */
/* Ejecución *//*

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
*/

class Producto {
    constructor(id, nombre, precio, descripcion, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.descripcion = descripcion;
        this.cantidad = cantidad;
    }
}

const mateDiseño1 = new Producto(1, "Diseño1", 1370, "Mate Hexagonal Floreado", 1);
const mateDiseño2 = new Producto(2, "Diseño2", 1150, "Mate Perita Hojas", 1);
const mateDiseño3 = new Producto(3, "Diseño3", 1420,"Mate Perita Paz", 1);
const accesorioMate = new Producto(4,"Bombilla", 725, "Bombillas de colores", 1);

const Productos = [mateDiseño1, mateDiseño2, mateDiseño3, accesorioMate];
console.log (Productos);

const stockProductos = document.getElementById("stockProductos");

Productos.forEach(producto => {
    const divStock = document.createElement("div");
    divStock.innerHTML = `  <div class="card mb-3" style="max-width: 400px;">
                                <div class="row g-0">
                                    <div class="col-md-6">
                                        <img src="img/${producto.id}.jpg" class="img-fluid rounded-start" alt="Mates">
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body">
                                            <h5 class="card-title">${producto.descripcion}</h5>
                                            <p class="card-text">$${producto.precio}</p>
                                            <button class= "btn btn-outline-success" id="boton${producto.id}">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>`
    stockProductos.appendChild(divStock);
    const boton = document.getElementById (`boton${producto.id}`);
    boton.addEventListener ("click", () => {
        agregarAlCarrito(producto.id);
    })
});

const carrito = [];

const agregarAlCarrito = (id) => {
    const producto = Productos.find(producto => producto.id === id);
    carrito.push(producto);
    carritoActualizado();
    console.log (carrito);
}

const totalCarrito = document.getElementById("totalCarrito");
const verCarrito = document.getElementById ("verCarrito");

verCarrito.addEventListener("click", carritoActualizado);

function carritoActualizado () {
    let aux = "";
    carrito.forEach(producto => {
        aux += `  
                <div class="card mb-3" style="max-width: 400px;">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src="img/${producto.id}.jpg" class="img-fluid rounded-start" alt="Mates">
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">${producto.descripcion}</h5>
                                <p class="card-text">$${producto.precio}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>`
    })

    totalCarrito.innerHTML = aux;
    calculoTotalCompra();
}

const totalCompra = document.getElementById("totalCompra");

const calculoTotalCompra = () => {
    let total = 0;
    carrito.forEach (producto => {
        total += producto.precio * producto.cantidad;
    });
    totalCompra.innerHTML = total;
    console.log (total);
}
