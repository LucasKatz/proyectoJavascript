//Arrays en JS
const listaViaje=["pasaporte","medias","gorro","buzo","guantes","cepillo de dientes","dinero"];
console.log(listaViaje);

console.log("No debo olvidarme el "+listaViaje[4]);
//recorrido del array
// for(let i=0;i<6;i++){
//     console.log(listaViaje[i]);
// }

//propiedad length
console.log("Cual es la longitud del array?? "+listaViaje.length);

for(let i=0;i<listaViaje.length;i++){
    console.log(listaViaje[i]);
}

//método push
// listaViaje.push("lentes de sol","bufanda","remera");
listaViaje.push("lentes de sol");
console.log(listaViaje);

//metodo unshift
listaViaje.unshift("jean");
console.log(listaViaje);

//eliminar elementos shift(el primero) pop(el ultimo)
listaViaje.shift();
listaViaje.pop();
console.log(listaViaje); 

//splice elimina en cualquier posicion y cantidad
//quiero eliminar buzo y guantes
listaViaje.splice(3,2);
console.log(listaViaje);

//join 
let cadenaJoin=listaViaje.join(" - ");
console.log(cadenaJoin);

//concat
const listaAlmacen=["pan","cafe","azucar"];
const listaCarniceria=["asado","carne picada"];
const compras=listaAlmacen.concat(listaCarniceria);
console.log(compras);

//slice
const panYCafe=listaAlmacen.slice(0,2);
console.log(panYCafe);

//indexOf
const nombres=["Juan","Miguel","Romina","Jose"];
let posicionElemento=nombres.indexOf("Jose");
console.log(posicionElemento);
if(posicionElemento!=-1){
    console.log("El elemento buscado se encuentra en la posicion "+posicionElemento);
}else{
    console.log("El elemento no se encuentra en la lista");
}

//includes
let estaEnLaLista=nombres.includes("Maria");//false
console.log(estaEnLaLista)

//reverse
nombres.reverse()
console.log( nombres ) 

//Array de objetos
const libros=[
    {
        isbn:"2345123",
        titulo:"Harry Potter",
        genero:"Aventuras",
        precio:230.90
    },
    {
        isbn:"9099777",
        titulo:"Elige tu propia aventura",
        genero:"Aventuras",
        precio:199.00
    },
    {
        isbn:"12121212",
        titulo:"JS para principiantes",
        genero:"Educacion",
        precio:290.00
    },
    {
        isbn:"3333333",
        titulo:"Diccionario de Frances-Español",
        genero:"Diccionario",
        precio:99.90
    }
];

//for..of para recorrer arrays de objetos
for(const libro of libros){
    console.log(libro.titulo);
    console.log(libro.precio);
}

let tituloABuscar=prompt("Ingresa el libro a buscar");
for(const libro of libros){
    if(libro.titulo==tituloABuscar){
        let posicion=libros.indexOf(libro);
        console.log("El libro se encuentra en la posicion "+posicion);
        console.log(libro);
    }
}

//Diapo 42
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
console.log("lista de productos:");
console.log(productos);
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
    producto.sumaIva();