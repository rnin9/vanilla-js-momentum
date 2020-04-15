const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const USER_LS ="currentUser",
SHOWING_CN="showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText =`Hello ${text}`;
}
function handleSubmit(event){
    event.preventDefault(); //이벤트 막기.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser !==null){
      paintGreeting(currentUser);
    } else {
        askForName();
    }
}
function init(){
    loadName();
}

init();