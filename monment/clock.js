const clock = document.querySelector("h2#clock");
const dateEl = document.querySelector("#date");

clock.innerText = "00:00:00";

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    dateEl.innerText = date.toLocaleDateString("ko-KR", {
        month: "long",
        day: "numeric",
        weekday: "long",
    });
}

getClock();
setInterval(getClock, 1000); // 1초마다 getClock 함수 실행