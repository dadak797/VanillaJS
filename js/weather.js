const API_KEY = "7a62a2fa3858431e55e78444db6ebd62";

async function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    // const response = await fetch(url);
    // const data = await response.json();
    // const weather = document.querySelector("#weather span:first-child");
    // const city = document.querySelector("#weather span:last-child");
    // city.innerText = data.name;
    // weather.innerText = data.weather[0].main;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

console.log(navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError));