const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    seconds = (seconds<10) ? `0${seconds}` : seconds;
     clockTitle.innerText = `${hours}:${minutes}:${seconds}`;

}


getTime();
setInterval(getTime, 1000);

