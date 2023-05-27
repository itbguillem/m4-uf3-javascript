async function NombresDesdeArchivo() {
  try {
    const response = await fetch('names.txt');
    const text = await response.text();
    return text.split('\n');
  } catch (err) {
    console.error('Error fetching names:', err);
    return [];
  }
}
let names = [];

const canvas = document.getElementById('Ruleta');
const ruleta = canvas.getContext('2d');
const radioRuleta = canvas.width / 2;
let currentRotation = 0;
const goofySound = new Audio('./sound.mp3');
let currentSound = null;

function drawSegment(name, index, totalSegments) {
  const angle = (2 * Math.PI) / totalSegments;
  const startAngle = index * angle;
  const endAngle = (index + 1) * angle;

  ruleta.beginPath();
  ruleta.moveTo(radioRuleta, radioRuleta);
  ruleta.arc(radioRuleta, radioRuleta, radioRuleta, startAngle, endAngle);
  ruleta.closePath();
  ruleta.fillStyle = index % 2 === 0 ? '#009092' : '#007c7d';
  ruleta.fill();
  ruleta.stroke();

  ruleta.save();
  ruleta.translate(radioRuleta, radioRuleta);
  ruleta.rotate((startAngle + endAngle) / 2);
  ruleta.fillStyle = '#fff';
  ruleta.font = '18px Arial';
  ruleta.textAlign = 'right';
  ruleta.fillText(name, radioRuleta - 10, 0);
  ruleta.restore();
}

function drawWheel() {
  ruleta.clearRect(0, 0, canvas.width, canvas.height);

  const totalSegments = names.length;
  names.forEach((name, index) => {
    drawSegment(name, index, totalSegments);
  });
}

function pickName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

function spinWheel() {
    const wheel = document.getElementById('Ruleta');
    const spinButton = document.getElementById('Girar');

    spinButton.disabled = true;

    const randomRotations = 25 + Math.floor(Math.random(5,10) * 3);
    const totalRotation = randomRotations * 360 + Math.floor(Math.random() * 360);

    wheel.style.transition = 'transform 3s ease-in-out';
    wheel.style.transform = `rotate(${totalRotation}deg)`;

    if (currentSound) {
      currentSound.pause();
    }
    currentSound = goofySound;
    currentSound.play();

    setTimeout(() => {
        spinButton.disabled = false;

        const winner = pickName();

        alert(`The winner is: ${winner}`);
    }, 3000);
}

  (async function init() {
    names = await NombresDesdeArchivo();
    if (names.length === 0) {
      alert('Error fetching names. Please make sure "noms.txt" is available.');
      return;
    }

    drawWheel();

    const Girar = document.getElementById('Girar');
    Girar.addEventListener('click', spinWheel);
  }
 )()
;


