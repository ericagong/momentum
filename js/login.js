const loginForm = document.querySelector("#login-form"); // querySelector(.class type#id);
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { 
    event.preventDefault(); // prevent default behavior of any event
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName); // localStorage API set, get, remove item with key on browser   
    
    displayGreetings(userName);
}

function displayGreetings(userName) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add("all");
    greeting.innerText = `Hello ${userName}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); // All functions in event listener are called by JS.
} else {
    displayGreetings(savedUserName);
}


