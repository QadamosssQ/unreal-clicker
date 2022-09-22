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


