const precio1 = 720;
const precio2 = 880;
const precio3 = 325;


let nombre = prompt ("Ingrese su nombre: ");
console.log (nombre);
let pregunta = prompt ("Hola " + nombre + ", ingrese el producto que quiera añadir a su carrito (producto1 o producto2)");
console.log (pregunta);

while (pregunta != "producto1" && pregunta != "producto2") {
    alert ("Por favor, ingresá producto1 o producto2");
    pregunta = prompt ("Hola " + nombre + ", ingrese el producto que quiera añadir a su carrito (producto1 o producto2)");
}

if (pregunta == "producto1") {
    alert ("Producto añadido. El precio es " + precio1);
    console.log (precio1);
} else {
    alert ("Producto añadido. El precio es " + precio2);
    console.log (precio2);
}

let carrito = prompt ("¿Desea añadir producto3 al carrito? Responda si o no");

if (carrito == "si" && pregunta == "producto1") {
    let sumaTotal = (a,b) => precio1 + precio3;
    console.log (sumaTotal (850,950));
    alert ("¡Muchas gracias por su compra!");
} else if (carrito == "si" && pregunta == "producto2") {
    let sumaTotal = (a,b) => precio2 + precio3;
    console.log (sumaTotal (900,950));
    alert ("¡Muchas gracias por su compra!");
} else {
    alert ("¡Muchas gracias por su compra!");
}


