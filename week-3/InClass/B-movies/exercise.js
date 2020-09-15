/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
/* Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"
 */


 function showMovies(){
   const allmovies = document.getElementById('all-movies');
   movies.forEach(movie=>{
     let movieInfo = document.createElement("p");
     movieInfo.innerText =`${movie.title} - ${movie.director}`;
     movieInfo.classList = 'movie';
     allmovies.appendChild(movieInfo);
   })
  const moviesNumber = document.getElementById('movies-number');
  moviesNumber.innerText = movies.length;
 }

 setTimeout(showMovies, 1000);
 /* Task 2
 Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
 Create a new function called "addMovie"
 - it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
 - it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
 Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
 How many movies can you see on your page? */

// create a new movie object for your favorite movie

let myMovies = [
  {
    title : 'Matrix',
    director : 'Wakowski Sisters',
    type : 'Sci Fi',
    haveWatched: true
  },
  {
    title : 'Titanic',
    director : 'James Cameron',
    type : 'Drama',
    haveWatched: false
  },
  {
    title : 'Jocker',
    director : 'Todd Phillips',
    type : 'Comedy',
    haveWatched: true
  }

]

function addMovies(movie) {
  movies.push(movie);
  document.querySelectorAll('.movie').forEach(p => p.remove());
  setTimeout(showMovies, 1000);
}

setTimeout(() => addMovies(myMovies[0]), 2000);


// create addMovies function

function createMovieObj(title, director, type, haveWatched){
  const movie = {
    title: title,
    director : director,
    type: type,
    haveWatched: haveWatched    
  }
  return movie;
}

document.getElementById('save').addEventListener('click', event => {
  event.preventDefault();
  const title = document.getElementById('input-title').value;
  const director = document.getElementById('input-director').value;
  const type = document.getElementById('input-type').value;
  const haveWatched = document.getElementById('input-watched').value 
  const newMovie = createMovieObj(title, director, type, haveWatched);
  console.log(newMovie);
  addMovies(newMovie);
})