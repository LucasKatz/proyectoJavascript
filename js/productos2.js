AOS.init ();

class producto{
    constructor (nombre,precio, fuente, celiacos){
    this.nombre = nombre;
    this.precio= parseFloat(precio);
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

const productos = [];

let miCarrito = [];

//sintaxis optimizada//
miCarrito = JSON.parse(localStorage.getItem('miCarrito')) || []




const contenedorProductos = document.getElementById('contenedor-productos');

const contenedorCarritoCompras = document.querySelector("#items");

const contenedorFooterCarrito = document.querySelector("#footer");

cargarProductos();
dibujarCatalogoProductos();
dibujarCarrito();




    function cargarProductos() {
        productos.push(new producto('Brownies con Dulce de Leche', 180,'../img/Budines/Brownie.jpg', false));
        productos.push(new producto('Brownies con Nuez', 200,'../img/Budines/brownies.jpg', false));
        productos.push(new producto('Magdalenas por Docena', 400,'../img/Budines/magdalenas.jpg', false));
        productos.push(new producto('Cookies de Chocolate', 220, "../img/Cookies/cookieschoco.jpg",true));
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


    function dibujarCarrito() {

        let precioFinal = 0;
        contenedorCarritoCompras.innerHTML = "";
    
        miCarrito.forEach(
            (elemento) => {
                let renglonesCarrito= document.createElement("tr");
                
                renglonesCarrito.innerHTML = `
                    <td>${elemento.producto.nombre}</td>
                    <td><input id="cantidad-producto-${elemento.producto.nombre}" type="number" value="${elemento.cantidad}" min="1" max="50" step="1" style="width: 50px;"/></td>
                    <td>$ ${elemento.producto.precio}</td>
                    <td>$ ${elemento.producto.precio*elemento.cantidad}</td>
                `;
    
                contenedorCarritoCompras.append(renglonesCarrito);

                
                //sintaxis optimizada//
                precioFinal+=elemento.cantidad*elemento.producto.precio;
    
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
        miCarrito.length === 0 ? contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`:
            contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Total de la compra: $${precioFinal}</th>`;
        
    
    }   

    function crearCard(producto) {
        //Botón
        let botonAgregar = document.createElement("button");
        botonAgregar.className = "btn btn-success";
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
        imagen.style= "height: 480px"
        imagen.alt = producto.nombre;
    
        //Card
        let carta = document.createElement("div");
        carta.className = "card m-2 p-2";
        carta.style = "width: 18rem ";
  
        carta.append(imagen);
        carta.append(cuerpoCarta);

        botonAgregar.onclick = () => {
            //alert("Hiciste click en el producto" + producto.nombre);
    
            let itemaComprar= new itemsDelCarrito(producto, 1);
            miCarrito.push(itemaComprar);
            localStorage.setItem("miCarrito",JSON.stringify(miCarrito));
    
            dibujarCarrito();
    
            swal({
                title: "¡Producto agregado!",
                text: `${producto.nombre} agregado al carrito de compra.`,
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
    
                if(irACarrito) {
                    //swal("Vamos al carrito!");
                    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {keyboard: true});
                    const modalToggle = document.getElementById('toggleMyModal');
                    myModal.show(modalToggle);
    
                }
            });
    
        } 
        
        return carta;
    
    }

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

    botonVaciarCompra.addEventListener("click", (i) => {
        i.preventDefault();
        localStorage.removeItem("miCarrito",JSON.stringify(miCarrito));

        const URLPOST="https://jsonplaceholder.typicode.com/posts";
        const nuevaOrden= miCarrito
        fetch(URLPOST,{
        method:'POST',
        body:JSON.stringify(nuevaOrden),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then( respuesta => respuesta.json())
        .then( datos => {
            //lo que retorna
            console.log("Detalles de su orden: ");
            console.log(datos);
        })
    
    })