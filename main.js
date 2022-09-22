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
