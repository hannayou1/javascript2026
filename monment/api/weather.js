// Vercel 서버리스 함수 — 브라우저 대신 서버가 OpenWeatherMap을 호출합니다.
// API 키는 Vercel 환경 변수(OWM_API_KEY)에서 읽으므로 브라우저에 절대 노출되지 않아요.
module.exports = async (req, res) => {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        return res.status(400).json({ error: "lat, lon 쿼리 파라미터가 필요합니다" });
    }

    const key = process.env.OWM_API_KEY;
    if (!key) {
        return res.status(500).json({ error: "서버에 OWM_API_KEY 환경 변수가 설정되지 않았습니다" });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=kr`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        // 같은 좌표의 날씨는 10분간 캐시 (무료 요청 한도 절약)
        res.setHeader("Cache-Control", "s-maxage=600");
        return res.status(response.status).json(data);
    } catch (error) {
        return res.status(502).json({ error: "날씨 API 호출에 실패했습니다" });
    }
};
