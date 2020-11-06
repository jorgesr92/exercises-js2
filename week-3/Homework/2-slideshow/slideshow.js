
let slides = [
    {
        id:0,
        url:'https://cyf-image-carousel.netlify.app/sample-images/kitten2.jpg'
    },
    {
        id:1,
        url:'https://cyf-image-carousel.netlify.app/sample-images/kitten3.jpg'
    },
    {
        id:2,
        url:'https://cyf-image-carousel.netlify.app/sample-images/kitten1.jpg'
    }
];

let slideNow = 0;
let stopInterval = -1;

document.getElementById('divCenter').style.textAlign = "center";
document.getElementById('center').style.textAlign = "center";

const buttonAutoBack = document.getElementById('autoBack');
const buttonBack = document.getElementById("back");
const buttonStop = document.getElementById('stop');
const buttonForward = document.getElementById('forward');
const buttonAutoForward = document.getElementById('autoForward');

const imgCarousel = document.getElementById('images');

function nextImage(){
    slideNow < slides.length-1 ? slideNow++ : slideNow = 0;
    console.log(slideNow);
    slides.forEach(slide => {
        if (slide.id === slideNow){
            imgCarousel.src = slide.url;
        }
    });
};

function previusImage(){
    slideNow != 0 ? slideNow-- : slideNow = slides.length-1;
    console.log(slideNow);
    slides.forEach(slide => {
        if (slide.id === slideNow){
            imgCarousel.src = slide.url;
        }
    });
};

function timerCarousel(){
    let timer = document.getElementById('time').value;
    timer <= 0 ? timer = 1000 : timer = timer*1000;
    return timer;
}

buttonBack.addEventListener("click", (_event)=>{
    clearInterval(stopInterval);
    previusImage();
});

buttonForward.addEventListener("click", (_event)=>{
    clearInterval(stopInterval);
    console.log(stopInterval);
    nextImage();
});

buttonAutoBack.addEventListener("click", (_event) =>{
    clearInterval(stopInterval);
    let timerCa = timerCarousel();
    stopInterval = setInterval(() => {
        previusImage();
    },timerCa);
});

buttonAutoForward.addEventListener("click", (_event) =>{
    clearInterval(stopInterval);
    let timerCa = timerCarousel();
    stopInterval = setInterval(() => {
        nextImage();
    },timerCa);
});

buttonStop.addEventListener("click", (_event) => {
    clearInterval(stopInterval);
})

