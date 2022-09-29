class Producto {
    constructor(id, nombre, precio, descripcion, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio.toFixed(2);
        this.descripcion = descripcion;
        this.cantidad = cantidad;
    }
}

const mateDiseño1 = new Producto(1, "Diseño1", 1370, "Hexagonal Floreado", 1);
const mateDiseño2 = new Producto(2, "Diseño2", 1150, "Hojas", 1);
const mateDiseño3 = new Producto(3, "Diseño3", 1420,"Paz y Flores", 1);
const mateDiseño4 = new Producto(4, "Diseño4", 1600,"Personalizado", 1);
const mateDiseño5 = new Producto(5, "Diseño5", 1570,"Llama", 1);
const mateDiseño6 = new Producto(6, "Diseño6", 1480,"Fase Lunar", 1);
const mateDiseño7 = new Producto(7, "Diseño7", 1100,"Maradona", 1);
const mateDiseño8 = new Producto(8, "Diseño8", 1320,"Mano de Fátima", 1);
const accesorioMate = new Producto(9,"Bombilla", 725, "Bombilla de color a elección", 1);

const Productos = [mateDiseño1, mateDiseño2, mateDiseño3, mateDiseño4, mateDiseño5, mateDiseño6, mateDiseño7, mateDiseño8, accesorioMate];
console.log (Productos);

const stockProductos = document.getElementById("stockProductos");

Productos.forEach(producto => {
    const divStock = document.createElement("div");
    divStock.innerHTML = `  <div class="card mb-3 stockGrilla" style="max-width: 400px;">
                                <div class="row g-0">
                                    <div class="col-md-6">
                                        <img src="img/${producto.id}.jpg" class="img-fluid rounded-start" alt="Mates">
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card-body">
                                            <h5 class="card-title">${producto.descripcion}</h5>
                                            <p class="card-text">$${producto.precio}</p>
                                            <button class= "btn btn-danger" id="boton${producto.id}">Comprar</button>
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

if(localStorage.getItem("carrito")) {
    let productosCarrito = JSON.parse(localStorage.getItem("carrito"));
    for (let i = 0; i < productosCarrito.length; i++) {
        carrito.push(productosCarrito[i]);
    }
}

const agregarAlCarrito = (id) => {
    const producto = Productos.find(producto => producto.id === id);
    const productoAgregado = carrito.find (producto => producto.id === id) ? productoAgregado.cantidad++ : carrito.push(producto);
    /* Reemplacé el operador ternario, que no sé si sería la forma correcta de aplicarlo, por este condicional que tenía:
    if (productoAgregado){
        productoAgregado.cantidad++;
    } else {
        carrito.push(producto);
    }
    */
    carritoActualizado();
    console.log (carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
                                <button onClick= "eliminarProducto (${producto.id})" class= "btn btn-danger">Eliminar del carrito</button>
                            </div>
                        </div>
                    </div>
                </div>`
    })
    totalCarrito.innerHTML = aux;
    calculoTotalCompra();
}

const eliminarProducto = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    carrito.splice(carrito.indexOf(producto),1);
    carritoActualizado();
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
