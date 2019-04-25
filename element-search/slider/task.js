
   /* 
const slides = document.querySelectorAll('.slider__item');
const leftArrow = document.querySelector('.slider__arrow_prev');
const rightArrow = document.querySelector('.slider__arrow_next');

let slideNumber = 0;

rightArrow.onclick = function () {
    slideNumber++;
    for (let slide of Array.from(slides)) {
        slide.className = 'slider__item';
    }
    if (slideNumber >= slides.length) {
        slideNumber = 0;
    }
    slides[slideNumber].className = 'slider__item slider__item_active';
};

leftArrow.onclick = function () {
    slideNumber--;
    for (let slide of Array.from(slides)) {
        slide.className = 'slider__item';
    }
    if (slideNumber < 0) {
        slideNumber = slides.length - 1;
    }
    slides[slideNumber].className = 'slider__item slider__item_active';
};

*/

function showSlides ()  {
    let slideNumber = 0;
    const leftArrow = document.body.querySelector(".slider__arrow_prev");
    leftArrow.onclick = function () {
        const slides = document.body.querySelectorAll(".slider__item");
        if (slideNumber == 0) {
            slides[slideNumber].classList.remove('slider__item_active')
            slideNumber = 4;
            slides[slideNumber].classList.add('slider__item_active')
        } else {
            slideNumber -= 1;
            slides[slideNumber].classList.add('slider__item_active')
            let current = slideNumber + 1;
            slides[current].classList.remove('slider__item_active');
        }
    }
    const rightArrow = document.body.querySelector(".slider__arrow_next");
    rightArrow.onclick = function () {
        const slides = document.body.querySelectorAll(".slider__item");
        if (slideNumber >= 0) {
            slides[slideNumber].classList.remove('slider__item_active')
            if (slideNumber == slides.length - 1) {
                slides[4].classList.remove('slider__item_active')
                slideNumber = 0;
                slides[slideNumber].classList.add('slider__item_active')
            } else {
                slideNumber += 1;
                slides[slideNumber].classList.add('slider__item_active')
                let current = slideNumber - 1;
                slides[current].classList.remove('slider__item_active')
            }
        }
    };
}
showSlides ();

