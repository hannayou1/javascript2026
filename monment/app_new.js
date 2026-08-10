const loginForm = document.querySelector("#login-form");

const loginInput =document.querySelector("#login-form input");

const link = document.querySelector("a");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); // 브라우저의 기본 동작을 막아줌. (새로고침 방지)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    console.log(username);
    printGreetings(username);
}


function printGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greeting
    printGreetings(savedUsername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}