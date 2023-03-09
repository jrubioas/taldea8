function A(){
    var usern = document.getElementById("user").value
    var passn = document.getElementById("pass").value
    var corn = document.getElementById("correo").value
    var passcn = document.getElementById("passc").value
    if (passcn == passn){
        location.assign("file:///C:/Users/AimarEsparzaG%C3%B3mez/Desktop/HTML/IDEA%20MILLONARIA/HASI%20SAIOA/IdeaMillonaria.html");
    }else{
        document.getElementById("a").innerHTML = "Las contraseñas no coinciden  ";
    }
}

function pasahitza(){
  var cambio = document.getElementById("txtpassword");
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
  $('#showpassword').click(function () {
    $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
  });
  });