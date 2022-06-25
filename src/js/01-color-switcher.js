const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let timerId = null;

function onStartColorClick() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  if (timerId) {
    startButton.disabled = true;
    stopButton.disabled = false;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButton.addEventListener('click', onStartColorClick);
stopButton.addEventListener('click', onStopButtonClick);
