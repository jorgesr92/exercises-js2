
let pauseSecond = 0;


function modifyCount(seconds){
  let count = seconds <= 9 ? `0${seconds}` : seconds;
  let h3Count = document.getElementById('timeRemaining');
  let stringCount = h3Count.textContent;
  let arrConter = stringCount.split(":");

  arrConter[arrConter.length-1] = count;
  stringCount = arrConter.toString().replace(/,/gi, ':');
  h3Count.innerText = stringCount;

  return seconds;
}

 

function countdown(timeAlarm, setButton){
  let id = setInterval(() => {
    timeAlarm = modifyCount(timeAlarm-1);
    pauseSecond = buttonPauseAlarm(id, timeAlarm);
    if (timeAlarm === 0) {
      playAlarm();
      setButton.disabled = false;
      clearInterval(id);
    }
  }, 1000);
}

 

function newButton(){
  const divCenter = document.querySelector('.centre');
  const divButton = document.createElement('div');
  const buttonPause = document.createElement('button');
  const br = document.createElement('br');
  buttonPause.innerText = 'Pause Alarm';
  buttonPause.id = 'pause';
  const buttonContinue = document.createElement('button')
  buttonContinue.innerText = 'Continue Alarm';
  buttonContinue.id = 'continue';
  buttonContinue.disabled = true;
  divCenter.appendChild(br);
  divCenter.appendChild(divButton);
  divButton.appendChild(buttonPause);
  divButton.appendChild(buttonContinue);
}

function buttonPauseAlarm(id, timeAlarm){
  const buttonP = document.getElementById('pause');
  buttonP.addEventListener('click',() =>{
    buttonP.disabled = true;
    document.getElementById('continue').disabled = false;
    clearInterval(id);
  })
  return timeAlarm;
}

if (document.getElementById("continue")) {
  document.getElementById("continue").addEventListener("click", () => {
    countdown(pauseSecond, setButton);
  });
}

function setAlarm() {
  let timeIn = document.getElementById('alarmSet').value;
  if (timeIn <= 0 || timeIn >= 60) {
    alert('Introduzca un número inferior a 60 segundos o superior a 0')
  } else{
    let setButton = document.getElementById('set');
    setButton.disabled = true;
    newButton();
    let timeAlarm = modifyCount(timeIn);
    countdown(timeAlarm, setButton);
  }
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
