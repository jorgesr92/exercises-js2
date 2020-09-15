/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

//Task 1

const body = document.querySelector('body');

/* function changeBgColor(){
    body.style.backgroundColor = 'AA9999';
} */

setTimeout(() => body.style.backgroundColor = 'cyan', 5000);
//setTimeout(changeBgColor, 7500);

/* function callCallback(inputFunction) {
    inputFunction()
}

callCallback(changeBgColor) */

//task 2

//const colors = ['cyan', ]
//setInterval(() => body.style.backgroundColor = Math.random() > 0.5 ? 'cyan' : 'blue', 500);