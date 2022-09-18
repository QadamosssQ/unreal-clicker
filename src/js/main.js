function onGlove() {
   let on= document.getElementById("ha1");
       on.style.textShadow = "0 0 5px #fff, 0 0 20px #fff, 0 0 20px";
}
function offGlove() {
   let off= document.getElementById("ha1");
       off.style.textShadow = "none";
}

let  counter = 0;

function counting() {
    counter++;
    let count = document.getElementById("conter").innerHTML = "Punkty: "+ counter;
}

