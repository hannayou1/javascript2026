const slideList =  document.querySelector('.slide-list');
const slides = document.querySelectorAll('.slide')
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let currentIndex = 0;
const slideWidth = 300;

function moveSlide(){
  slideList.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)'
}

btnNext.addEventListener('click', function(){
  currentIndex++;
  if(currentIndex >= slides.length){
    currentIndex = 0;
  }
  moveSlide();
});

btnPrev.addEventListener('click', function(){
  currentIndex--;
  if(currentIndex < 0){
    currentIndex = slides.length - 1;
  }
  moveSlide();
});