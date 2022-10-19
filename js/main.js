class Producto {
    constructor(nombre, id, precio, descripcion, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio.toFixed(2);
        this.descripcion = descripcion;
        this.cantidad = cantidad;
    }
}

const Productos = ["Diseño1", "Diseño2", "Diseño3", "Diseño4", "Diseño5", "Diseño6","Diseño7","Diseño8","Diseño9","Diseño10","Diseño11","Diseño12","Diseño13","Diseño14","Diseño15","Diseño16","Diseño17","Diseño18","Diseño19","Diseño20","Bombilla"];
console.log (Productos);

const stockProductos = document.getElementById("stockProductos");

const listadoProductos = "json/productos.json";

fetch (listadoProductos)
    .then (response => response.json())
    .then (productos => {
        productos.forEach(producto => {
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
                                                    <button class= "btn btn-danger" id="boton(${producto.id})">Comprar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
            stockProductos.appendChild(divStock);
            const boton = document.getElementById (`boton(${producto.id})`);
            boton.addEventListener ("click", () => {
                agregarAlCarrito(producto.id);
                Toastify ({
                    text: "Producto agregado al carrito",
                    duration: 2000,
                    gravity: "bottom",
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, #a1a1a1, #d7d5d5)",
                    },
                }).showToast();
            })
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
    const producto = Productos.find (producto => producto.id === id);
    const productoAgregado = carrito.find (producto => producto === id)
    if (productoAgregado){
        productoAgregado.cantidad++;
    } else {
        carrito.push(producto);
    }
    carritoActualizado();
    console.log (carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const totalCarrito = document.getElementById("totalCarrito");
const verCarrito = document.getElementById ("verCarrito");

verCarrito.addEventListener("click", carritoActualizado);

function carritoActualizado() {
    let aux = "";
    fetch (listadoProductos)
        .then (response => response.json())
        .then (carrito => {
            carrito.forEach ( producto => {
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
                                        <p>Cantidad: ${producto.cantidad}</p>
                                        <button onClick = "eliminarProducto (${producto.id})" class= "btn btn-danger">Eliminar del carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>`
            });
    totalCarrito.innerHTML = aux;
    calculoTotalCompra();
    });
}

const eliminarProducto = (id) => {
    const producto = carrito.find(producto => producto === id);
    carrito.splice(carrito.indexOf(producto),1);
    Swal.fire({
        title: "Producto eliminado del carrito",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#E25C5A", 
    })
    carritoActualizado();
}


const totalCompra = document.getElementById("totalCompra");

const calculoTotalCompra = () => {
    let total = 0
    fetch (listadoProductos)
    .then (response => response.json())
    .then (carrito => { 
        carrito.forEach (producto => {
            total += producto.precio * producto.cantidad;
        })
    totalCompra.innerHTML = total;
});
}
