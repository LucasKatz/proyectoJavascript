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

const miCarrito = [];


const contenedorProductos = document.getElementById("contenedor-productos");

const contenedorCarritoCompras = document.querySelector("#items");

const contenedorFooterCarrito = document.querySelector("#footer");

dibujarCatalogoProductos();
cargarProductos();
agregarAlCarrito();
dibujarCarrito();



    function cargarProductos() {
        productos.push(new producto('Brownies con Dulce de Leche', 180,'../img/Budines/Brownie.jpg', false));
        productos.push(new producto('Brownies con Nuez', 200,'../img/Budines/brownies.jpg', false));
        productos.push(new producto('Magdalen.as por Docena', 400,'../img/Budines/magdalenas.jpg', false));
        productos.push(new producto('Cookies de Chocolate', 220, "../img/Cookies/cookieschoco.jpg",true));
        productos.push(new producto('Cookies con Chips', 250, "../img/Cookies/cookieschoco.jpg", false));
        productos.push(new producto('Cookies Surtidas', 250, "../img/Cookies/cookieschoco.jpg", false));
        productos.push(new producto('Pan de Salvado', 250, "../img/Cookies/cookieschoco.jpg", false));
        productos.push(new producto('Trenza de Pan sin Semillas', 250, "../img/Cookies/cookieschoco.jpg", false));
        productos.push(new producto('Trenza de Pan con Semillas', 250, "../img/Cookies/cookieschoco.jpg", false));
        productos.push(new producto('Cañoncitos', 250, "../img/Cookies/cookieschoco.jpg", false));
        productos.push(new producto('Vigilantes', 250, "../img/Cookies/cookieschoco.jpg", false));
        productos.push(new producto('Medialunas', 250, "../img/Cookies/cookieschoco.jpg", false));
        productos.push(new producto('Calamares Rellenos', 250, "../img/Cookies/cookieschoco.jpg", false));
        productos.push(new producto('Locro', 250, "../img/Cookies/cookieschoco.jpg", false));
        productos.push(new producto('Matambre', 250, "../img/Cookies/cookieschoco.jpg", false));
    }


    function agregarAlCarrito() {

        let precioFinal = 0;
        contenedorCarritoCompras.innerHTML = "";
    
        miCarrito.forEach(
            (elemento) => {
                let renglonesCarrito= document.createElement("tr");
                
                renglonesCarrito.innerHTML = `
                    <td>${elemento.producto.nombre}</td>
                    <td><input id="cantidad-producto-${elemento.producto.nombre}" type="number" value="${elemento.cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
                    <td>$ ${elemento.producto.precio}</td>
                    <td>$ ${elemento.producto.precio*elemento.cantidad}</td>
                `;
    
                contenedorCarritoCompras.append(renglonesCarrito);
    
                precioFinal+=elemento.cantidad*elemento.menu.precio;
    
                //agregamos evento a carrito
                let cantidadProductos = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
                
                cantidadProductos.addEventListener("change", (e) => {
                    let nuevaCantidad = e.target.value;
                    elemento.cantidad = nuevaCantidad;
                    dibujarCarrito();
                });
    
            }
        );
    
        //contenedorCarritoCompras.innerHTML = renglonesCarrito;
        
        if(miCarrito.length == 0) {
            miCarrito.innerHTML = `
                <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
            `;
        } else {
            miCarrito.innerHTML = `
                <th scope="row" colspan="5">Total de la compra: $${sumaCarrito}</th>
            `;
        }
    
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
        imagen.alt = producto.nombre;
    
        //Card
        let carta = document.createElement("div");
        carta.className = "card m-2 p-2";
        carta.style = "width: 18rem";
        carta.append(imagen);
        carta.append(cuerpoCarta);

        botonAgregar.onclick = () => {
            //alert("Hiciste click en el producto" + producto.nombre);
    
            let itemaComprar= new ElementoCarrito(producto, 1);
            miCarrito.push(itemaComprar);
    
            dibujarCarrito();
    
            swal({
                title: "¡Producto agregado!",
                text: `${listado.nombre} agregado al carrito de compra.`,
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
       
    
        productos.forEach(
            (producto) => {
                let carta = crearCard(producto);
                contenedorProductos.append(carta);
            }
        );
    
    }
   