//Variables y Constantes Globales

const userNombre = document.getElementById('userNombre');
const contraseña = document.getElementById('contraseña');
const login = document.getElementById('ingreso');
const frmLogin = document.getElementById('frm-Login');

const busqueda = localStorage.getItem("user");
const validarUsuario = JSON.parse(busqueda); 

//Loggear Usuario
frmLogin.addEventListener('submit', LoginUser);



function LoginUser(event) {

  const busqueda = localStorage.getItem("user");
  const validarUsuario = JSON.parse(busqueda); 
  
  // Prevenir los eventos precargados
  event.preventDefault();

  // Validar que los campos no estén vacíos
  if (userNombre.value === "" || contraseña.value === "") {
    swal({
      position: 'center',
      icon: "warning",
      title: 'Por favor llene todos los campos',
      button: true,
      })
  }
  // Validar que el usuario exista
  else if (!validarUsuario.find(user => user.user === userNombre.value)) {
    swal({
      position: 'center',
      icon: "warning",
      title: 'El usuario no existe',
      button: true,
      })
  }
  // Validar que la contraseña coincida
  else if (
    validarUsuario.find(user => user.user === userNombre.value).pass !== contraseña.value) {
      swal({
        position: 'center',
        icon: "error",
        title: 'La contraseña no coincide',
        button: true,
        })
    }
  else {
    swal({
      position: 'center',
      icon: "success",
      text: 'Bienvenido a las cocinas de AliFer Pasteleria',
      title: 'Usuario logueado con éxito',
      button: false,
      })
    // Ir a otra página desde JavaScript
    setTimeout( function() { window.location.href = "https://master--aliferpasteleria.netlify.app/index.html"; }, 2000 );
  }      
}