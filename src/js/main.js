



let plus=1;

function clickCounter() {




       if (localStorage.clickcount) {
           localStorage.clickcount = Number(localStorage.clickcount) + plus;
       } else {
           localStorage.clickcount = 1;
       }


    show();
}
show();



//! dev points
//--------------------------------------------------------------------------------
let dev_add_points = document.getElementsByClassName("title_game");

function add_points() {
localStorage.clickcount+= 1000;
show();
}

function show(){
    if(localStorage.clickcount===undefined){
        localStorage.clickcount=0;
    }
    document.getElementById("conter").innerHTML = "Punkty: "+ localStorage.clickcount;
}


//--------------------------------------------------------------------------------

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

if (localStorage.getItem("x2p")==="true") {
        plus*=2
        x2p_bool = true;
        x2p.style.backgroundColor = "rgb(255, 255, 255)";
        x2p.style.color = "rgb(0, 0, 0)";
        console.log("x2p: active");
        show();
        active_bonus[0].innerHTML += "<li>Double click: active</li>";
}
if (localStorage.getItem("x3p")==="true") {
        plus*=3;
        x3p_bool = true;
        x3p.style.backgroundColor = "rgb(255, 255, 255)";
        x3p.style.color = "rgb(0, 0, 0)";
        console.log("x3p: active");
        show();
        active_bonus[0].innerHTML += "<li>Triple click: active</li>";
}
if (localStorage.getItem("auto5s")==="true") {
        auto5s_bool = true;
        auto5s.style.backgroundColor = "rgb(255, 255, 255)";
        auto5s.style.color = "rgb(0, 0, 0)";
        console.log("auto5s: active");
        show();
        active_bonus[0].innerHTML += "<li>Auto click-5s: active</li>";
}
if (localStorage.getItem("auto3s")==="true") {
        auto3s_bool = true;
        auto3s.style.backgroundColor = "rgb(255, 255, 255)";
        auto3s.style.color = "rgb(0, 0, 0)";
        console.log("auto3s: active");
        show();
        active_bonus[0].innerHTML += "<li>Auto click-3s: active</li>";
}
if (localStorage.getItem("auto1s")==="true") {
        auto1s_bool = true;
        auto1s.style.backgroundColor = "rgb(255, 255, 255)";
        auto1s.style.color = "rgb(0, 0, 0)";
        console.log("auto1s: active");
        show();
        active_bonus[0].innerHTML += "<li>Auto click-1s: active</li>";
}


function x2p_go_active(bool){
    if(bool===true){
        alert("Już aktywny!");
    }else {
    if(localStorage.clickcount >= 100){
    localStorage.clickcount -= 100;
    plus*=2
    x2p_bool=true;
    x2p.style.backgroundColor = "rgb(255, 255, 255)";
    x2p.style.color = "rgb(0, 0, 0)";
    console.log("x2p: active");
    show();
    active_bonus[0].innerHTML += "<li>Double click: active</li>";
    localStorage.setItem("x2p","true")
}else{
    alert("Nie masz wystarczającej ilości punktów!");
     }
}
}




function x3p_go_active() {
    if (x3p_bool === true) {
        alert("Już aktywny!");
    } else {
        if (localStorage.clickcount >= 300) {
            localStorage.clickcount -= 300;
            plus*=3;
            x3p_bool = true;
            x3p.style.backgroundColor = "rgb(255, 255, 255)";
            x3p.style.color = "rgb(0, 0, 0)";
            console.log("x3p: active");
            show();
            active_bonus[0].innerHTML += "<li>Triple click: active</li>";
            localStorage.setItem("x3p","true")
        } else {
            alert("Nie masz wystarczającej ilości punktów!");
        }
    }
}
function auto5s_go_active(){
    if (auto5s_bool === true) {
        alert("Już aktywny!");
    } else {
        if (localStorage.clickcount >= 150) {

            localStorage.clickcount -= 150;
            auto5s_bool = true;
            auto5s.style.backgroundColor = "rgb(255, 255, 255)";
            auto5s.style.color = "rgb(0, 0, 0)";
            console.log("auto5s: active");
            show();
            active_bonus[0].innerHTML += "<li>Auto click-5s: active</li>";
            localStorage.setItem("auto5s","true")
        } else {
            alert("Nie masz wystarczającej ilości punktów!");
        }
    }

}


function auto3s_go_active() {
    if (auto3s_bool === true) {
        alert("Już aktywny!");
    } else {
        if (localStorage.clickcount >= 200) {
            localStorage.clickcount -= 200;
            auto3s_bool = true;
            auto3s.style.backgroundColor = "rgb(255, 255, 255)";
            auto3s.style.color = "rgb(0, 0, 0)";
            console.log("auto3s: active");
            show();
            active_bonus[0].innerHTML += "<li>Auto click-3s: active</li>";
            localStorage.setItem("auto3s","true")
        } else {
            alert("Nie masz wystarczającej ilości punktów!");
        }
    }
}
function auto1s_go_active() {
    if (auto1s_bool === true) {
        alert("Już aktywny!");
    } else {

        if (localStorage.clickcount >= 400) {
            localStorage.clickcount -= 400;
            auto1s_bool = true;
            auto1s.style.backgroundColor = "rgb(255, 255, 255)";
            auto1s.style.color = "rgb(0, 0, 0)";
            console.log("auto1s: active");
            show();
            active_bonus[0].innerHTML += "<li>Auto click-1s: active</li>";
            localStorage.setItem("auto1s","true")
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


function clear_ls(){

        let text = "Czy napewno chcesz usunąć wszystkie punkty i bonusy?\n Nie odzyskasz tego";
        if (confirm(text) === true) {
            localStorage.clear();
            console.log("cleared");
            show();
            document.location.reload()
            clickCounter();
        } else {
            alert("cancelled")
        }




}

// show_time()




//async timer in console

 
// let i=0;


//async timer in console
// async function hello() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     i++;
//     console.log(i);
//     hello();
// }























