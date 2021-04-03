const body = document.body;
const slides = document.querySelectorAll('.slide');
leftBtn = document.getElementById('left');
rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setActiveSlide();
  setBgToBody();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setActiveSlide();
  setBgToBody();
});

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

setActiveSlide();

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[activeSlide].classList.add('active');
}
