//Librerias Javascript
AOS.init();

//Clase Constructora

class producto {
    constructor(nombre, precio, fuente, celiacos) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.fuente = fuente;
        this.celiacos = celiacos;

    }
}

class itemsDelCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

//Variables y Constantes Globales
const productos = [];
let miCarrito = [];
let itemaComprar = new itemsDelCarrito;

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarritoCompras = document.querySelector("#items");
const contenedorFooterCarrito = document.querySelector("#footer");

//sintaxis optimizada//
miCarrito = JSON.parse(localStorage.getItem('miCarrito')) || []


//Funciones Principales

cargarProductos();
dibujarCatalogoProductos();
dibujarCarrito();



//Carga de productos en el array
function cargarProductos() {
    productos.push(new producto('Brownies con Dulce de Leche', 180, '../img/Budines/Brownie.jpg', false));
    productos.push(new producto('Brownies con Nuez', 200, '../img/Budines/brownies.jpg', false));
    productos.push(new producto('Magdalenas por Docena', 400, '../img/Budines/magdalenas.jpg', false));
    productos.push(new producto('Cookies de Chocolate', 220, "../img/Cookies/cookieschoco.jpg", true));
    productos.push(new producto('Cookies con Chips', 250, "../img/Cookies/cookiesconchips.jpg", false));
    productos.push(new producto('Cookies Surtidas', 250, "../img/Cookies/cookiesvarias.jpg", false));
    productos.push(new producto('Pan de Salvado', 250, "../img/Panaderia/pandesalvado.jpg", false));
    productos.push(new producto('Trenza de Pan sin Semillas', 250, "../img/Panaderia/pantrenza2.jpg", false));
    productos.push(new producto('Trenza de Pan con Semillas', 250, "../img/Panaderia/pansemillas.jpg", false));
    productos.push(new producto('Cañoncitos', 250, "../img/Facturas/cañoncitos.jpg", false));
    productos.push(new producto('Vigilantes', 250, "../img/Facturas/facturasvarias2.jpg", false));
    productos.push(new producto('Medialunas', 250, "../img/Facturas/medialunas.jpg", false));
    productos.push(new producto('Calamares Rellenos', 250, "../img/ComidaSalada/calamaresrellenos.jpg", false));
    productos.push(new producto('Locro', 250, "../img/ComidaSalada/locro3.jpg", false));
    productos.push(new producto('Matambre', 250, "../img/ComidaSalada/matambrecasero.jpg", false));
}


//Dibujo de Carrito de Compras
function dibujarCarrito() {

    let precioFinal = 0;
    contenedorCarritoCompras.innerHTML = "";

    miCarrito.forEach(
        (elemento) => {
            let renglonesCarrito = document.createElement("tr");

            renglonesCarrito.id = `fila${elemento.producto.nombre}`;

            renglonesCarrito.innerHTML += `
                    <td>${elemento.producto.nombre}</td>
                    <td><input id="cantidad-producto-${elemento.producto.nombre}" type="number" value="${elemento.cantidad}" min="1" max="50" step="1" style="width: 50px;"/></td>
                    <td>$ ${elemento.producto.precio}</td>
                    <td> <button class='btn btn-light' onclick='eliminar("${elemento.producto.nombre}")'>🗑️</button>
                    <td>$ ${elemento.producto.precio * elemento.cantidad}</td>`

                ;

            contenedorCarritoCompras.append(renglonesCarrito);


            //sintaxis optimizada//
            precioFinal += elemento.cantidad * elemento.producto.precio;

            //agregamos evento a carrito
            let cantidadProductos = document.getElementById(`cantidad-producto-${elemento.producto.nombre}`);

            cantidadProductos.addEventListener("change", (e) => {
                let nuevaCantidad = e.target.value;
                elemento.cantidad = nuevaCantidad;
                dibujarCarrito();
            });

        }
    );

    //sintaxis optimizada//
    miCarrito.length === 0 ? contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>` :
        contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Total de la compra: $${precioFinal}</th>`;
}

