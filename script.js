function clickNight() {
  document.getElementById("body").style.backgroundColor = "#100f0f";
  document.getElementById("body").style.Color = "white";
}
function clickSun() {
  document.getElementById("body").style.color = "black";
  document.getElementById("body").style.backgroundColor = "white";
}
var clicks = 0;
function selecto() {
  clicks = 0;
  document.getElementById("clicks").innerHTML = clicks;
}
function clickYes() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}
function clickNo() {
  clicks = 0;
  document.getElementById("clicks").innerHTML = clicks;
}
// night or sun
function Night() {
  //background
  document.getElementById("mrmge").style.backgroundColor = "black";
  //select element
  document.getElementById("selecto").style.backgroundColor = "black";
  document.getElementById("selecto").style.color = "white";
  //button 
  document.getElementById("butt").style.backgroundColor = "black";
  document.getElementById("butt").style.color = "white";
  document.getElementById("butt").style.border = "1px white solid";
  //number color
   document.getElementById("clicks").style.color = "White";
  //icons
  document.getElementById("night").style.display = "none";
  document.getElementById("sun").style.display = "inline";
}
function Sun() {
    //background
  document.getElementById("mrmge").style.backgroundColor = "white";
  //select element
  document.getElementById("selecto").style.backgroundColor = "white";
  document.getElementById("selecto").style.color = "black";
  //button 
  document.getElementById("butt").style.backgroundColor = "#E5E5E5";
  document.getElementById("butt").style.color = "black";
  document.getElementById("butt").style.border = "1px black solid";
  //number color
   document.getElementById("clicks").style.color = "black";
  //icons
  document.getElementById("night").style.display = "inline";
  document.getElementById("sun").style.display = "none";
}
