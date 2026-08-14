# 나의 하루 (Momentum)

바닐라 자바스크립트로 만든 개인 대시보드입니다.

🔗 **배포 주소**: https://monment.vercel.app

## 기능

- ⏰ 실시간 시계 + 한국어 날짜
- 💬 랜덤 명언
- 👋 시간대별 인사말 (localStorage에 이름 저장)
- ✏️ 할 일 목록 (localStorage 저장)
- 🌤️ 현재 위치 날씨 — 동 이름까지 한국어로 표시
- 🖼️ 랜덤 배경 이미지 (Unsplash)

## 기술

- HTML / CSS / Vanilla JavaScript (프레임워크 없음)
- 글래스모피즘 디자인, 반응형 레이아웃
- OpenWeatherMap API + OpenStreetMap Nominatim 역지오코딩
- Vercel 서버리스 함수로 API 키 보호 (`api/weather.js`)

## 로컬 실행

1. `config.example.js`를 `config.js`로 복사
2. [OpenWeatherMap](https://openweathermap.org)에서 발급받은 API 키를 넣기
3. `index.html`을 브라우저로 열기

## 배포

`main` 브랜치에 push하면 Vercel이 자동으로 배포합니다.
API 키는 Vercel 환경 변수 `OWM_API_KEY`로 관리됩니다.
