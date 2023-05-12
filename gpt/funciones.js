document.body.addEventListener('click', function(event) {
  if (event.target.id === 'darkModeButton') {
    toggleDarkMode();
  }
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function transformarHTMLReloj() {
  document.body.innerHTML = `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Eines Aula - Reloj</title>
      <link rel="stylesheet" type="text/css" href="style.css">
      <script src="funciones.js"></script>
  </head>
  <body>
    <header>
        <h1>Eines Aula - Reloj</h1>
        <button id="darkModeButton">Dark Mode</button>
    </header>

    <div id="container">
    <aside>
        <div class="options">
            <a class="button2 active">Reloj</a>
            <a class="button2" onclick="transformarHTMLTemporizador()">Temporizador</a>
            <a class="button2" onclick="transformarHTMLCuentaAtras()">Cuenta Atrás</a>
            <a class="button2" onclick="transformarHTMLAlarma()">Alarma</a>
            <a class="button2" onclick="VolverMenu()">Menu Principal</a>
        </div>
    </aside>

    <main>
      <h4 class="hora-exacta">Hora Exacta</h4>
      <h2 id="clock" class="clock"></h2>
      <h3 class="hora-exacta" id="date"></h3>
      
    </main>

    </div>

    <script src="funciones.js"></script>
  </body>
  </html>
  `;
}
function transformarHTMLTemporizador() {
  document.body.innerHTML = `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Eines Aula - Temporizador</title>
      <link rel="stylesheet" type="text/css" href="style.css">
      <script src="funciones.js"></script>
  </head>
  <body>
  <header>
      <h1>Eines Aula - Temporizador</h1>
      <button id="darkModeButton">Dark Mode</button>
  </header>

  <div id="container">
  <aside>
      <div class="options">
      <a class="button2" onclick="transformarHTMLReloj()">Reloj</a>
      <a class="button2 active">Temporizador</a>
      <a class="button2 onclick="transformarHTMLCuentaAtras()"">Cuenta Atrás</a>
      <a class="button2" onclick="transformarHTMLAlarma()">Alarma</a>
      <a class="button2" onclick="VolverMenu()">Menu Principal</a>
      </div>
  </aside>
  <main>
    <div id="digitalClock" class="digital-clock"></div>
    <div id="timerContainer" class="timer-container">
      <input id="finishTimeInput" type="text" placeholder="Finish Time (hh:mm am/pm)">
      <input id="remainingTimeInput" type="text" placeholder="Time Remaining (hh:mm:ss)">
      <button id="startTimerButton" onclick="startTimer()">Start Timer</button>
      <button id="stopTimerButton" onclick="stopTimer()">Stop Timer</button>
      <audio id="alarmSound" src=""></audio>
    </div>
  </main>
  </div>

  <script src="funciones.js"></script>
  </body>
  </html>
  `;
}

// New functions for the countdown timer tool
let timerInterval;
let alarmAudio = document.getElementById('alarmSound');
let finishTimeInput = document.getElementById('finishTimeInput');
let remainingTimeInput = document.getElementById('remainingTimeInput');

function startTimer() {
  if (finishTimeInput.value) {
    startTimerByFinishTime();
  } else if (remainingTimeInput.value) {
    startTimerByRemainingTime();
  }
}

function startTimerByFinishTime() {
  let finishTime = parseTime(finishTimeInput.value);
  if (finishTime !== null) {
    let currentTime = getCurrentTime();
    let remainingTime = calculateRemainingTime(currentTime, finishTime);
    if (remainingTime > 0) {
      displayTime(remainingTime);
      timerInterval = setInterval(updateTimer, 1000);
    } else {
      alert("El temps especificat ja ha passat.");
    }
  } else {
    alert("Format d'hora incorrecte. Utilitza el format hh:mm am/pm.");
  }
}

function startTimerByRemainingTime() {
  let remainingTime = parseTime(remainingTimeInput.value);
  if (remainingTime !== null) {
    displayTime(remainingTime);
    timerInterval = setInterval(updateTimer, 1000);
  } else {
    alert("Format de temps restant incorrecte. Utilitza el format hh:mm:ss.");
  }
}

function parseTime(timeString) {
  let timePattern = /^(\d{1,2}):(\d{2})(?::(\d{2}))?(?:\s([ap]m))?$/i;
  let match = timeString.match(timePattern);
  if (match) {
    let hours = parseInt(match[1]);
    let minutes = parseInt(match[2]);
    let seconds = match[3] ? parseInt(match[3]) : 0;
    let ampm = match[4] ? match[4].toLowerCase() : "";
    if (hours >= 1 && hours <= 12 && minutes >= 0 && minutes <= 59 && seconds >= 0 && seconds <= 59) {
      if (ampm === "pm" && hours !== 12) {
        hours += 12;
      } else if (ampm === "am" && hours === 12) {
        hours = 0;
      }
      let currentTime = getCurrentTime();
      let parsedTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), hours, minutes, seconds);
      return parsedTime;
    }
  }
  return null;
}

function getCurrentTime() {
  return new Date();
}

function calculateRemainingTime(currentTime, finishTime) {
  return finishTime.getTime() - currentTime.getTime();
}

