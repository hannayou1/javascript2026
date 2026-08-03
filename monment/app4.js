// const hellos = document.querySelectorAll(".hello h1");
const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";    
}


function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOOOD");
}


title.addEventListener("click", handleTitleClick);
title.addEventListener  ("mouseenter", handleMouseEnter);
title.addEventListener  ("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", handleWindowCopy)

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);