
const countDownDateTime =  new Date(2023,5,1,0,0,0).getTime();
const daysValue = document.querySelector("#days");
const hoursValue = document.querySelector("#hours");
const minutesValue = document.querySelector("#minutes");
const secondsValue = document.querySelector("#seconds");

let x = setInterval(function(){
    const dateTimeNow = new Date().getTime();
    let difference = countDownDateTime - dateTimeNow;

    daysValue.innerHTML = Math.floor(difference /(1000 * 60 * 60 * 24));
    hoursValue.innerHTML = Math.floor(difference % (1000 * 60 * 60 * 24)/(1000 * 60 * 60));
    minutesValue.innerHTML = Math.floor(difference %(1000 * 60 * 60)/(1000 * 60));
    secondsValue.innerHTML = Math.floor(difference %(1000 * 60 )/1000);

    if(difference < 0){
        clearInterval(x);
    }
},1000);