function displayTime(time) {
  let hours = Math.floor(time / (60 * 60 * 1000));
  let minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((time % (60 * 1000)) / 1000);
  let timerContainer = document.getElementById("timerContainer");
  timerContainer.innerHTML = `
    <div id="timer" class="timer">
      <div class="time">${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}</div>
      <button id="stopTimerButton" onclick="stopTimer()">Stop Timer</button>
    </div>
  `;
}

function updateTimer() {
  let currentTime = getCurrentTime();
  let finishTime = parseTime(finishTimeInput.value);
  let remainingTime = calculateRemainingTime(currentTime, finishTime);
  if (remainingTime > 0) {
    displayTime(remainingTime);
  } else {
    stopTimer();
    playAlarmSound();
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}

function playAlarmSound() {
  // You can customize the alarm sound here
  alarmAudio.src = "alarm_sound.mp3";
  alarmAudio.play();
}

function transformarHTMLCuentaAtras() {
  document.body.innerHTML = `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Eines Aula - Reloj (Cuenta Atras)</title>
      <link rel="stylesheet" type="text/css" href="style.css">
      <script src="funciones.js"></script>
  </head>
  <body>
  <header>
      <h1>Eines Aula - Reloj (Cuenta Atras)</h1>
      <button id="darkModeButton">Dark Mode</button>
  </header>

  <div id="container">
  <aside>
      <div class="options">
      <a class="button2" onclick="transformarHTMLReloj()">Reloj</a>
      <a class="button2" onclick="transformarHTMLTemporizador()">Temporizador</a>
      <a class="button2 active">Cuenta Atrás</a>
      <a class="button2" onclick="transformarHTMLAlarma()">Alarma</a>
      <a class="button2" onclick="VolverMenu()">Menu Principal</a>
      </div>
  </aside>
  <main>
  </main>
  </div>

  <script src="funciones.js"></script>
  </body>
  </html>
  `;
}
function transformarHTMLAlarma() {
  document.body.innerHTML = `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Eines Aula - Reloj (Alarma)</title>
      <link rel="stylesheet" type="text/css" href="style.css">
      <script src="funciones.js"></script>
  </head>
  <body>
  <header>
      <h1>Eines Aula - Reloj (Alarma)</h1>
      <button id="darkModeButton">Dark Mode</button>
  </header>

  <div id="container">
  <aside>
      <div class="options">
      <a class="button2" onclick="transformarHTMLReloj()">Reloj</a>
      <a class="button2" onclick="transformarHTMLTemporizador()">Temporizador</a>
      <a class="button2" onclick="transformarHTMLCuentaAtras()">Cuenta Atrás</a>
      <a class="button2 active">Alarma</a>
      <a class="button2" onclick="VolverMenu()">Menu Principal</a>
      </div>
  </aside>
  <main>
  </main>
  </div>

  <script src="funciones.js"></script>
  </body>
  </html>
  `;
}



function transformarHTMLRuleta() {
  document.body.innerHTML = `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Eines Aula - Ruleta</title>
      <link rel="stylesheet" type="text/css" href="style.css">
      <script src="funciones.js"></script>
  </head>
  <body>
    <header>
        <h1>Eines Aula - Ruleta (Circulo)</h1>
        <button id="darkModeButton">Dark Mode</button>
    </header>

    <div id="container">
    <aside>
        <div class="options">
            <a class="button2 active">Ruleta (Circulo)</a>
            <a class="button2" onclick="transformarHTMLRuletaCasino()">Ruleta (Casino)</a>
            <a class="button2" onclick="VolverMenu()">Menu Principal</a>
        </div>
    </aside>

    <main>
    </main>
    </div>

    <script src="funciones.js"></script>
  </body>
  </html>
  `;
}
function transformarHTMLRuletaCasino() {
  document.body.innerHTML = `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Eines Aula - Ruleta (Casino)</title>
      <link rel="stylesheet" type="text/css" href="style.css">
      <script src="funciones.js"></script>
  </head>
  <body>
  <header>
      <h1>Eines Aula - Ruleta (Casino)</h1>
      <button id="darkModeButton">Dark Mode</button>
  </header>

  <div id="container">
  <aside>
      <div class="options">
      <a class="button2" onclick="transformarHTMLRuleta()">Ruleta (Circulo)</a>
      <a class="button2 active" >Ruleta (Casino)</a>
      <a class="button2" onclick="VolverMenu()">Menu Principal</a>
      </div>
  </aside>
  <main>
  </main>
  </div>

  <script src="funciones.js"></script>
  </body>
  </html>
  `;
}



function VolverMenu() {
  document.body.innerHTML = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Eines Aula - Menu Principal</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="funciones.js"></script>
  </head>
  <body>
    <header>
      <h1>Eines Aula - Menu Principal</h1>
      <button id="darkModeButton">Dark Mode</button>
    </header>
    <div class="container">
      <a class="button" onclick="transformarHTMLReloj()">Reloj</a>
      <a class="button" onclick="transformarHTMLRuleta()">Ruleta</a>
    </div>

    <script src="funciones.js"></script>
  </body>
  </html>  
  `;
}

//Reloj
function updateClock() {
  const clockElement = document.getElementById('clock');
  const dateElement = document.getElementById('date');

  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const currentTime = new Date().toLocaleTimeString('en-US', options);
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  clockElement.textContent = currentTime;
  dateElement.textContent = `${currentDate}`;
}
setInterval(updateClock, 1000);



