
let startTime, elapsedTime = 0, timerInterval;

const display = document.getElementById('display'),
      startStopButton = document.getElementById('startStop'),
      resetButton = document.getElementById('reset'),
      lapButton = document.getElementById('lap'),
      lapsList = document.getElementById('lapsList');

const timeToString = time => new Date(time).toISOString().substr(11, 8);

const print = txt => display.textContent = txt;

const start = () => {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => print(timeToString(elapsedTime = Date.now() - startTime)), 1000);
    startStopButton.textContent = "Pause";
};

const pause = () => {
    clearInterval(timerInterval);
    startStopButton.textContent = "Start";
};

const reset = () => {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    startStopButton.textContent = "Start";
    lapsList.innerHTML = "";
};

const lap = () => {
    const lapItem = document.createElement('li');
    lapItem.textContent = timeToString(elapsedTime);
    lapsList.appendChild(lapItem);
};

startStopButton.onclick = () => startStopButton.textContent === "Start" ? start() : pause();
resetButton.onclick = reset;
lapButton.onclick = lap;