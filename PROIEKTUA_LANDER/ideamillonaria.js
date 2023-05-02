function loadPage() {

  var element = document.body;
  var element2 = document.getElementById("btn_open");
  var element3 = document.getElementById("mySidebar");
  var element4 = document.getElementById("username");
  var element5 = document.getElementById("headerdiv");
  var element6 = document.getElementById("table2_");


  if (localStorage.getItem("mode") == "dark") {

    element.classList.add("dark-mode");
    if(element2 != null){
      element2.classList.add("dark-mode");
    }
    if(element3 != null){
      element3.classList.add("dark-mode");
    }
   
    if(element4 != null){
      element4.classList.add("dark-mode");
    }
    if(element5 != null){
      element5.classList.add("dark-mode");
    }
    if(element6 != null){
      element6.classList.add("dark-mode");
    }
  } else {
    element.classList.remove("dark-mode");
    element2.classList.remove("dark-mode");
    element3.classList.remove("dark-mode");
    element4.classList.remove("dark-mode");
    element5.classList.remove("dark-mode");
    if(element6 != null){
      element6.classList.remove("dark-mode");
    }
  }

  //images
  var listimg = ["darklighticon.png", "fotoperfil.jpg", "home.png" , "lews.jpg" , "igstory2.png" , "addimage.png" , "add_image.png" , "flecha.png"];
  var listid = ["dark_light", "foto_perfil", "home" , "logo_1", "story1" , "add_image" , "addimage2" , "flecha"];
  for (let i = 0; i < listimg.length; i++) {
    try {
      var a1 = "img/" + localStorage.getItem("mode") + "/" + listimg[i];
      var image = document.getElementById(listid[i]);
      image.src = a1;
    } catch (error) {
      
    }

    
  }

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

async function masunolike(post) {
  //update post set post_like = post_like + 1 where post_id = post
}

function U() {
  location.assign("file:///C:/Users/LanderEsnalAlzugaray/Desktop/GIT/PROIEKTUA_LANDER/editperfil.html")
}

// MODO OSCURO/CLARO

function darkLight() {

  if (localStorage.getItem("mode") != "dark") {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }

  loadPage();

}

//COOKIES

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let button = document.querySelector(".like-btn");
let icon = document.querySelector(".like_icon");

button.addEventListener("click", ()=>{
  button.classList.toggle("active");
  if(button.classList.contains("active")){
    createClones(button);
  }
});

function randomNum(min, max) {
  return Math.floor(Math.random()*(max- min + 1 )+ min);
}

function negativePositve() {
  return Math.random() <0.5 ? -1 : 1;
}

function createClones(button) {
  let numberOfClones = randomNum(2, 4);

  for(let i=1; i<= numberOfClones; i++) {
    let clone = icon.cloneNode(true);
    let size = randomNum(8, 20);
    button.appendChild(clone);
    clone.setAttribute("width", size);
    clone.setAttribute("height", size);
    clone.classList.add("clone");
    clone.style.transform = 
    "translate(" + 
    negativePositve() * randomNum(15, 30) + "px," +
    negativePositve() * randomNum(15, 30) + "px)";

    let removeNode = setTimeout(() =>{
      button.removeChild(clone);
      clearTimeout(removeNode);
    }, 800);
  }
}

//funcion pa las fts

const outputid = ["output1","output2","output3","output4","output5","output6"]

async function R(){
  
  var row = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select count(*) from post/taldea8")).json();
  var phid = 1111 + (row[0].count);
  var yo = 1111;
  
  var url_img = document.getElementById("homepage").value;
  var  p = url_img;
  console.log(p.replace('-', '/'));
  var Eloy = await (await fetch("http://zubiriapi.duckdns.org:8000/insert/insert into post values ('"+phid+"','0','0','"+p+"','"+yo+"')/taldea8")).json();

  console.log(p.replace('/', '-'));
  var img = await (await fetch("http://zubiriapi.duckdns.org:8000/select/select img from post where user_id = '"+yo+"'/taldea8")).json();

  document.getElementById("myImg").src = url_img;

}