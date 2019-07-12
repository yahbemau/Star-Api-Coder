function contactController() {
  console.log('cargamos contacto')
  $('.main-title').text('cargamos la seccion contacto')
}

var nombreOk = false;
var apelliOk = false;
var dniOk = false;
var emailOk = false;

$('.main').on('blur', '#input_name', verifNombre);
$('.main').on('blur', '#input_apellido', verifApellido);
$('.main').on('blur', '#input_mail', verifMail);

function verifNombre(){
  if (event.target.value.length < 3){
    event.target.classList.remove('is-valid');
    event.target.classList.add('is-invalid');
    nombreOk = true
  }else{
    event.target.classList.remove('is-invalid');
    event.target.classList.add('is-valid');
  }
}

function verifApellido(){
  if (event.target.value.length < 2){
    event.target.classList.remove('is-valid');
    event.target.classList.add('is-invalid');
    apelliOk = true
  }else{
    event.target.classList.remove('is-invalid');
    event.target.classList.add('is-valid');
  }
}

function verifMail(email) {
  if (emailIsValid(email.target.value)) {
    event.target.classList.remove('is-invalid');
    event.target.classList.add('is-valid');
    emailOk = true
  }else{
    event.target.classList.remove('is-valid');
    event.target.classList.add('is-invalid');
  }
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default contactController
