class listado {
    constructor (nombre,precio, fuente, celiacos, unidades){
    this.nombre = nombre;
    this.precio= parseFloat(precio);
    this.fuente = fuente;
    this.celiacos = celiacos;
    this.unidades = unidades;
}
}

const productos = [];

const menu = [

    {
        nombre: "brownies con dulce de leche",
        precio: 180,
        fuente: src="../img/Budines/Brownie.jpg",
        celiacos: false,
        unidades: "1 unidad"
    },

    {
        nombre:"brownies con nuez",
        precio: 200,
        fuente: src= "../img/Budines/brownies.jpg",
        celiacos: false,
        unidades: "1 unidad"
    },
    {
        nombre:"magdalenas",
        precio: 400,
        fuente: src= "../img/Budines/magdalenas.jpg",
        celiacos: false,
        unidades: "12 unidades"
    },

    {
        nombre: "cookies de chocolate",
        precio: 220,
        fuente: src= "../img/Cookies/cookieschoco.jpg",
        celiacos: false,
        unidades: "12 unidades"
    },

    {
        nombre: "cookies con chips",
        precio: 250,
        fuente: src="../img/Cookies/cookiesconchips.jpg",
        celiacos: false,
        unidades: "12 unidades"
    },

    {
        nombre: "cookies surtidas",
        precio: 200,
        fuente: src="../img/Cookies/cookiesvarias.jpg",
        celiacos: false,
        unidades: "12 unidades"
    },

    {
        nombre: "pan de salvado",
        precio: 350,
        fuente: src= "../img/Panaderia/pandesalvado.jpg",
        celiacos: false,
        unidades: "1 unidad"
    },

    {
        nombre:"trenza de pan sin semillas",
        precio: 350,
        fuente: src="../img/Panaderia/pantrenza2.jpg",
        celiacos: true,
        unidades: "1 unidad"
    },

    {
        nombre:"trenza de pan con semillas",
        precio: 400,
        fuente: src="../img/Panaderia/pansemillas.jpg",
        celiacos: true,
        unidades: "1 unidad"
    },

    {
        nombre:"cañoncitos",
        precio: 550,
        fuente: src="../img/Facturas/cañoncitos.jpg",
        celiacos: false,
        unidades: "12 unidades"
    },

    {
        nombre:"vigilantes",
        precio: 500,
        fuente: src="../img/Facturas/facturasvarias2.jpg",
        celiacos: false,
        unidades: "12 unidades"
    },

    {
        nombre:"medialunas",
        precio: 480,
        fuente: src="../img/Facturas/medialunas.jpg",
        celiacos: false,
        unidades: "12 unidades"
    },

    {
        nombre:"calamares rellenos",
        precio: 600,
        fuente: src="../img/ComidaSalada/calamaresrellenos.jpg",
        celiacos: true,
        unidades: "4 unidades"
    },

    {
        nombre:"locro",
        precio: 900,
        fuente: src="../img/ComidaSalada/locro3.jpg",
        celiacos: true,
        unidades: "1 porción",
    },

    {
        nombre:"matambre",
        precio: 650,
        fuente: src="../img/ComidaSalada/matambrecasero.jpg",
        celiacos: true,
        unidades: "1 unidad"
    }
    ];


let cards=document.getElementById("galeria");
for(const imagen of menu){
    let card=document.createElement("div");
    card.className="card col-3 text-align-center";
    card.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src= ${imagen.fuente} class="card-img-top" alt="...">
            <h5 class="card-title">${imagen.nombre}</h5>
            <p class="card-text">${imagen.precio}</p>
            <button id="miBoton--${imagen.nombre}" class="btn btn-primary">COMPRAR</button>
        </div>
    `;
    cards.append(card);

    //AGREGAR ELEMENTOS AL CARRITO
    let miBoton = document.getElementById(`miBoton--${imagen.nombre}`);

    miBoton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Agregaste" + " " + imagen.nombre + " " +"al carrito");
        productos.push(imagen);
    })

}

//HACER EL CHECKOUT

let botonFinDeCompra = document.getElementById("fin")
let precioFinal = 0
let checkOut = 0
botonFinDeCompra.addEventListener ("click", (e) => {
    e.preventDefault ();
    precioFinal = productos.map (productos => productos.precio)
    checkOut = precioFinal.reduce ((ac,el) => ac + el,0)
    console.table(productos);
    const filtro = productos.filter ((pro) => pro.celiacos==true)
    console.log ("Los siguientes productos son aptos para celiacos")
    console.log (filtro)

    console.log ("El total a pagar es $" + checkOut)


})