//eliminar productos del carrito
function eliminar(nombre) {
    let indice = miCarrito.find(el => el.nombre == nombre);
    miCarrito.splice(indice, 1);//eliminando del carro
    let fila = document.getElementById(`fila${nombre}`);
    document.getElementById("items").removeChild(fila);//eliminando de la tabla
    localStorage.setItem("miCarrito", JSON.stringify(miCarrito));
    swal({
        text:"Producto eliminado del carro!",
        position: 'center',
        icon: "success",})
    dibujarCarrito();
}


//Dibujo de cartas correspondientes a los productos

function crearCard(producto) {
    //Botón
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-warning";
    botonAgregar.innerText = "Agregar";

    //Card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
            <h5>${producto.nombre}</h5>
            <p>$ ${producto.precio} ARS</p>
        `;
    cuerpoCarta.append(botonAgregar);

    //Imagen
    let imagen = document.createElement("img");
    imagen.src = producto.fuente;
    imagen.className = "card-img-top";
    imagen.style = "height: 480px"
    imagen.alt = producto.nombre;

    //Card
    let carta = document.createElement("div");
    carta.className = "card m-2 p-2";
    carta.style = "width: 18rem ";

    carta.append(imagen);
    carta.append(cuerpoCarta);

    // Indica que el producto fue agregado al carrito

    botonAgregar.onclick = () => {
        

        let itemaComprar = new itemsDelCarrito(producto, 1);

        //let encontrado = miCarrito.find(p => itemaComprar == p.nombre);
        //console.log(encontrado);
        //if (encontrado !== undefined) {
            //let posicion = miCarrito.findIndex(p => itemaComprar == p.nombre);
            //console.log(posicion);
            //miCarrito[posicion].cantidad += 1;
            //con querySelector falla
            //document.getElementById(productoNuevo.id).innerHTML=carrito[posicion].cantidad;
            miCarrito.push(itemaComprar);
        //}
        localStorage.setItem("miCarrito", JSON.stringify(miCarrito));

        dibujarCarrito();

        swal({
            title: "¡Producto agregado!",
            text: "Seleccione desde el carrito de compras la cantidad a comprar",
            icon: "success",
            buttons: {
                cerrar: {
                    text: "Cerrar",
                    value: false
                },
                carrito: {
                    text: "Ir a carrito",
                    value: true
                }
            }
        }).then((irACarrito) => {

            if (irACarrito) {
                const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), { keyboard: true });
                const modalToggle = document.getElementById('toggleMyModal');
                myModal.show(modalToggle);

            }
        });

    }

    return carta;

}

//Dibuja el catalogo de  productos

function dibujarCatalogoProductos() {
    contenedorProductos.innerHTML = "";

    productos.forEach(
        (producto) => {
            let carta = crearCard(producto);
            contenedorProductos.append(carta);
        }
    );

}

let botonVaciarCompra = document.getElementById("Finish");

//Confirma la compra y vacía el carrito

botonVaciarCompra.addEventListener("click", (i) => {
    i.preventDefault();
    if (miCarrito.length !== 0){
        swal({
       position: 'center',
       icon: "success",
       text: 'Puedes retirar tu pedido luego de 5 dias hábiles',
       title: 'Gracias por tu compra',
       button: false,
       })
       
       
       const URLPOST = "https://jsonplaceholder.typicode.com/posts";
       const nuevaOrden = miCarrito
       fetch(URLPOST, {
           method: 'POST',
           body: JSON.stringify(nuevaOrden),
           headers: {
               'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(respuesta => respuesta.json())
        .then(datos => {

            //retorna datos de la compra
           
            console.log("Detalles de su orden: ");
            console.table(datos);
            miCarrito = [];
            items.innerHTML= "";
            localStorage.removeItem("miCarrito", JSON.stringify(miCarrito));
            dibujarCarrito();
        })
        
        //Avisa si el carro esta vacio
}else{
    swal({
        position: 'center',
        icon: 'error',
        title: 'No hay nada en tu carrito',
        text: 'Elige un producto e intentalo de nuevo',
        button: false,
        timer: 3000
      })
 }}
)