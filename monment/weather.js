const API_KEY = "08e82e957f75a0bfe6452e8d9f44c84e";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in" , lat , lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    console.log(url);
    fetch(url).then( (response) => response.json())
    .then(data => {
        const icon = document.querySelector("#weather img");
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weather.innerText = `${Math.round(data.main.temp)}° ${data.weather[0].description}`;
        city.innerText = data.name; // 일단 영문 이름으로 표시
    });

    // OpenStreetMap 역지오코딩으로 한국어 지역명 가져오기 (무료, API 키 불필요)
    const geoUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=ko&zoom=14`;
    fetch(geoUrl)
        .then(res => res.json())
        .then(geo => {
            const a = geo.address;
            const cityName = a.city || a.town || a.province || "";      // 예: 서울특별시
            const district = a.borough || a.suburb || a.county || "";   // 예: 중구
            const koreanName = `${cityName} ${district}`.trim();
            if (koreanName) {
                document.querySelector("#weather span:last-child").innerText = koreanName;
            }
        })
        .catch(() => {}); // 실패해도 영문 이름 유지
}

function onGeoError () {
    alert("위치 정보를 가져올 수 없어요. 위치 접근을 허용해주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoOk ,onGeoError);
