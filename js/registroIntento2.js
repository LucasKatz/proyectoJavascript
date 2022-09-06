const  formRegistro = document.getElementById ("registroNuevoUsuario")
const  formIngreso = document.getElementById ("ingreso")
const  nombre=document.getElementById ("nombre")
const  email=document.getElementById ("correo")
const  domicilio=document.getElementById ("domicilio")
const contraseña = document.getElementById ("contraseña")


const usuarioRegistrado = []
let id = 0;

formRegistro.addEventListener ("submit" , registrarUsuario)



function registrarUsuario(registro) {

    registro.preventDefault();

    id++ ;

    const nuevoUsuario = {
    
    id: id,
    nombre: nombre.value,
    email: email.value,
    domicilio: domicilio.value,
    contraseña:contraseña.value
    };

    if (
        nombre.value=== "" ||
        email.value=== "" ||
        domicilio.value=== "" ||
        contraseña.value=== "" 

    ){
        alert (" Por favor complete todos los datos");
    }

    else if (usuario.find (usuario =>usuario.usuario === usuario.value )){
        alert ("El usuario ya existe")

    }

    else {
        usuarioRegistrado.push (nuevoUsuario)

        localStorage.setItem ("nuevoUsuario", JSON.stringify(usuarioRegistrado));
        alert("Usuario registrado con éxito")
    }
}