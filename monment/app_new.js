const loginForm = document.querySelector("#login-form");

const loginInput =document.querySelector("#login-form input");

const link = document.querySelector("a");


function onLoginSubmit(tomato){
    tomato.preventDefault(); // 브라우저의 기본 동작을 막아줌. (새로고침 방지)
    // const usename = loginInput.value;
    console.log(loginInput.value);

}

function handleLinkClick(event){
    event.preventDefault(); // 브라우저의 기본 동작을 막아줌. (새로고침 방지)
    console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);


