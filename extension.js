function saludar() {
    alert("¡Bienvenidos a la cocina de AliFer!");
}

saludar ();

class listaDeCompras {
    constructor(nombre, precio, celiacos, unidades ) {
        this.nombre  = nombre.toLowerCase();
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
            precio=precio+180;
            break;
        case "brownies con nuez":
            productos.push(new listaDeCompras("brownies con nuez",200, false, 1 ));
            precio=precio+200;
            break;
        case "magdalenas":
            productos.push(new listaDeCompras("magdalenas",400, false, 12 ));
            precio=precio+400;
            break;
        case "cookies de chocolate":
            productos.push(new listaDeCompras("cookies de chocolate", 220, true, 12));
            precio=precio+220;
            break;
        case "cookies con chips":
            productos.push(new listaDeCompras("cookies con chips", 250, true, 12));
            precio=precio+250;
            break;
        case "cookies surtidas":
            productos.push(new listaDeCompras("cookies surtidas", 200, false, 12));
            precio=precio+200;
            break;
        case "pan de salvado":
            productos.push(new listaDeCompras("pan de salvado", 350, false, 1 ));
            precio=precio+350;
            break;
        case "trenza de pan sin semillas":
            productos.push(new listaDeCompras("trenza de pan sin semillas", 350, true, 1));
            precio=precio+350;
            break;
        case "trenza de pan con semillas":
            productos.push(new listaDeCompras("trenza de pan con semillas", 400, true, 1));
            precio=precio+400;
            break;
        case "cañoncitos":
            productos.push(new listaDeCompras("cañoncitos", 550, false, 12));
            precio=precio+550;
            break;
        case "vigilantes":
            productos.push(new listaDeCompras("vigilantes", 500, false, 12));
            precio=precio+500;
            break;
        case "medialunas":
            productos.push(new listaDeCompras("medialunas", 480, false, 12));;
            precio=precio+480;
            break;
        case "calamares rellenos":
            productos.push(new listaDeCompras("calamares rellenos", 600, true, 4));
            precio=precio+480;
            break;
        case "locro":
            productos.push(new listaDeCompras("locro", 900, true, 1));
            precio=precio+900;
            break;
        case "matambre":
            productos.push(new listaDeCompras("matambre", 650, true, 1));
            precio=precio+480;
            break;
        case "torta personalizada":
            productos.push(new listaDeCompras("Torta Personalizada", 3500, true, 1));
            precio=precio+3500;
            break;
        case "huevo de pascua":
            productos.push(new listaDeCompras("Huevo de Pascua", 450, false, 1));
            precio=precio+450;
            break;
        case "rosca de pascua":
            productos.push(new listaDeCompras("Rosca de Pascua", 700, false, 1));
            precio=precio+480;
            break;
        case "pan dulce":
            productos.push(new listaDeCompras("Pan Dulce", 1200, false, 1));
            precio=precio+1200;
            break;
        default:
            console.log("Ese producto no está en stock");
            break;
    }

    console.table(productos);
    
    producto=prompt("Ingresa el producto de su interés. \n brownies con dulce de leche \n brownies con nuez \n magdalenas \n cookies de chocolate \n cookies con chips \n cookies surtidas \n pan de salvado \n trenza de pan sin semillas \n trenza de pan con semillas \n cañoncitos \n vigilantes \n medialunas \n calamares rellenos \n locro \n matambre \n torta personalizada \n huevo de pascua \n rosca de pascua \n pan dulce \n apto para celiacos  (fin para ver el total).");
}

const filtro = productos.filter ((pro) => pro.celiacos==true)
console.log ("Los siguientes productos son aptos para celiacos")
console.log (filtro)

console.log("Total a pagar $"+precio);




}

calcular();
