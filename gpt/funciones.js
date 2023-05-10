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
    </main>
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
      <title>Eines Aula - Reloj (Temporizador)</title>
      <link rel="stylesheet" type="text/css" href="style.css">
      <script src="funciones.js"></script>
  </head>
  <body>
  <header>
      <h1>Eines Aula - Reloj (Temporizador)</h1>
      <button id="darkModeButton">Dark Mode</button>
  </header>

  <aside>
      <div class="options">
      <a class="button2" onclick="transformarHTMLReloj()">Reloj</a>
      <a class="button2 active" >Temporizador</a>
      <a class="button2" onclick="transformarHTMLCuentaAtras()">Cuenta Atrás</a>
      <a class="button2" onclick="transformarHTMLAlarma()">Alarma</a>
      <a class="button2" onclick="VolverMenu()">Menu Principal</a>
      </div>
  </aside>

  <main>
  </main>

  <script src="funciones.js"></script>
  </body>
  </html>
  `;
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

    <aside>
        <div class="options">
            <a class="button2 active">Ruleta (Circulo)</a>
            <a class="button2" onclick="transformarHTMLRuletaCasino()">Ruleta (Casino)</a>
            <a class="button2" onclick="VolverMenu()">Menu Principal</a>
        </div>
    </aside>

    <main>
    </main>

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

  <aside>
      <div class="options">
      <a class="button2" onclick="transformarHTMLRuleta()">Ruleta (Circulo)</a>
      <a class="button2 active" >Ruleta (Casino)</a>
      <a class="button2" onclick="VolverMenu()">Menu Principal</a>
      </div>
  </aside>

  <main>
  </main>

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