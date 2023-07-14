const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

function showGreeting(name){
    // form에 있는 class를 제거해서 안보이게하고 greeting요소를 보이게
    greeting.innerText = `안녕하세요 ${name}`;
}

function saveName(name) {
    localStorage.setItem("currentUser", name);
}


function handleSubmit(event) {
    event.preventDefault();
    const value = input.value;
    console.log(value);
    showGreeting(value);
    saveName(value);
}

function askForName() {
    form.addEventListener("submit", handleSubmit);
}


function loadName() {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser === null) {
        askForName();
    }
    else {
        showGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();
