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
            <a href="#" id = "miBoton" class="btn btn-primary">COMPRAR</a>
        </div>
    `;
    cards.append(card);
}

let boton = document.getElementsByClassName("btn")
//PEDIDO DEL CLIENTE //

class listaDeCompras {
    constructor(nombre, precio, celiacos, unidades ) {
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
        this.celiacos = celiacos;
        this.unidades = unidades;
    }
}

const productos = [];

let producto = prompt ("Ingresa el producto de su interés. \n brownies con dulce de leche \n brownies con nuez \n magdalenas \n cookies de chocolate \n cookies con chips \n cookies surtidas \n pan de salvado \n trenza de pan sin semillas \n trenza de pan con semillas \n cañoncitos \n vigilantes \n medialunas \n calamares rellenos \n locro \n matambre \n torta personalizada \n huevo de pascua \n rosca de pascua \n pan dulce \n apto para celiacos \n (fin para ver el total).").toLowerCase();
let precio=0;
let cel = listaDeCompras.celiacos



function calcular(){

while(producto!="fin"){
    switch(producto){
        case "brownies con dulce de leche":
            productos.push(new listaDeCompras("brownies con dulce de leche",180,  false, 1));
            console.log ("El precio de los brownies con dulce de leche es de $180")
            precio=precio+180;
            break;
        case "brownies con nuez":
            boton.onclick = () => productos.push(new listaDeCompras("brownies con nuez",200, false, 1 ));
            console.log ("El precio de los brownies con nuez es de $200")
            precio=precio+200;
            break;
        case "magdalenas":
            productos.push(new listaDeCompras("magdalenas",400, false, 12 ));
            console.log ("El precio de las magdalenas es de $400")
            precio=precio+400;
            break;
        case "cookies de chocolate":
            productos.push(new listaDeCompras("cookies de chocolate", 220, true, 12));
            console.log ("El precio de las cookies de chocolate es de $220")
            precio=precio+220;
            break;
        case "cookies con chips":
            productos.push(new listaDeCompras("cookies con chips", 250, true, 12));
            console.log ("El precio de las cookies con chips es de $250")
            precio=precio+250;
            break;
        case "cookies surtidas":
            productos.push(new listaDeCompras("cookies surtidas", 200, false, 12));
            console.log ("El precio de las cookies surtidas es de $200")
            precio=precio+200;
            break;
        case "pan de salvado":
            productos.push(new listaDeCompras("pan de salvado", 350, false, 1 ));
            console.log ("El precio de el pan de salvado es de $350")
            precio=precio+350;
            break;
        case "trenza de pan sin semillas":
            productos.push(new listaDeCompras("trenza de pan sin semillas", 350, true, 1));
            console.log ("El precio de la trenza de pan sin semillas es de $350")
            precio=precio+350;
            break;
        case "trenza de pan con semillas":
            console.log ("El precio de la trenza de pan con semillas es de $400")
            productos.push(new listaDeCompras("trenza de pan con semillas", 400, true, 1));
            precio=precio+400;
            break;
        case "cañoncitos":
            productos.push(new listaDeCompras("cañoncitos", 550, false, 12));
            console.log ("El precio de la docena de cañoncitos es de $550")
            precio=precio+550;
            break;
        case "vigilantes":
            productos.push(new listaDeCompras("vigilantes", 500, false, 12));
            console.log ("El precio de la docena de vigilantes es de $500")
            precio=precio+500;
            break;
        case "medialunas":
            productos.push(new listaDeCompras("medialunas", 480, false, 12));;
            console.log ("El precio de las medialunas es de $480")
            precio=precio+480;
            break;
        case "calamares rellenos":
            productos.push(new listaDeCompras("calamares rellenos", 600, true, 4));
            console.log ("El precio de la porcion de calamares rellenos es de $600")
            precio=precio+600;
            break;
        case "locro":
            productos.push(new listaDeCompras("locro", 900, true, 1));
            console.log ("El precio de la porción de locro es de $900")
            precio=precio+900;
            break;
        case "matambre":
            productos.push(new listaDeCompras("matambre", 650, true, 1));
            console.log ("El precio del kilo de matambre es de $650")
            precio=precio+650;
            break;
        case "torta personalizada":
            productos.push(new listaDeCompras("Torta Personalizada", 3500, true, 1));
            console.log ("El precio de una torta personalizada es de $3500")
            precio=precio+3500;
            break;
        case "huevo de pascua":
            productos.push(new listaDeCompras("Huevo de Pascua", 450, false, 1));
            console.log ("El precio de un huevo de pascua es de $450")
            precio=precio+450;
            break;
        case "rosca de pascua":
            productos.push(new listaDeCompras("Rosca de Pascua", 700, false, 1));
            console.log ("El precio de laa rosca de pascua es de $700")
            precio=precio+700;
            break;
        case "pan dulce":
            productos.push(new listaDeCompras("Pan Dulce", 1200, false, 1));
            console.log ("El precio del pan dulce es de $1200")
            precio=precio+1200;
            break;
        default:
            console.log("Ese producto no está en stock");
            break;
    }



    producto=prompt("Ingresa el producto de su interés. \n brownies con dulce de leche \n brownies con nuez \n magdalenas \n cookies de chocolate \n cookies con chips \n cookies surtidas \n pan de salvado \n trenza de pan sin semillas \n trenza de pan con semillas \n cañoncitos \n vigilantes \n medialunas \n calamares rellenos \n locro \n matambre \n torta personalizada \n huevo de pascua \n rosca de pascua \n pan dulce \n apto para celiacos  (fin para ver el total).").toLowerCase();

}

//DETALLES DE LOS PRODUCTOS//


console.table(productos);

//PRODUCTOS APTOS PARA CELIACOS//

const filtro = productos.filter ((pro) => pro.celiacos==true)
console.log ("Los siguientes productos son aptos para celiacos")
console.log (filtro)


//TOTAL A PAGAR//
console.log("Total a pagar $"+precio);

}

calcular();
