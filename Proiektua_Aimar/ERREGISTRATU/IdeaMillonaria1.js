function A(){
    var usern = document.getElementById("user").value
    var namen = document.getElementById("name").value
    var surnn = document.getElementById("surname").value
    var corn = document.getElementById("correo").value
    var passcn = document.getElementById("txtpassword").value
    if (passcn == corn){
        location.assign("file:///C:/Users/AimarEsparzaG%C3%B3mez/Desktop/AQUI/PROIEKTUA_Eloy/home.html");
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