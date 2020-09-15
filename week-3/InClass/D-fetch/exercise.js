/*
================

1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
3. When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 with 
user latitude and longitude.
4. When you get the response from the server, print the current temperature in an <h3> marker.
5. Validate the form when you click on the button, if the inputs are empty or ar not numeric, show a warning message

================
*/

const displayTemperature = temperature => {
    const jumbotron = document.createElement('div');
    const h3 = document.createElement('h3');
    jumbotron.appendChild(h3);

    const main = document.getElementById('main');
    main.appendChild(jumbotron);

    parseFloat(temperature) ? h3.innerText = `${temperature}ºC` : h3.innerText = `${temperature}`;

};
function validationData(lat, lon){
    return lat && lon && parseFloat(lat) && parseFloat(lon) ? true : false ;
};

function getObjTemp(latitude, longitude){
    // Promise function
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`) // nombre 
    .then(response => response.json())
    .then(json => {
        const temperature = json.main.temp;
        displayTemperature(temperature);
        console.log(temperature)}) // then, que hacer con la informacion
    .catch(error => console.error(error));// catch, que hacer en caso de error

}

const getButton = document.getElementById('get-button');
getButton.addEventListener('click', () => {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    validationData(latitude, longitude) ? getObjTemp(latitude, longitude):displayTemperature(`No encontramos la temperatura con la latitud ${latitude} y longitud ${longitude}`)

    
})



function createCard(divCardColumns, title, image, desc, precio){
    const divCard = document.createElement('div');
    divCard.style.width = '22rem';
    divCard.classList = 'card';

    const img = document.createElement('img');
    img.src = image
    img.classList = "card-img-top";

    const div1 = document.createElement('div');
    div1.classList = 'card-body';

    const h5 = document.createElement('h5');
    h5.classList = 'card-title';
    h5.innerText = title;

    const p1 = document.createElement('p');
    p1.innerText = desc;
    p1.style.fontSize = '12px'
    p1.classList = 'card-text';

    const buttonBuy = document.createElement('a');
    buttonBuy.classList = "btn btn-primary";
    buttonBuy.innerText = `Buy - ${precio} €`;

    div1.appendChild(h5);
    div1.appendChild(p1);
    div1.appendChild(buttonBuy);

    divCard.appendChild(img);
    divCard.appendChild(div1);
    

    divCardColumns.appendChild(divCard)

    body.appendChild(divCardColumns);

}


/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */


function addProduct(json){
    const divCardColumns = document.createElement('div');
    divCardColumns.classList = 'card-columns';
    json.forEach(element => {
        createCard(divCardColumns, element.title, element.image, element.description, element.price)
    });
}

const buttonGetItems = document.createElement('button');
const br = document.createElement('br');
buttonGetItems.innerText = 'Get shopping items';
buttonGetItems.classList = 'btn btn-primary';
const body = document.querySelector('body');
body.appendChild(buttonGetItems);
body.appendChild(br);
buttonGetItems.addEventListener('click', () => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
    .then(response => response.json())
    .then(json => {
        addProduct(json);
    })
    .catch(error => console.error(error));
})