


// part 1 homework

let blueButton = document.querySelector('#blueBtn');
let orangeButton = document.querySelector('#orangeBtn');
let greenButton = document.querySelector('#greenBtn');

let blueColors = [`#588fbd`, `#ffa500`, `black`];
let orangeColors = [`#f0ad4e`, `#5751fd`, `#31b0d5`];
let greenColors = [`#87ca8a`, `black`, `#8c9c08`];

function changeBgdColor(colorOfButton){
    let colors = [];
    colorOfButton === 'blue'? colors = blueColors : colorOfButton === 'orange' ? colors = orangeColors : colors = greenColors;
    let divJumbotron = document.querySelector('.jumbotron');
    divJumbotron.style.backgroundColor = colors[0];
    let buttonOfDonate = document.querySelectorAll('.buttons a');
    buttonOfDonate.forEach(button => buttonOfDonate[0] === button ? button.style.backgroundColor = colors[1]: button.style.backgroundColor = colors[2]);
}

function clickOnBlue(){
    changeBgdColor('blue');
}
function clickOnOrange(){
    changeBgdColor('orange');
}
function clickOnGreen(){
    changeBgdColor('green');
}

blueButton.addEventListener('click', clickOnBlue);
orangeButton.addEventListener('click', clickOnOrange);
greenButton.addEventListener('click', clickOnGreen);