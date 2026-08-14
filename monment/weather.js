// 배포(Vercel)에서는 서버리스 함수 /api/weather를 호출 → API 키가 브라우저에 노출되지 않음
// 로컬에서 파일로 직접 열었을 때만 config.js의 API_KEY로 직접 호출 (config.js는 git 제외)

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in" , lat , lon);
    const isLocalFile = location.protocol === "file:";
    const url = (isLocalFile && typeof API_KEY !== "undefined")
        ? `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
        : `/api/weather?lat=${lat}&lon=${lon}`;
    console.log(url);
    // OpenStreetMap 역지오코딩으로 한국어 지역명 가져오기 (무료, API 키 불필요)
    // zoom=16 → 동 단위까지 상세하게 받아옴
    const geoUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=ko&zoom=16`;

    const weatherPromise = fetch(url).then(res => res.json());
    const geoPromise = fetch(geoUrl).then(res => res.json()).catch(() => null); // 실패해도 날씨는 표시

    // 두 응답이 모두 도착한 뒤 한 번만 화면에 그리기 (덮어쓰기 방지)
    Promise.all([weatherPromise, geoPromise]).then(([data, geo]) => {
        const icon = document.querySelector("#weather img");
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weather.innerText = `${Math.round(data.main.temp)}° ${data.weather[0].description}`;

        let placeName = data.name; // 기본값: 영문 이름
        if (geo && geo.address) {
            const a = geo.address;
            // 예: 서울특별시 → 서울
            const cityName = (a.city || a.town || a.province || "")
                .replace(/(특별시|광역시|특별자치시|특별자치도)$/, "");
            const district = a.borough || a.city_district || a.county || "";          // 예: 중구
            const dong = a.suburb || a.quarter || a.neighbourhood || a.village || ""; // 예: 필동
            const koreanName = [cityName, district, dong].filter(Boolean).join(" ");
            if (koreanName) placeName = koreanName;
        }
        city.innerText = placeName;
    });
}

function onGeoError () {
    alert("위치 정보를 가져올 수 없어요. 위치 접근을 허용해주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoOk ,onGeoError);
