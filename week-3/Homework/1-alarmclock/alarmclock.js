
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
    document.getElementById("continue").disabled = true;
    document.getElementById('pause').disabled = false;
    buttonPauseAlarm(id);
    if (timeAlarm === 0) {
      playAlarm();
      setButton.disabled = false;
      document.getElementById('divButton').remove();
      document.querySelector('body').style.backgroundColor = 'cyan';
      clearInterval(id);
    }
  }, 1000);
}

 
function newButton(){
  const divCenter = document.querySelector('.centre');
  const divButton = document.createElement('div');
  divButton.id = 'divButton';
  const buttonPause = document.createElement('button');
  const br = document.createElement('br');
  buttonPause.innerText = 'Pause Alarm';
  buttonPause.id = 'pause';
  const buttonContinue = document.createElement('button')
  buttonContinue.innerText = 'Continue Alarm';
  buttonContinue.id = 'continue';
  buttonContinue.disabled = true;
  divCenter.appendChild(divButton);
  divButton.appendChild(br);
  divButton.appendChild(buttonPause);
  divButton.appendChild(buttonContinue);
}

function buttonPauseAlarm(id){
  const buttonP = document.getElementById('pause');
  buttonP.addEventListener('click',() =>{
    buttonP.disabled = true;
    document.getElementById('continue').disabled = false;
    clearInterval(id);
  })
}

function buttonContinueAlarm(setButton){
  document.getElementById("continue").addEventListener("click", () => {
    let h3Count = document.getElementById('timeRemaining');
    let stringCount = h3Count.textContent;
    let arrConter = stringCount.split(":");
    let pauseSecond = parseInt(arrConter[arrConter.length-1]);
    countdown(pauseSecond, setButton);
  });
}

function setAlarm() {
  let setButton = document.getElementById('set');
  let timeIn = parseInt(document.getElementById('alarmSet').value);
  let timeAlarm = 0;
  if (timeIn <= 0 || timeIn >= 60) {
    alert('Introduzca un número inferior a 60 segundos o superior a 0')
  } else{
    timeAlarm = modifyCount(timeIn);
    setButton.disabled = true;
    newButton();
    countdown(timeAlarm, setButton);
  }
  if (timeAlarm > 0){
    buttonContinueAlarm(setButton)
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
    document.querySelector('body').style.backgroundColor = 'white';
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
