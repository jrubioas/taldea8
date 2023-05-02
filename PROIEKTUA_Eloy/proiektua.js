function recibir(){

}
function openNav() {
  if (document.getElementById("main").style.marginLeft == "0px" || document.getElementById("main").style.marginLeft == "") {
    document.getElementById("btn_open").innerHTML = "X";
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  } else {
    document.getElementById("btn_open").innerHTML = "☰";
    document.getElementById("mySidebar").style.width = 0;
    document.getElementById("main").style.marginLeft = 0;
  }
}
function U(){
  location.assign("file:///C:/Users/EloyGarc%C3%ADaMor%C3%A1n/Desktop/Git/PROIEKTUA_Eloy/editperfil_.html")
}
async function bidali() {
  
}
var loadFile = function(event) {
	var image = documpolnment.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};
async function R(){
  
  var row = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select count(*) from post/taldea8")).json();
  var phid = 1111 + (row[0].count);
  var yo = 1111;
  
  var url_img = document.getElementById("link").value;
  var  p = url_img;
  console.log(p.replace('-', '/'));
  var Eloy = await (await fetch("http://zubiriapi.duckdns.org:8000/insert/insert into post values ('"+phid+"','0','0','"+p+"','"+yo+"')/taldea8")).json();
  console.log(p.replace('/', '-'));
  var img = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select img from post where user_id = '"+yo+"'/taldea8")).json();

  document.getElementById("myImg").src = url_img;

}

async function P(){
  var yo = 1111;

  var like = await (await fetch("http://zubiriapi.duckdns.org:8000/insert/update post set post_like = post_like + 1 where user_id = '"+yo+"' /taldea8")).json();
  document.getElementById("like").innerHTML=like

}

async function M(){
  var row = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select count(*) from post/taldea8")).json();
  var commentid = 1111 + (row[0].count);
  var postid = 1111 + (row[0].count);

  var comment = document.getElementById("comment").value;
  var comment_ = await (await fetch("http://zubiriapi.duckdns.org:8000/insert/insert into post values("+commentid+", "+postid+",'0','1111',"+comment+" )/taldea8")).json();

}