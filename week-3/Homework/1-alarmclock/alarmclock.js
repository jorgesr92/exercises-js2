function setAlarm() {
  let timeIn = document.getElementById('alarmSet').value;
  let h3Counter = document.getElementById('timeRemaining');
  let stringCounter = h3Counter.textContent;
  let arrConter = stringCounter.split(":");

  arrConter[arrConter.length-1] = timeIn;
  stringCounter = arrConter.toString().replace(/,/gi, ':');
  h3Counter.innerText = stringCounter;

}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
