const  formRegistro = document.getElementById ("registroNuevoUsuario")
const  formIngreso = document.getElementById ("ingreso")
const  nombre=document.getElementById ("nombre")
const  email=document.getElementById ("correo")
const  domicilio=document.getElementById ("domicilio")
const contraseña = document.getElementById ("contraseña")


//FORMULARIO
let usuarios = []

function cargarUsuario () {
    usuarios.push (new usuario (nombre.value, email.value, domicilio.value, contraseña.value))
}

let btnRegistro = document.getElementById("registrarse");

btnRegistro.addEventListener('submit', function (event) {
      event.preventDefault();
      
      if (nombre.length !== 0 || email.length.length !== 0  || domicilio.length !== 0  || contraseña.length !== 0 ){
        swal({
       position: 'center',
       icon: "success",
       text: 'Usuario registrado con éxito',
       button: false,
       })

    }else{
        swal({
            position: 'center',
            icon: 'error',
            text: 'Por favor complete todos los datos',
            button: false,
            timer: 3000
          })
          localStorage.setItem("usuario", JSON.stringify(usuario));
      form.reset();
        }
      
  })
;

