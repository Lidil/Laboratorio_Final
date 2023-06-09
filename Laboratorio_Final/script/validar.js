

var nombreInput= document.getElementById("nombre");
var primer_apellidoInput= document.getElementById("primer_apellido");
var  segundo_apellidoInput= document.getElementById("segundo_apellido");
var  emailInput= document.getElementById("email");
var  loginInput= document.getElementById("login");
var  claveInput= document.getElementById("clave");

var nombreError = document.querySelector('input[name="nombre"] + p.error');
var primer_apellidoError =document.querySelector('input[name="primer_apellido"]+p.error');
var segundo_apellidoError =document.querySelector('input[name="segundo_apellido"]+p.error');
var emailError = document.querySelector('input[name="email"] + p.error');
var loginError = document.querySelector('input[name="login"] + p.error');
var claveError = document.querySelector('input[name="clave"] + p.error');

nombreInput.addEventListener('input', validaNombre);
primer_apellidoInput.addEventListener('input', validarPrimer_apellido);
segundo_apellidoInput.addEventListener('input', validarSegundo_apellido);
emailInput.addEventListener('input', validarEmail);
loginInput.addEventListener('input', validarLogin);
claveInput.addEventListener('input', validarClave);

function validaNombre(){
    var nombreCorrecto=/^[A-Za-záéíóúÁÉÍÓÚüÜ]+$/.test(nombreInput.value);
    var lineaInput = document.querySelector('.nombre-linea-input');
    
    if(nombreInput.value === " "){
        nombreError.textContent ="Por favor, introduzca un nombre";
        lineaInput.classList.add('invalido');
        lineaInput.classList.remove('correcto');
    }else if(!nombreCorrecto){
        nombreError.textContent ="El formato no es correcto";
        lineaInput.classList.add('invalido');
        lineaInput.classList.remove('correcto');
    }else{
        nombreError.textContent =" ";
        lineaInput.classList.remove('invalido');
        lineaInput.classList.add('correcto');
    }
}

function validarPrimer_apellido(){
    var primer_apellidoCorrecto=/^[A-Za-záéíóúÁÉÍÓÚüÜ]+$/.test(primer_apellidoInput.value);
    var lineaInput = document.querySelector('.primer_apellido-linea-input');
   
    if(primer_apellidoInput.value === " "){
        primer_apellidoError.textContent ="Por favor, introduzca el primer apellido";
        lineaInput.classList.add('invalido');
        lineaInput.classList.remove('correcto');
    }else if(!primer_apellidoCorrecto){
        primer_apellidoError.textContent ="El formato no es correcto";
        lineaInput.classList.add('invalido');
        lineaInput.classList.remove('correcto');
    }else{
        primer_apellidoError.textContent =" ";
        lineaInput.classList.remove('invalido');
        lineaInput.classList.add('correcto');
    }
}

function validarSegundo_apellido(){
    var segundo_apellidoCorrecto=/^[A-Za-záéíóúÁÉÍÓÚüÜ]+$/.test(segundo_apellidoInput.value);
    var lineaInput = document.querySelector('.segundo_apellido-linea-input');
   
    if(segundo_apellidoInput.value === " "){
        segundo_apellidoError.textContent ="Por favor, introduzca el primer apellido";
        lineaInput.classList.add('invalido');
        lineaInput.classList.remove('correcto');
    }else if(!segundo_apellidoCorrecto){
        segundo_apellidoError.textContent ="El formato no es correcto";
        lineaInput.classList.add('invalido');
        lineaInput.classList.remove('correcto');
    }else{
        segundo_apellidoError.textContent =" ";
        lineaInput.classList.remove('invalido');
        lineaInput.classList.add('correcto');
    }
}

function validarEmail(){
    var emailCorrecto=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    var lineaInput = document.querySelector('.email-linea-input');

    if(emailInput.value === " "){
        emailError.textContent ="Por favor, introduzca un email";
        lineaInput.classList.add('invalido');
        lineaInput.classList.remove('correcto');
    }else if(!emailCorrecto){
        emailError.textContent ="El formato del email no es correcto";
        lineaInput.classList.add('invalido');
        lineaInput.classList.remove('correcto');
    }else{
        emailError.textContent =" ";
        lineaInput.classList.remove('invalido');
        lineaInput.classList.add('correcto');
    } 
}

function validarLogin(){
    var loginCorrecto=loginInput.value;
    var lineaInput = document.querySelector('.login-linea-input');

    if(loginInput.value === " "){
        loginError.textContent ="Por favor, introduzca un nombre de usuario";
        lineaInput.classList.add('invalido');
        lineaInput.classList.remove('correcto');
    }else if(!loginCorrecto){
        loginError.textContent ="El formato del email no es correcto";
        lineaInput.classList.add('invalido');
        lineaInput.classList.remove('correcto');
    }else{
        loginError.textContent =" ";
        lineaInput.classList.remove('invalido');
        lineaInput.classList.add('correcto');
    } 
}

function validarClave(){
    var claveCorrecto=/^.{4,8}$/.test(claveInput.value);
    var lineaInput = document.querySelector('.clave-linea-input');

    if(claveInput.value === " "){
        claveError.textContent ="Por favor, introduzca una contraseña";
        lineaInput.classList.add('invalido');
        lineaInput.classList.remove('correcto');
    }else if(!claveCorrecto){
        claveError.textContent ="El formato debe tener entre 4 y 8 caracteres";
        lineaInput.classList.add('invalido');
        lineaInput.classList.remove('correcto');
    }else{
        claveError.textContent =" ";
        lineaInput.classList.remove('invalido');
        lineaInput.classList.add('correcto');
    } 
}



document.getElementById('registro').addEventListener('submit', function(event){
    validaNombre();
    validarPrimer_apellido();
    validarSegundo_apellido();
    validarEmail();
    validarLogin();
    validarClave();
    if(!nombreError.textContent&& !primer_apellidoError.textContent
        && !segundo_apellidoError.textContent && !emailError.textContent && !loginError.textContent
        && !claveError.textContent){
        return;
    }
    event.preventDefault();
});
