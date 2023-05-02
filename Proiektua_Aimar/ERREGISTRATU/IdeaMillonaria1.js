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
 
  $(document).ready(function(){
  //CheckBox mostrar contraseña
  $('#showpassword').click(function () {
    $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
  });
  });



async function ERREGISTRATU(){
  var information = 0
  var a = 0

  var row = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select count(*) from users/taldea8")).json();
  var axid = 1111 + (row[0].count);
  var information = information + 1


  var gmail = document.getElementById("correo").value
  var user_gmail = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select user_gmail from users/taldea8")).json();
  var eso = row[0].count
  if(user_gmail.length == 0){
    //ez dagoenez informaziorik ez dago arazorik
    if(gmail.includes('@') == true & gmail.includes('.') == true){
      document.getElementById("c").innerHTML = "de puta madre"
      var information = information + 1
    }else{
      document.getElementById("c").innerHTML = "mesedez ondo idatzi gmaila"
    }
  }else{
    if(gmail.includes('@') == true & gmail.includes('.') == true){
      for(n = 0; n < eso; n++){
        document.getElementById("c").innerHTML = "final"
        var hostia = user_gmail[n].user_gmail;
        if (hostia == gmail){
          document.getElementById("c").innerHTML = "dagoeneko kontu bat dago korreo onekin"
          var n = 99999
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
      document.getElementById("c").innerHTML = "mesedez ondo idatzi gmaila"
    }
  }




  var pass = document.getElementById("txtpassword").value
  var tiene = 0
  var sise = 0
  var nose = 0
  for( n = 0; n <= pass.length; n++){
    if (!isNaN(pass[n])){
        var sise = sise + 0.5
        if (sise < 1){
          var tiene = tiene + 0.5
        }
    }else{
      if (typeof pass[n] == "string"){
        var nose = nose + 0.5
        if (nose < 1){
          var tiene = tiene + 0.5
        }
      }
    }
  }
  if (pass.length >= 8){
    if (tiene == 1){
      //buenas caracteristicas
      document.getElementById("p").innerHTML = "de puta madre"
      var information = information + 1
    }else{
      document.getElementById("p").innerHTML = "gutxienez letra eta zenbaki bat behar du"
      //falta o letra o numero
    }
  }else{
    document.getElementById("p").innerHTML = "motzegia da"
    //es demasiado corto
  }


  var uname = document.getElementById("name").value
  var surname = document.getElementById("surname").value
  var information = information + 1
  var information = information + 1
 

  var LEWSname = document.getElementById("user").value
  var username = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select username from users/taldea8")).json();
  if(username.length == 0){
    //ez dagoenez informaziorik datu basean ondo dago
    var information = information + 1
  }else{
    for(n = 0; n < eso; n++){
      document.getElementById("c").innerHTML = "final"
      var hostia = username[n].username;
      if (hostia == LEWSname){
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
  }
  
  
  if(information == 6){
    var Erregistatu = await (await fetch("http://zubiriapi.duckdns.org:8000/insert/insert into users values('" + axid + "','"+gmail+"','"+pass+"','"+uname+"','"+surname+"','"+LEWSname+"')/taldea8")).json();
    var begiratu = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select * from users where user_id = "+axid+" /taldea8")).json();
    if (begiratu[0].user_id == axid & begiratu[0].user_gmail == gmail & begiratu[0].user_password == pass & begiratu[0].name == uname & begiratu[0].surname == surname & begiratu[0].username == LEWSname){
      document.getElementById("q").innerHTML = "Ondo erregistratu da"
    }else{
      document.getElementById("q").innerHTML = "1Arazoren bat dago erregistratzeko"
    }
  }else{
    document.getElementById("q").innerHTML = a+"Arazoren bat dago erregistratzeko"
  }
}








async function HASI(){
  var row = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select count(*) from users/taldea8")).json();
  var usern = document.getElementById("user").value
  var eso = row[0].count
  if(usern.includes('@') == true & usern.includes('.') == true){
    var info = 1
    var user_gmail = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select user_gmail from users/taldea8")).json();
    for(n = 0; n < eso; n++){
      var hostia = user_gmail[n].user_gmail;
      if (hostia == gmail){
        var n = 99999
        document.getElementById("c").innerHTML = "Ondo"
        //si esta en la base de datos
      }else{
        // no esta en la base de datos
        if( n+1 == eso ){
          document.getElementById("c").innerHTML = "Ez aurkituta"
          var a = a +1
        }
      }
    }
  }else{
    var info = 2
    var username = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select username from users/taldea8")).json();
    for(i = 0; i < eso; i++){
      var Elname = username[i].username;
      if (Elname == usern){
        //si esta en la base de datos
        var i = 99999
        document.getElementById("uc").innerHTML = "ondo"
      }else{
        if(i+1 == username.length){
          //no esta en la base de datos
          document.getElementById("uc").innerHTML = "Ez aurkituta"
        }
      }
    }
  }



  if(info == 1){
    //Hay que buscarlo en funcion del gmail
    var contran = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select user_password from users where user_gmail = '"+usern+"'/taldea8")).json();
  }else{
    if(info == 2){
      //hay q busccarlo en funcion del nombre de usuario
      var contran = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select user_password from users where username = '"+usern+"'/taldea8")).json();
    }else{
      //como cojones puede pasar esto, si esque es una perdida de tiempo poner esta opcion
    }
  }

  var contra = contran[0].user_password
  var pass = document.getElementById("txtpassword").value
  var eso = row[0].count
  if( contra == pass){
    //todo bien
    var yon = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select user_id from users where user_gmail = '"+usern+"'/taldea8")).json();
    const yo = yon[0].user_id
    document.getElementById("cc").innerHTML = "Dena ondo"
  }else{
    document.getElementById("h").innerHTML = "Contraseina edo usuarioa gaizki dago"
  }
  const prueva = 1 
}


//hay q hacer q se actualice cada 30s mas menos
async function POST(){
  var row = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select count(*) from post/taldea8")).json();
  var eso = row[0].count

  for(var l = 0; l < eso; l++){
    var oido = 1111 + l 
    var likes = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select post_like from post where post_id = '"+oido+"'/taldea8")).json();
    let lili = []
    lili.push(likes[0].post_like)
  }

  var body = document.getElementsByTagName("body")[0]
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");
  for (var i = 0; i < 2; i++) {
    var hilera = document.createElement("tr");
    for (var j = 0; j < 2; j++) {
      if ( i == 0){
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("hay que hacer que aqui ponga la img");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        var j = 9999
      }else{
        var celda = document.createElement("td");
        
        var textoCelda = document.createTextNode("tonto");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
    }
    tblBody.appendChild(hilera);
  }
  tabla.appendChild(tblBody);
  body.appendChild(tabla);
  tabla.setAttribute("border", "2"); 
}