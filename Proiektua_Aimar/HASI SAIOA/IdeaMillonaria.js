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




async function HASI(){
  var esta = 0
  var usern = document.getElementById("user").value
  var user_gmail = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select user_gmail from users/taldea8")).json();
  for(n = 0; n <= user_gmail.length; n++){
    var hostia = user_gmail[n].user_gmail;
    if (hostia == usern){
      var n = 99999
      var esta = esta + 1
    }else{
      if(n+1 == user_gmail.length){
        document.getElementById("a").innerHTML = "joder";
      }
    } 
  }
  var username = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select%20username%20from%20users/taldea8")).json();
  for(n = 0; n <= username.length; n++){
    var hostia = username[n].username;
    if (hostia == usern){
      var n = 99999
      var esta = esta + 1
    }else{
      if(n+1 == username.length){
        var esta = esta +2
      }
    } 
  }
  document.getElementById("A").innerHTML = esta;
  
  var passcn = document.getElementById("txtpassword").value
}