const btnNext = document.querySelector('.btn-next')
const btnBefore = document.querySelector('.btn-before')
const slides = document.getElementsByClassName('slider-img')

let currentSlide = 0;


function slideSwitch(slideNumber) {
    if (typeof slideNumber === 'number') {
      for (let i = 0; i < slides.length; i++) {
        if (i != slideNumber) {
          slides[i].classList.remove('active-one');
        } else {
          slides[i].classList.add('active-one');
        }
      }
    } else {
      for (let i = 0; i < slides.length; i++) {
        if (slides[i].dataset.name != slideNumber) {
          slides[i].classList.remove('active-one');
        } else {
          slides[i].classList.add('active-one');
        }
      }
    }
  }
  
function validSlideNumberCheck(slideNumber) {
  let validNumber = slideNumber;

  if (slideNumber < 0) {
    validNumber = slides.length - 1;
  } else if (slideNumber > slides.length - 1) {
    validNumber = 0;
  }

  currentSlide = validNumber;

  return currentSlide;
}
  
btnBefore.addEventListener('click', () => {
    let newSlide = currentSlide - 1;
    slideSwitch(validSlideNumberCheck(newSlide));
})
  
btnNext.addEventListener('click', () => {
  let newSlide = currentSlide + 1;
  slideSwitch(validSlideNumberCheck(newSlide));
})
  