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

