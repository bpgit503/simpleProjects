console.log(Date.now());

let time = 10000000;

function timeToString(time) {
  let difInHrs = time / 3600000;
  let hh = Math.floor(difInHrs);

  let difInMin = (difInHrs - hh) * 60;
  let mm = Math.floor(difInMin);

  let difInSec = (difInMin - mm) * 60;
  let ss = Math.floor(difInSec);

  let difInMs = (difInSec - ss) * 100;
  let ms = Math.floor(difInMs);

  let formattedHH = hh.toString().padStart(2, "0");
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  console.log(`${formattedHH}:${formattedMM}:${formattedSS}`);

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

timeToString(time);

let playButton = document.getElementById("playIcon");
let pauseButton = document.getElementById("pauseIcon");
let resetButton = document.getElementById("resetIcon");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);

let startTime;
let elapsedTime = 0;
let timerInterval;

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToHide.style.display = "none";
  buttonToShow.style.display = "block";
}

function start() {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}

function pause() {
  clearInterval(timerInterval);

  showButton("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  showButton("PLAY");
}
