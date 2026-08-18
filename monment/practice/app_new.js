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


// 시간대에 따라 다른 인사말 돌려주기
function getGreetingMessage(){
    const hour = new Date().getHours();
    if (hour < 6)  return "고요한 새벽이에요 🌙";
    if (hour < 12) return "좋은 아침이에요 ☀️";
    if (hour < 18) return "활기찬 오후예요 🌿";
    return "편안한 저녁이에요 ✨";
}

function printGreetings(username){
    greeting.innerText = "";
    const nameSpan = document.createElement("span");
    nameSpan.className = "greeting-name";
    nameSpan.innerText = username;
    greeting.append(getGreetingMessage() + " ");
    const line2 = document.createElement("small");
    line2.className = "greeting-line2";
    line2.append(nameSpan, "님, 오늘도 응원해요");
    greeting.appendChild(line2);
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