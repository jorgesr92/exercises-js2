


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


// part 2 Homework

let submitButton = document.querySelector('.row div form button');
let formEmail = document.getElementById('exampleInputEmail1');
let emailText;
let formName = document.getElementById('example-text-input');
let nameText;
let formDescribe = document.getElementById('exampleTextarea');
let describeText;
let errorsCounter = 0;

function validationText(text){   
    return text.length > 0 ? true : false;
}

function validationAt(email){
    console.log(`validation at: ${email}`);
    return email.split('').includes('@') ? true : false;
}

function borderOK(){
    formEmail.style.border = '1px solid rgba(0,0,0,.15)';
    document.getElementById('exampleInputEmail1').value = "";
    formName.style.border = '1px solid rgba(0,0,0,.15)';
    document.getElementById('example-text-input').value = "";
    formDescribe.style.border = '1px solid rgba(0,0,0,.15)';
    document.getElementById('exampleTextarea').value = "";
}

function checkAll(){
    let atPresent = validationAt(emailText) ? true : false;
    let isEmailTextPresent = validationText(emailText) ? true : false;
    atPresent && isEmailTextPresent ? console.log("Email OK") : formEmail.style.border = '1px solid red';
    let namePresent = validationText(nameText) ? true : false;
    namePresent ? console.log("Name OK") : formName.style.border = '1px solid red';
    let describePresent = validationText(describeText) ? true : false;
    describePresent ? console.log("Describe OK") : formDescribe.style.border = '1px solid red'
    let isAllOK = atPresent && isEmailTextPresent && namePresent && describePresent ? true : false;
    isAllOK ? borderOK() : console.log('Hay Errores!');
    return isAllOK;
}

function alertOk(){
    emailText = formEmail.value;
    nameText = formName.value;
    describeText = formDescribe.value;
    let allOK = checkAll() ? true: false;
    allOK ? alert(`Muchas gracias ${nameText} por registrate!!`) : errorsCounter ++;
    errorsCounter === 3 ? seriousAlert() : console.log(`Error, ¡${errorsCounter}º aviso!`);
    return allOK
}

function seriousAlert(){
    alert(`Error, ¡${errorsCounter}º aviso! \nPara añadir un párrafo ES NECESARIO QUE INTRODUZCAS TEXTO EN EL FORMULARIO! \nGracias.`);
    errorsCounter = 0;
}

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    alertOk();
},true);
