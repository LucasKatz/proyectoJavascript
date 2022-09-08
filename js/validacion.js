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
    alert("Por favor llene todos los campos");
  }
  // Validar que el usuario exista
  else if (!validarUsuario.find(user => user.user === userNombre.value)) {
    alert("El usuario no existe");
  }
  // Validar que la contraseña coincida
  else if (
    validarUsuario.find(user => user.user === userNombre.value).pass !== contraseña.value) {
      alert("La contraseña no coincide");
    }
  else {
    alert("Usuario logueado con éxito");
    // Ir a otra página desde JavaScript
  }      
}