const images = [
    "WeightLifting-Main0.jpg",
    "WeightLifting-Main1.jpg",
    "WeightLifting-Main2.jpg",
    "WeightLifting-Main3.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.id = "bgImage";

document.body.appendChild(bgImage);  // body에 img 태그 추가하기