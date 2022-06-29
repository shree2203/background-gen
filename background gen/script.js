var head = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2"); 
var body = document.getElementById("grad");

function setGrad(){
   body.style.background = "linear-gradient(to right, " +
                        col1.value + ", "+
                        col2.value + ")";
   head.textContent = body.style.background + ";";
}

col1.addEventListener("input", setGrad);
col2.addEventListener("input", setGrad);