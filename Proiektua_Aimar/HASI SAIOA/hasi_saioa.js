function A(){
  var usern = document.getElementById("user").value
  var passcn = document.getElementById("txtpassword").value
  if (passcn == usern){
      location.assign("file:///C:/Users/AimarEsparzaG%C3%B3mez/Desktop/AQUI/PROIEKTUA_Eloy/home.html");
  }else{
      document.getElementById("a").innerHTML = "Las contraseñas no coinciden  ";
  }
}
function pasahitza(){
  var passcn = document.getElementById("txtpassword");
  if(passcn.type == "password"){
    passcn.type = "text";
    $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
  }else{
    passcn.type = "password";
    $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
  }  
} 
  
  $(document).ready(function () {
  //CheckBox mostrar contraseña
  $('#showpassword').click(function () {
    $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
  });
  });
