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

console.log ("Los precios de nuestros productos son: ");

const mateDiseño1 = new Producto ("Diseño1", 720);
console.log ("El Diseño1 cuesta: " + mateDiseño1.precio + ", con el IVA el precio final es: " + mateDiseño1.sumarIva());

const mateDiseño2 = new Producto ("Diseño2", 850);
console.log ("El Diseño2 cuesta: " + mateDiseño2.precio + ", con el IVA el precio final es: " + mateDiseño2.sumarIva());

const accesorioMate = new Producto ("Bombilla", 325);
console.log ("La Bombilla cuesta: " + accesorioMate.precio + ", con el IVA el precio final es: " + accesorioMate.sumarIva());



const stockProducto = [mateDiseño1, mateDiseño2, accesorioMate];
console.log (stockProducto);

function colorBombilla (stockProducto) {
    for (const Producto of stockProducto) {
        if (Producto.nombre === "Bombilla")
        console.log ("Debes elegir un color de bombilla");
    }
}

colorBombilla (stockProducto);
console.log (stockProducto);


mateDiseño1.vender();
accesorioMate.vender();



let carrito =  stockProducto.slice (0,2);
console.log (carrito);

let indiceBombilla = stockProducto.indexOf(accesorioMate);
console.log (indiceBombilla);

let booleanoBombilla = stockProducto.includes (accesorioMate);
console.log (booleanoBombilla);



