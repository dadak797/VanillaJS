const today = document.querySelector("h1#today");
const clock = document.querySelector("h2#clock");

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getToday() {
    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = String(todayDate.getMonth() + 1).padStart(2, "0");
    const date = String(todayDate.getDate()).padStart(2, "0");
    today.innerText = `${year}. ${month}. ${date}.`;
} 


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getToday();
setInterval(getToday, 1000);

getClock();
setInterval(getClock, 1000);