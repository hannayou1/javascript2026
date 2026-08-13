// Unsplash 고해상도 풍경 이미지 (API 키 불필요)
const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80", // 눈 덮인 산맥
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80", // 안개 낀 산
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80", // 햇살 비치는 숲
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80", // 열대 해변
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80", // 별이 빛나는 밤의 산
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80", // 호수의 노을
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80", // 아침 들판
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = chosenImage;

// 이미지가 다 로드되면 부드럽게 나타나기
bgImage.addEventListener("load", () => bgImage.classList.add("loaded"));

// 인터넷이 안 되면 로컬 이미지로 대체
bgImage.addEventListener("error", () => {
    bgImage.src = `img/${Math.floor(Math.random() * 3)}.jpg`;
});

document.body.appendChild(bgImage);
