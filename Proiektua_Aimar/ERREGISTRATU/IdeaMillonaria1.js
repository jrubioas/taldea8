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

async function rows(){
  var Ida = await (await fetch('http://zubiriapi.duckdns.org:8000/select/SELECT count(*) FROM users/taldea8')).json()
  document.getElementById("tonto").innerHTML= Ida.item_id;
}










async function idak(){
  var gmail = document.getElementById("correo").value
  var pass = document.getElementById("txtpassword").value
  var uname = document.getElementById("name").value
  var surname = document.getElementById("surname").value
  var LEWSname = document.getElementById("user").value 
  var axid = 1111;
  var Ida = await (await fetch("http://zubiriapi.duckdns.org:8000/insert/insert into users values('" + axid + "','"+gmail+"','"+pass+"','"+uname+"','"+surname+"','"+LEWSname+"')/taldea8")).json();
  document.getElementById("tonto").innerHTML= Ida.item_id;
}



function enviar(){
  const p = url_img;
  console.log(p.replace('/', '-'));
}

function recibir(){
  const p = url_img;
  console.log(p.replace('-', '/'));
}



async function username(){

}

async function user_gmail(){
  
}

async function ekarriOrdua() {
  var username = document.getElementById("user").value
  var name = document.getElementById("name").value
  var surname = document.getElementById("surname").value
  var user_gmail = document.getElementById("correo").value
  var user_password = document.getElementById("txtpassword").value

  random()

  
}