const url_string = window.location.href;
const url = new URL(url_string);
const index = url.searchParams.get("displayIndex");
const isPrimary = url.searchParams.get("isPrimary");
const displayWidth = url.searchParams.get("displayWidth");


let indexEl = document.getElementById("index");
indexEl.innerHTML = parseInt(index) + 1;
if (isPrimary == "true") {
  document.getElementById("isPrimary").innerHTML = "Primary";
}



// var tope = url.searchParams.get("top");
// var left = url.searchParams.get("left");
// document.getElementById("top").innerHTML = "Offset top: " + tope;
// document.getElementById("left").innerHTML = "Offset left: " + left;