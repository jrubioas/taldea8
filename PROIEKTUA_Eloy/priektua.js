
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
  location.assign("file:///C:/Users/EloyGarc%C3%ADaMor%C3%A1n/Desktop/js/PROIEKTUA_Eloy/perfil_.html")
}
async function ekarriOrdua() {
  var data = await (await fetch('http://zubiriapi.duckdns.org:8000/select/select * from users/taldea8')).json()
  document.getElementById("ordua").innerHTML= data.item_id;
}