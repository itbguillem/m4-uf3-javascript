const temporizadorTime = document.querySelector("#temporizador-time");
const alarmTimeLeft = document.querySelector("#alarm-time");


const timeLeft = document.querySelector("#time-clock")


const hourSelect1 = document.querySelector("#hour-select");
const minuteSelect1 = document.querySelector("#minute-select");
const ampmSelect1 = document.querySelector("#ampm-select");
const setAlarmBtn = document.querySelector("#set-alarm-btn");

const hourSelect2 = document.querySelector("#hour-select2");
const minuteSelect2 = document.querySelector("#minute-select2");
const startTimerBtn = document.querySelector("#start-timer-btn");

let timerIntervalTemp;
let remainingTimeTemp;

const ringtone = new Audio("./files/ringtone.mp3");


// VALORES ALARMA
for (let i = 12; i > 0; i--) {
i = i < 10 ? `0${i}` : i;
let option = `<option value="${i}">${i}</option>`;
hourSelect1.insertAdjacentHTML("beforeend", option);
}
for (let i = 59; i >= 0; i--) {
i = i < 10 ? `0${i}` : i;
let option = `<option value="${i}">${i}</option>`;
minuteSelect1.insertAdjacentHTML("beforeend", option);
}
for (let i = 2; i > 0; i--) {
let ampm = i == 1 ? "AM" : "PM";
let option = `<option value="${ampm}">${ampm}</option>`;
ampmSelect1.insertAdjacentHTML("beforeend", option);
}

// VALORES TEMPORIZADOR
for (let i = 23; i >= 0; i--) {
i = i < 10 ? `0${i}` : i;
let option = `<option value="${i}">${i}</option>`;
hourSelect2.insertAdjacentHTML("beforeend", option);
}
for (let i = 59; i >= 0; i--) {
i = i < 10 ? `0${i}` : i;
let option = `<option value="${i}">${i}</option>`;
minuteSelect2.insertAdjacentHTML("beforeend", option);
}




//RELOJ y TIMER
setInterval(() => {
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

timeLeft.innerText = `${h}:${m}:${s}`;
}, 1000);


// ALARMA
// ALARMA
const setAlarmButton = document.getElementById("set-alarm-btn");
let alarmInterval = null;
let isAlarmSet = false;

setAlarmButton.addEventListener("click", toggleAlarm);

function toggleAlarm() {
    if (isAlarmSet) {
    stopAlarm();
    } else {
    startAlarm();
    }
}

function startAlarm() {
    const hourSelect = document.getElementById("hour-select");
    const minuteSelect = document.getElementById("minute-select");
    const ampmSelect = document.getElementById("ampm-select");
    const selectedHour = parseInt(hourSelect.value);
    const selectedMinute = parseInt(minuteSelect.value);
    const selectedAMPM = ampmSelect.value;

    const now = new Date();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    const currentAMPM = currentHour < 12 ? "AM" : "PM";

    if (currentAMPM == selectedAMPM) {
    currentHour = (currentHour + 12) % 24;
    }

    let remainingMinutes = 0;
    if (
    selectedHour > currentHour ||
    (selectedHour === currentHour && selectedMinute > currentMinute)
    ) {
    remainingMinutes =
        (selectedHour - currentHour) * 60 + (selectedMinute - currentMinute);
    } else {
    remainingMinutes =
        (24 + selectedHour - currentHour) * 60 + (selectedMinute - currentMinute);
    }

    startCountdown(remainingMinutes);
    setAlarmButton.innerText = "Stop Alarm";
    isAlarmSet = true;
}

function stopAlarm() {
    clearInterval(alarmInterval);
    const countdownElement = document.getElementById("alarm-time");
    countdownElement.textContent = "";
    countdownElement.style.visibility = "hidden";
    setAlarmButton.innerText = "Start Alarm";
    isAlarmSet = false;
}

function startCountdown(remainingMinutes) {
    const countdownElement = document.getElementById("alarm-time");

    // Calculate the end time based on the current time and remaining minutes
    const endTime = new Date(Date.now() + remainingMinutes * 60 * 1000);

    // Update the countdown every second
    alarmInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
    const now = new Date();
    const timeDifference = endTime - now;

    // Check if the countdown has finished
    if (timeDifference <= 0) {
        clearInterval(alarmInterval);
        countdownElement.textContent = "¡Alarma finalizada!";
        // Play the alarm sound here
        return;
    }

    // Calculate the remaining hours, minutes, and seconds
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    countdownElement.style.visibility = "visible";

    // Format the countdown string
    const countdownString = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // Replace the content of the countdown element
    countdownElement.textContent = countdownString;
    }
}









// TEMPORIZADOR
function startTimer() {
    if (timerIntervalTemp) {
        clearInterval(timerIntervalTemp);
        startTimerBtn.innerText = "Start CountDown";
        timerIntervalTemp = null;
        remainingTimeTemp = null;
    } else {
        let hours = parseInt(hourSelect2.value);
        let minutes = parseInt(minuteSelect2.value);
        let seconds = 0;

        if (isNaN(hours) ||  isNaN(minutes) || isNaN(seconds) ||
        hours < 0 || hours > 23 ||
        minutes < 0 || minutes > 59 ||
        seconds < 0 || seconds > 59
        ) {
        return alert("Por favor, seleccione una duración válida para el temporizador.");
        }
        let totalSeconds =
            hours * 3600 +
            minutes * 60 +
            seconds;

            remainingTimeTemp = totalSeconds;

        startTimerBtn.innerText = "Stop CountDown";

        timerIntervalTemp = setInterval(updateTimer, 1000);
    }
}

// ACTUALIZACION TEMPORIZADOR
function updateTimer() {
    if (remainingTimeTemp <= 0) {
        clearInterval(timerIntervalTemp);
        ringtone.play();
        ringtone.loop = true;
        startTimerBtn.innerText = "Start CountDown";
        timerIntervalTemp = null;
        remainingTimeTemp = null;
        } else {
        let hours = Math.floor(remainingTimeTemp / 3600);
        let minutes = Math.floor((remainingTimeTemp % 3600) / 60);
        let seconds = remainingTimeTemp % 60;

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        temporizadorTime.style.visibility = "visible"
        temporizadorTime.innerText = `${hours}:${minutes}:${seconds}`;
        
        remainingTimeTemp--;
    }
}

startTimerBtn.addEventListener("click", startTimer);