// Write your code here
let slides = {
    firstSlide:{
        id:0,
        url:'https://cyf-image-carousel.netlify.app/sample-images/kitten2.jpg'
    },
    secondSlide: {
        id:1,
        url:'https://cyf-image-carousel.netlify.app/sample-images/kitten3.jpg'
    },
    thirdSlide: {
        id:2,
        url:'https://cyf-image-carousel.netlify.app/sample-images/kitten1.jpg'
    }
};

let slideNow = 0;
let stopInterval = -1;

const buttonAutoBack = document.getElementById('autoBack');
const buttonBack = document.getElementById("back");
const buttonStop = document.getElementById('stop');
const buttonForward = document.getElementById('forward');
const buttonAutoForward = document.getElementById('autoForward');

const imgCarousel = document.getElementById('images');

function nextImage(){
    slideNow < slides.length ? slideNow++ : slideNow = 0;
    imgCarousel.src = slides.forEach(slide => {
        if (slide.id === slideNow){
            slide.url;
        }
    });
}

function previusImage(){
    slideNow < slides.length ? slideNow-- : slideNow = 0;
    imgCarousel.src = slides.forEach(slide => {
        if (slide.id === slideNow){
            slide.url;
        }
    });
}

buttonBack.addEventListener("click", ()=>{
    console.log('Hola Mundo');
})

