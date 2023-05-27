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
  </head>
  <body>
      <header>
          <h1>Eines Aula - Reloj</h1>
          <button id="darkModeButton">Dark Mode</button>
      </header>
  
      <div class="einacontainer">
          <aside>
              <div class="options">
                  <a class="button2" onclick="VolverMenu()">Menu Principal</a>
              </div>
          </aside>
  
          <main>
              <div class="wrappers">
                  <div class="wrapper">
                      <h1 id="alarm-time" style="visibility: hidden;"></h1>
                      <div class="content">
                          <div class="column">
                              <select id="hour-select">
                                  <option value="Hour" selected disabled hidden>Hours</option>
                              </select>
                          </div>
                          <div class="column">
                              <select id="minute-select">
                                  <option value="Minute" selected disabled hidden>Minutes</option>
                              </select>
                          </div>
                          <div class="column">
                              <select id="ampm-select">
                                  <option value="AM/PM" selected disabled hidden>AM/PM</option>
                              </select>
                          </div>
                      </div>
                      <button id="set-alarm-btn" class="buttonreloj">Start Alarm</button>
                  </div>
                  <div class="wrapper">
                      <h1 id="temporizador-time" style="visibility: hidden;">00:00:00</h1>
                      <div class="content">
                          <div class="column2">
                              <select id="hour-select2">
                                  <option value="Hour" selected disabled hidden>Hours</option>
                              </select>
                          </div>
                          <div class="column2">
                              <select id="minute-select2">
                                  <option value="Minute" selected disabled hidden>Minutes</option>
                              </select>
                          </div>
                      </div>
                      <button id="start-timer-btn" class="buttonreloj">Start CountDown</button>
                  </div>
              </div>
              <h1 id="time-clock">RELOJ</h1>
          </main>
      </div>
  </body>
  </html>
  `;
var script = document.createElement('script');
script.src = 'clock.js';
document.body.appendChild(script);
}


function transformarHTMLRuleta() {
  document.body.innerHTML = `
  <!DOCTYPE html>
  <html>
  <head>
        <title>Eines Aula - Ruleta</title>
        <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
      <header>
          <h1>Eines Aula - Ruleta</h1>
          <button id="darkModeButton">Dark Mode</button>
      </header>
  
      <div class="einacontainer">
        <aside>
            <div class="options">
                <a class="button2" onclick="VolverMenu()">Menu Principal</a>
            </div>
        </aside>
  
        <main>
          <div class="mainruleta"></div>
          <button id="Girar" class="buttongirar">Spin</button>
          <div class="ruleton">
              <canvas id="Ruleta" width="600" height="600"></canvas>
          </div>
        </main>
      </div>
  </body>
  </html>
  `;
var script = document.createElement('script');
script.src = 'wheel.js';
document.body.appendChild(script);
}



function VolverMenu() {
  document.body.innerHTML = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Eines Aula</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <header>
      <h1>Eines Aula</h1>
      <button id="darkModeButton">Dark Mode</button>
    </header>
    <div class="container">
      <a class="button" onclick="transformarHTMLReloj()">Reloj</a>
      <a class="button" onclick="transformarHTMLRuleta()">Ruleta</a>
    </div>
  </body>
  </html>
  
  `;
}

