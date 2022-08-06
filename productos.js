//CREAR UNA CONSTANTE COMO MENU//
class listado {
    constructor (nombre,precio, fuente){
    this.nombre = nombre;
    this.precio= parseFloat(precio);
    this.fuente = fuente;
}
}

const menu = [

    {
        nombre: "brownies con dulce de leche",
        precio: "$ 180",
        fuente: src="../img/Budines/Brownie.jpg"
    },

    {
        nombre:"brownies con nuez",
        precio:"$200",
        fuente: src= "../img/Budines/brownies.jpg"
    },
    {
        nombre:"magdalenas",
        precio: "$400",
        fuente: src= "../img/Budines/magdalenas.jpg"
    },

    {
        nombre: "cookies de chocolate",
        precio: "$220",
        fuente: src= "../img/Cookies/cookieschoco.jpg"
    },

    {
        nombre: "cookies con chips",
        precio: "$ 250",
        fuente: src="../img/Cookies/cookiesconchips.jpg"
    },

    {
        nombre: "cookies surtidas",
        precio: "$200",
        fuente: src="../img/Cookies/cookiesvarias.jpg"
    },


    {
        nombre: "pan de salvado",
        precio: "$350",
        fuente: src= "../img/Panaderia/pandesalvado.jpg"
    },

    {
        nombre:"trenza de pan sin semillas",
        precio: "$350",
        fuente: src="../img/Panaderia/pantrenza2.jpg"
    },

    {
        nombre:"trenza de pan con semillas",
        precio: "$400",
        fuente: src="../img/Panaderia/pansemillas.jpg"
    },

    {
        nombre:"cañoncitos",
        precio: "$550",
        fuente: src="../img/Facturas/cañoncitos.jpg"
    },

    {
        nombre:"vigilantes",
        precio: "$500",
        fuente: src="../img/Facturas/facturasvarias2.jpg"
    },

    {
        nombre:"medialunas",
        precio: "$480",
        fuente: src="../img/Facturas/medialunas.jpg"
    },

    {
        nombre:"calamares rellenos",
        precio: "$600",
        fuente: src="../img/ComidaSalada/calamaresrellenos.jpg"
    },

    {
        nombre:"locro",
        precio: "$900",
        fuente: src="../img/ComidaSalada/locro3.jpg"
    },

    {
        nombre:"matambre",
        precio: "$650",
        fuente: src="../img/ComidaSalada/matambrecasero.jpg"
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
            <a href="#" class="btn btn-primary">COMPRAR</a>
        </div>
    `;
    cards.append(card);
}