function recibir(){
  const p = url_img;
  console.log(p.replace('-', '/'));
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
  var url_img = "https://images.musement.com/cover/0002/52/thumb_151722_cover_header.jpeg"
  
  const p = url_img;
  console.log(p.replace('/', '-'));
  
  var Eloy = await (await fetch("http://zubiriapi.duckdns.org:8000/insert/insert into post values ('1234','0','1',"+url_img+",'2222')/taldea8")).json();
  document.getElementById("demasiado").innerHTML= Eloy.item_id;
}
var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};