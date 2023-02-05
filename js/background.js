const images = [
    "Barbell.jpeg",
    "ComboRack.jpeg",
    "Dumbell.jpeg",
    "Plate10.jpeg",
    "Plate15.jpeg",
    "Plate20.jpeg",
    "Plate25.jpeg",
    "PowerRack.jpeg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;  // <img src="img/0.jpg" />

document.body.appendChild(bgImage);  // body에 img 태그 추가하기