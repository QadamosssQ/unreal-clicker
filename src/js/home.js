const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});



function onGlove() {
    let on= document.getElementById("ha1");
        on.style.textShadow = "0 0 5px #fff, 0 0 20px #fff, 0 0 20px";
 }
 function offGlove() {
    let off= document.getElementById("ha1");
        off.style.textShadow = "none";
 }
 