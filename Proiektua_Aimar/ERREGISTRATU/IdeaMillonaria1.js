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

function random(){
  id = console.log(getRandomInt(9999));
}

async function IDak(){
  var pass = document.getElementById("txtpassword").value
  for( n = 0; n <= pass.length; n++){
    if (typeof pass[n] == "string"){
      document.getElementById("com1").innerHTML= "letra lo detecta";
      var nose = nose + 0.5
      if (nose < 1){
        var tiene = tiene + 0.5
      }
    }else{
      if (isNaN(pass[n]) == false){
        document.getElementById("com").innerHTML= "numero lo detecta";
        var sise = sise + 0.5
        if (sise < 1){
          var tiene = tiene + 0.5
        }
      }
    }
  }
  if (pass.length >= 8){
    if (tiene == 1){
      document.getElementById("tonto").innerHTML= "oso ondo";
    }else{
      document.getElementById("tonto").innerHTML= "gutxienez letra bat eta zenbaki bat izan behar du";
    }
  }else{
    document.getElementById("notonto").innerHTML= "motzegia da";
  }

}

async function username(){

}

async function user_gmail(){
  
}


async function ERREGISTRATU(){
  var gmail = document.getElementById("correo").value
  var user_gmail = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select user_gmail from users/taldea8")).json();
  if(gmail.includes('@') == true & gmail.includes('.') == true){
    return
  }else{
    var n = 99999
  }
  for(n = 0; n <= user_gmail.length; n++){
  var hostia = user_gmail[n].user_gmail;
    if (hostia == gmail){
      var n = 99999
    }else{
      if(n+1 == user_gmail.length){
      }
    } 
  }
  var row = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select count(*) from users/taldea8")).json();
  var axid = 1111 + (row[0].count);
  var pass = document.getElementById("txtpassword").value
  var uname = document.getElementById("name").value
  var surname = document.getElementById("surname").value
  var LEWSname = document.getElementById("user").value 
  var Ida = await (await fetch("http://zubiriapi.duckdns.org:8000/insert/insert into users values('" + axid + "','"+gmail+"','"+pass+"','"+uname+"','"+surname+"','"+LEWSname+"')/taldea8")).json();
  document.getElementById("tonto").innerHTML= Ida.item_id;
}



async function ekarriOrdua() {
  var username = document.getElementById("user").value
  var name = document.getElementById("name").value
  var surname = document.getElementById("surname").value
  var user_gmail = document.getElementById("correo").value
  var user_password = document.getElementById("txtpassword").value

  random()

  
}