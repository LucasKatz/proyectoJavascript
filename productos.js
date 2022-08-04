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
        //fuente:<img src="../img/Budines/Brownie.jpg" class="card-img-top" alt="..."></img>,
    },

    {
        nombre:"brownies con nuez",
        precio:"$200",
        //fuente:<img src="../img/Budines/brownies.jpg" class="card-img-top" alt="..."></img>,
    },

    {
        nombre:"magdalenas",
        precio: "$400",
        //fuente:<img src="../img/Budines/magdalenas.jpg" class="card-img-top" alt="..."></img>,
    },

    {
        nombre: "cookies de chocolate",
        precio: "$220",
        //fuente:<img src="../img/Cookies/coockies choco.jpg" class="card-img-top" alt="..."></img>,
    },

    {
        nombre: "cookies con chips",
        precio: "$ 250",
        //fuente:<img src="../img/Cookies/cookies con chips.jpg" class="card-img-top" alt="..."></img>,
    },

    {
        nombre: "cookies surtidas",
        precio: "$200",
        //fuente:<img src="../img/Cookies/cookies varias.jpg" class="card-img-top" alt="..."></img>,
    },

    {
        nombre: "pan de salvado",
        precio: "$350",
        //fuente:<img src="../img/Panaderia/pan de salvado.jpg" class="card-img-top" alt="..."></img>,
    },

    {
        nombre:"trenza de pan sin semillas",
        precio: "$350",
        //fuente:<img src="../img/Panaderia/pan trenza 2.jpg" class="card-img-top" alt="..."></img>,
    },

    {
        nombre:"trenza de pan con semillas",
        precio: "$400",
        //fuente:<img src="../img/Panaderia/pan semillas.jpg" class="card-img-top" alt="..."></img>,
    },

    {
        nombre:"cañoncitos",
        precio: "$550",
        //fuente:<img src="../img/Facturas/cañoncitos.jpg" class="card-img-top" alt="..."></img>,
    },

    {
        nombre:"vigilantes",
        precio: "$500",
        //fuente:<img src="../img/Facturas/facturas varias 2.jpg" class="card-img-top" alt="..."></img>,
    },

    {
        nombre:"medialunas",
        precio: "$480",
        //fuente:<img src="../img/Facturas/medialunas.jpg" class="card-img-top" alt="..."></img>,
    },

    {
        nombre:"calamares rellenos",
        precio: "$600",
        //fuente:<img src="../img/Comida Salada/calamares rellenos.jpg" class="card-img-top" alt="..."></img>,
    },

    {
        nombre:"locro",
        precio: "$900",
        //fuente:<img src="../img/Comida Salada/locro3.jpg" class="card-img-top" alt="..."></img>,
    },

    {
        nombre:"matambre",
        precio: "$650",
        //fuente:<img src="../img/Comida Salada/matambre casero.jpg" class="card-img-top" alt="..."></img>,
    }
    ];


let cards=document.getElementById("galeria");
for(const imagen of menu){
    let card=document.createElement("div");
    card.className="card col-md-3";
    card.innerHTML=`
        <div class="card-body">
            <img src= ${imagen.fuente} class="card-img-top" alt="...">
            <h5 class="card-title">${imagen.nombre}</h5>
            <p class="card-text">${imagen.precio}</p>
            <a href="#" class="btn btn-primary">COMPRAR</a>
        </div>
    `;
    cards.append(card);
}