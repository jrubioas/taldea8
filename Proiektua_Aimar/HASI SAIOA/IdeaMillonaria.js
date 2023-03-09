function A(){
    var usern = document.getElementById("user").value
    var passn = document.getElementById("pass").value
    if (usern == passn){
        location.assign("https://www.w3schools.com");
    }else{
        document.getElementById("a").innerHTML = "TONTO";
    }
}

function mostrarPassword(){
  var cambio = document.getElementById("pasahitza");
  if(cambio.type == "password"){
    cambio.type = "text";
    $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
  }else{
    cambio.type = "password";
    $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
  }
} 

$(document).ready(function () {
//CheckBox mostrar contraseña
$('#ShowPassword').click(function () {
  $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
});
});

function mostrarPassword(){
  var cambio = document.getElementById("pasahitza_confirm");
  if(cambio.type == "password"){
    cambio.type = "text";
    $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
  }else{
    cambio.type = "password";
    $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
  }
} 

$(document).ready(function () {
//CheckBox mostrar contraseña
$('#ShowPassword').click(function () {
  $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
});
});