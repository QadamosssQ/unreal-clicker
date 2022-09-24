function onGlove() {
   let on= document.getElementById("ha1");
       on.style.textShadow = "0 0 5px #fff, 0 0 20px #fff, 0 0 20px";
}
function offGlove() {
   let off= document.getElementById("ha1");
       off.style.textShadow = "none";
}
















let  counter = 0;

let dev_add_points = document.getElementsByClassName("title_game");

function add_points() {
counter = counter + 1000000000;
}

let counter_button = document.getElementById("buttonB");

counter_button.addEventListener("click", function counting() {

    counter++;
    let count = document.getElementById("conter").innerHTML = "Punkty: "+ counter;
});






let x2p = document.getElementById("x2p");
let x3p = document.getElementById("x3p");
let auto5s = document.getElementById("auto5s");
let auto3s = document.getElementById("auto3s");
let  auto1s = document.getElementById("auto1s");



let x2p_bool=false;
let x3p_bool=false;
let auto5s_bool=false;
let auto3s_bool=false;
let auto1s_bool=false;

let active_bonus = document.getElementsByClassName("ul_add-ons");

function x2p_go_active(){
    if(x2p_bool==true){
        alert("Już aktywny!");
    }else {
    if(counter >= 1){
    counter= counter - 1;
    x2p_bool=true;
    x2p.style.backgroundColor = "rgb(255, 255, 255)";
    x2p.style.color = "rgb(0, 0, 0)";
    console.log("x2p: active");
    let count = document.getElementById("conter").innerHTML = "Punkty: "+ counter;
    active_bonus[0].innerHTML += "<li>Double click: active</li>";
}else{
    alert("Nie masz wystarczającej ilości punktów!");
     }
}
}




function x3p_go_active() {
    if (x3p_bool == true) {
        alert("Już aktywny!");
    } else {
        if (counter >= 300) {
            counter = counter - 300;
            x3p_bool = true;
            x3p.style.backgroundColor = "rgb(255, 255, 255)";
            x3p.style.color = "rgb(0, 0, 0)";
            console.log("x3p: active");
            let count = document.getElementById("conter").innerHTML = "Punkty: " + counter;
            active_bonus[0].innerHTML += "<li>Triple click: active</li>";
        } else {
            alert("Nie masz wystarczającej ilości punktów!");
        }
    }
}
function auto5s_go_active(){
    if (auto5s_bool == true) {
        alert("Już aktywny!");
    } else {
        if (counter >= 150) {

            counter = counter - 150;
            auto5s_bool = true;
            auto5s.style.backgroundColor = "rgb(255, 255, 255)";
            auto5s.style.color = "rgb(0, 0, 0)";
            console.log("auto5s: active");
            let count = document.getElementById("conter").innerHTML = "Punkty: " + counter;
            active_bonus[0].innerHTML += "<li>Auto click-5s: active</li>";
        } else {
            alert("Nie masz wystarczającej ilości punktów!");
        }
    }

}


function auto3s_go_active() {
    if (auto3s_bool == true) {
        alert("Już aktywny!");
    } else {
        if (counter >= 200) {
            counter = counter - 200;
            auto3s_bool = true;
            auto3s.style.backgroundColor = "rgb(255, 255, 255)";
            auto3s.style.color = "rgb(0, 0, 0)";
            console.log("auto3s: active");
            let count = document.getElementById("conter").innerHTML = "Punkty: " + counter;
            active_bonus[0].innerHTML += "<li>Auto click-3s: active</li>";
        } else {
            alert("Nie masz wystarczającej ilości punktów!");
        }
    }
}
function auto1s_go_active() {
    if (auto1s_bool == true) {
        alert("Już aktywny!");
    } else {

        if (counter >= 400) {
            counter = counter - 400;
            auto1s_bool = true;
            auto1s.style.backgroundColor = "rgb(255, 255, 255)";
            auto1s.style.color = "rgb(0, 0, 0)";
            console.log("auto1s: active");
            let count = document.getElementById("conter").innerHTML = "Punkty: " + counter;
            active_bonus[0].innerHTML += "<li>Auto click-1s: active</li>";
        } else {
            alert("Nie masz wystarczającej ilości punktów!");
        }
    }
}





x2p.addEventListener("click", function x2p_true() {

    // check if x2p has value=true



    if(x2p.value === "false"){
        x2p.value = "true";
        x2p.style.backgroundColor = "rgb(255, 255, 255)";
        x2p.style.color = "rgb(0, 0, 0)";
        console.log("x2p: true");

    }



});







function times() {


    let local_date = new Date();

    let time_hours = local_date.getHours();
    let time_minutes = local_date.getMinutes();
    let time_seconds = local_date.getSeconds();


    if(time_hours ===21 && time_minutes === 37 && time_seconds === 0){
        alert("papież!")
    }


    let time = document.getElementById("timer").innerHTML = "Czas: " + time_hours + ":" + time_minutes + ":" + time_seconds;
}


function show_time(){
    setInterval(times, 1000);

}



// show_time()






























