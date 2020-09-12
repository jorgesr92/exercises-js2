


// part 1 homework

//declaracion de variables

let blueButton = document.querySelector('#blueBtn');
let orangeButton = document.querySelector('#orangeBtn');
let greenButton = document.querySelector('#greenBtn');

let paletaDeColores = {
    blue:{
        jumbotron : `#588fbd`,
        donate : `#ffa500`,
        volunteer : {
            background : 'black',
            text : 'white'
        }
    },
    orange:{
        jumbotron : `#f0ad4e`,
        donate : `#5751fd`,
        volunteer : {
            background : '#31b0d5',
            text : 'white'
        }
    },
    green:{
        jumbotron : `#87ca8a`,
        donate : `black`,
        volunteer : {
            background : '#8c9c08',
            text : 'white'
        }
    }
}

//funcion de cambio de color

function changeBgdColor(colorOfButton){
    let divJumbotron = document.querySelector('.jumbotron');
    divJumbotron.style.backgroundColor = paletaDeColores[colorOfButton].jumbotron;
    let buttons = document.querySelectorAll('.buttons a');
    buttons[0].style.backgroundColor = paletaDeColores[colorOfButton].donate;
    buttons[1].style.backgroundColor = paletaDeColores[colorOfButton].volunteer.background;
    buttons[1].style.color = paletaDeColores[colorOfButton].volunteer.text;
}

// interacción con los botones

blueButton.addEventListener('click', ()=> changeBgdColor('blue'));
orangeButton.addEventListener('click', ()=> changeBgdColor('orange'));
greenButton.addEventListener('click', ()=> changeBgdColor('green'));


// part 2 Homework

//declaracion de variables

const submitButton = document.querySelector('.row div form button');
const formEmail = document.getElementById('exampleInputEmail1');
const formName = document.getElementById('example-text-input');
const formDescribe = document.getElementById('exampleTextarea');
let errorsCounter = 0;

// funcion para validar que hay texto en los campos del formulario

function validationText(text){   
    return text.length > 0 ? true : false;
}

// validar la presencia de @ en el campo del email

function validationAt(email){
    return email.includes('@') ? true : false;
}

// restablecer los campos tras la validación positiva

function borderOK(){
    formEmail.style.border = '1px solid rgba(0,0,0,.15)';
    formName.style.border = '1px solid rgba(0,0,0,.15)';
    formDescribe.style.border = '1px solid rgba(0,0,0,.15)';
    document.forms[0].reset();
}

// función para poner en marcha todas las validaciones

function checkAll(){
    let atPresent = validationAt(formEmail.value) ? true : false;
    let isEmailTextPresent = validationText(formEmail.value) ? true : false;
    atPresent && isEmailTextPresent ? console.log("Email OK") : formEmail.style.border = '1px solid red';
    let namePresent = validationText(formName.value) ? true : false;
    namePresent ? console.log("Name OK") : formName.style.border = '1px solid red';
    let describePresent = validationText(formDescribe.value) ? true : false;
    describePresent ? console.log("Describe OK") : formDescribe.style.border = '1px solid red'
    let isAllOK = atPresent && isEmailTextPresent && namePresent && describePresent ? true : false;
    isAllOK ? borderOK() : console.warn('Hay Errores!');
    return isAllOK;
}

// función para ejecutar checkAll y mostrar alert de gracias

function alertOk(){
    let name = formName.value;
    let allOK = checkAll() ? true: false;
    allOK ? alert(`Muchas gracias ${name} por registrate!!`) : errorsCounter ++;
    if (!allOK && errorsCounter < 3) {
        console.warn(`Error, ¡${errorsCounter}º aviso!`);
    } else if (!allOK && errorsCounter === 3) {
        seriousAlert() 
    }
    return allOK;
}

// alert en caso de equivocarte 3 veces seguidas

function seriousAlert(){
    confirm(`Error, ¡${errorsCounter}º aviso! \nPara añadir un párrafo ES NECESARIO QUE INTRODUZCAS TEXTO EN EL FORMULARIO! \nGracias.`);
    errorsCounter = 0;
}

// interacción con el botón submit

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    alertOk();
});
