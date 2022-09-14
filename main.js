class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = 8;
        this.vendido = false;
    }

    sumarIva () {
        return (this.precio * 1.21).toFixed(2);
    }

    vender () {
        this.vendido = true;
    }
}

let nombre = prompt("Ingrese su nombre: ");
console.log (nombre);
let saludo = prompt ("Hola " + nombre + ", ingrese el producto que desea (producto1 o producto2)");
console.log (saludo);

const mateDiseño1 = new Producto ("Diseño1", 720);
const mateDiseño2 = new Producto ("Diseño2", 850);
const accesorioMate = new Producto ("Bombilla", 325);

mateDiseño1.vender();
accesorioMate.vender();


if (saludo === "producto1") {
    alert ("Producto añadido. El precio es: $" + mateDiseño1.precio + ", con el IVA el precio final es: $" + mateDiseño1.sumarIva());
} else if (saludo === "producto2") {
    alert ("Producto añadido. El precio es: $" + mateDiseño2.precio + ", con el IVA el precio final es: $" + mateDiseño2.sumarIva());
} else {
    alert ("No es un producto existente. Vuelva a intentar.");
}

let accesorio = prompt ("Ingrese Bombilla para agregar el producto al carrito, si no lo desea ingrese SALIR");

const stockProducto = [mateDiseño1, mateDiseño2, accesorioMate];

function Bombilla (stockProducto) {
    for (const Producto of stockProducto) {
        if (Producto.nombre === "Bombilla" && accesorio === "Bombilla") {
            alert("La Bombilla cuesta: $" + accesorioMate.precio + ", con el IVA el precio final es: $" + accesorioMate.sumarIva());
            alert ("¡Gracias por tu compra " + nombre +  ", regresa pronto!");
            } if (accesorio === "SALIR") {
                alert ("Muchas gracias por su compra.");
            }
        }
    }

Bombilla (stockProducto);
console.log (stockProducto)



let carrito =  stockProducto.slice (0,2);
console.log (carrito);

let indiceBombilla = stockProducto.indexOf(accesorioMate);
console.log (indiceBombilla);

let booleanoBombilla = stockProducto.includes (accesorioMate);
console.log (booleanoBombilla);