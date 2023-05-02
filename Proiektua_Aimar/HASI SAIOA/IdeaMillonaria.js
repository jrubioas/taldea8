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




async function HASI(){
  var esta = 0
  var usern = document.getElementById("user").value
  var eso = row[0].count
  if(usern.includes('@') == true & usern.includes('.') == true){
    var info = 1
    var user_gmail = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select user_gmail from users/taldea8")).json();
    for(n = 0; n < eso; n++){
      document.getElementById("c").innerHTML = "final"
      var hostia = user_gmail[n].user_gmail;
      if (hostia == gmail){
        var n = 99999
        document.getElementById("c").innerHTML = "dagoeneko kontu bat dago korreo onekin"
        //aqui hay q poner que ya esta usado
      }else{
        // esta correcto
        if( n+1 == eso ){
          document.getElementById("c").innerHTML = "de puta madre"
          var information = information + 1
          var a = a +1
        }
      }
    }
  }else{
    var info = 2
    var username = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select username from users/taldea8")).json();
    for(i = 0; i <= username.length; i++){
      var Elname = username[n].username;
      if (Elname == LEWSname){
        //aqui hay q poner que ya esta usado
        var i = 99999
        document.getElementById("u").innerHTML = "beste pertsona batek artu du dagoeneko"
      }else{
        if(i+1 == username.length){
          // esta correcto(dudas con el +1)
          document.getElementById("u").innerHTML = "de puta madre"
          var information = information + 1
        }
      }
    }
  }
  if(info == 1){
    //Hay que buscarlo en funcion del gmail
    var contra = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select password from users where user_gmail = "+usern+"/taldea8")).json();
  }else{
    if(info == 2){
      //hay q busccarlo en funcion del nombre de usuario
      var contra = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select password from users where username = "+usern+"/taldea8")).json();
    }else{
      //como cojones puede pasar esto, si esque es una perdida de tiempo poner esta opcion
    }
  }
  if( contra == usern){
    //todo bien
    const yo = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select user_id from users where user_gmail = "+usern+"/taldea8")).json();
  }
  document.getElementById("A").innerHTML = esta;
  
  var passcn = document.getElementById("txtpassword").value
  
}