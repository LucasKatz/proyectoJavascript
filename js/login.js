const  formRegistro = document.getElementById ("registroNuevoUsuario")
const  formIngreso = document.getElementById ("ingreso")
const  nombre=document.getElementById ("nombre")
const  apellido=document.getElementById("apellido") 
const  email=document.getElementById ("correo")
const  domicilio=document.getElementById ("domicilio")

const usuarioRegistrado = []
let id = 0;

formRegistro.addEventListener ("submit" , registrarUsuario)



function registrarUsuario(registro) {

    registro.preventDefault();

    id ++ ;

    const nuevoUsuario = {
    
    id: id,
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    domicilio: domicilio.value
    }
}