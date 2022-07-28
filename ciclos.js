//ciclos por conteo - FOR
for(let i=1;i<11;i++){
    console.log("Hola coders, ciclo "+i);
}

//diapo 17
// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    console.log(ingresarNumero +" X "+ i +" = "+ resultado);
}

//diapo 18
for (let i = 1; i <= 4; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    console.log(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}

//Sentencia break
let password;
for(let i=1;i<=3;i++){
    password=prompt("Ingrese la contraseña");
    if(password=="coder123"){
        console.log("Bienvenido usuario");
        break;
    }else{
        console.log("Clave erronea, restan "+ (3-i) +" intentos");
    }
}

//Sentencia continue
for (let i = 1; i <= 10; i++) {
    //Si la variable i es 5, no se interpreta la repetición
    if(i == 5){
        continue;
    }
    console.log(i);
}


//while
let oracion="";
let palabra=prompt("Ingresa una palabra para armar una oracion (s-salir del juego)");

while(palabra!="s"){
    oracion = oracion + " " + palabra;//oracion+=" "+palabra
    palabra=prompt("Ingresa otra palabra para armar la oracion (s-salir del juego)");
}

alert("La oracion formada es: "+oracion);

//do while diapo 29
let numero;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));

//SWITCH-CASE es un condicional
let producto=prompt("Ingresa el producto y te diré su precio\nazucar\nte\nyerba\ncafe\n(s-para salir)");
let precio=0;

while(producto!="s"){
    switch(producto){
        case "azucar":
        case "AZUCAR":
            console.log("El azucar sale $130");
            precio=precio+130;
            break;
        case "te":
            console.log("El te sale $90");
            precio=precio+90;
            break;
        case "yerba":
            console.log("La yerba sale $450");
            precio=precio+450;
            break;
        case "cafe":
            console.log("El café sale $700");
            precio=precio+700;
            break;
        default:
            console.log("Ese producto no está en stock");
            break;
    }
    producto=prompt("Ingresa el producto y te diré su precio (s-para salir)");
}

console.log("Total a pagar $"+precio);





