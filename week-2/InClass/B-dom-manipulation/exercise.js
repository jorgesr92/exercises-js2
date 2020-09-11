/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

let paragraph = document.querySelectorAll('p');
console.log(paragraph);

let firstDiv = document.querySelector('div');
console.log(firstDiv);

let jumbotronDiv = document.getElementById('jumbotron-text');
console.log(jumbotronDiv);

let primaryContentP = document.querySelectorAll('.primary-content p');
console.log(primaryContentP);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
function greetings(){
    alert("Thanks for visiting Bikes for Refugees!");
}
let button = document.getElementById('alertBtn');
button.addEventListener('click', greetings);

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
/* function changeBackgroundColour(){
    let body = document.querySelector('body');
    body.style.backgroundColor = 'cyan';
}

let buttonChangeColour = document.getElementById('bgrChangeBtn');
buttonChangeColour.addEventListener('click', changeBackgroundColour);
 */
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

function addSomeText(newText){
    let paragraph = document.createElement('p');
    paragraph.classList.add('article-lead');
    let articleP = document.createElement('article');
    articleP.classList.add('article');
    typeof newText === 'string' ? paragraph.innerText = newText.toUpperCase() : paragraph.innerText = "Add some Text";
    let lernMoreDivArticle = document.querySelector('#mainArticles');
    articleP.appendChild(paragraph);
    lernMoreDivArticle.appendChild(articleP);
}

let newTextButton = document.querySelector('#addTextBtn');
newTextButton.addEventListener('click', addSomeText);

/* 
let a = document.querySelector('#mainArticles')
- undefined
a.classList
- DOMTokenList ["articles", value: "articles"]
b = a.classList.value
- "articles"
b
- "articles" */



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

function largerLinks(){
    let anchors = document.querySelectorAll('a[href]');
    anchors.forEach(anchor => {
        let fontSize = parseInt(anchor.style.fontSize);
        fontSize++;
        anchor.style.fontSize = `${fontSize}em`;
    })
}

let largerLinksButton = document.querySelector('#largerLinksBtn');
largerLinksButton.addEventListener('click', largerLinks);

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
let newTextAdded = document.querySelector('#content input');
let addButtonText = document.querySelector('#addArticleBtn');
let errorsCounter = 1;

function add(){
    let text = newTextAdded.value;
    addSomeText(text);
    errorsCounter = 1;
    newTextAdded.value = "";
}


//addButtonText.addEventListener('click', add);


// validaciones
function validation () {
    let text = newTextAdded.value;
    !text ? noTextPresent() : add(text);
}

addButtonText.addEventListener('click', validation);


function test() {
    console.log("test!");
    newTextAdded.style.border = '1px solid rgba(0,0,0,.15)';
    let noTextAlert = document.getElementById('alertaNoText');
    noTextAlert ? noTextAlert.remove(): console.log("Ha entendido el error!");
}

newTextAdded.addEventListener('change', test);

let divAddText = document.getElementById('alert1');

function noTextPresent() {
    newTextAdded.style.border = '1px solid red'
    let alertNoText = document.createElement('p');
    alertNoText.style.color = 'red';
    alertNoText.style.textAlign = 'center';
    alertNoText.id = 'alertaNoText';
    alertNoText.innerText = "No hay texto, ¡Escribe algo!";
    document.getElementById('alertaNoText') ? errorsCounter++ : divAddText.appendChild(alertNoText);
    errorsCounter === 3 ? seriousAlert() : console.log(`Error, ¡${errorsCounter}º aviso!`);
}

function seriousAlert(){
    alert(`Error, ¡${errorsCounter}º aviso! \nPara añadir un párrafo ES NECESARIO QUE INTRODUZCAS TEXTO EN EL FORMULARIO! \nGracias.`);
    errorsCounter = 0;
}

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

let arrayColors = ['red', 'green', 'cyan', 'white', 'blue'];

function changeBackgroundColour(){
    let body = document.querySelector('body');
    let currentColor = arrayColors.indexOf(body.style.backgroundColor);
    currentColor >= arrayColors.length-1 || currentColor < 0 ? currentColor = 0: currentColor++ ;
    body.style.backgroundColor = arrayColors[currentColor];
}

let buttonChangeColour = document.getElementById('bgrChangeBtn');
buttonChangeColour.addEventListener('click', changeBackgroundColour);


