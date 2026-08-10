const imagaes = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
];

const chosenImage = imagaes[Math.floor(Math.random() * imagaes.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);