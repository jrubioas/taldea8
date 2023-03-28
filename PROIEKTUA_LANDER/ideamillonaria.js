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
const fotos = [ "output1","output2","output3","output4","output5","output6"]
i = 0;
var loadFile = function(event) {
  var image = document.getElementById(fotos[i]);
	image.src = URL.createObjectURL(event.target.files[0]);
  i = i+1;
};

async function masunolike(post) {
 //update post set post_like = post_like + 1 where post_id = post
}

function U(){
  location.assign("file:///C:/Users/LanderEsnalAlzugaray/Desktop/GIT/PROIEKTUA_LANDER/editperfil.html")
}