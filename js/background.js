const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;  // <img src="img/0.jpg" />

document.body.appendChild(bgImage);  // body에 img 태그 추가하기