function setAlarm() {
  let timeIn = document.
  let h3Counter = document.getElementById('timeRemaining');
  let stringCounter = h3Counter.textContent;
  let arrConter = stringCounter.split(":");
  console.log(stringCounter);
  console.log(arrConter[arrConter.length-1]);

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
