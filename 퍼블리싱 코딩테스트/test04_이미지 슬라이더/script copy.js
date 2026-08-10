// Created: 2026-08-10 10:46
// [문제] __①__ ~ __④__ 부분을 알맞은 코드로 바꾸시오
const slideList = document.querySelector('.slide-list');
const slides = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let currentIndex = 0;
const slideWidth = 300;

function moveSlide() {
  slideList.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)';
}

btnNext.addEventListener('click', function () {
  currentIndex++;
  // 마지막 슬라이드를 넘어가면 처음으로
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  moveSlide();
});

btnPrev.addEventListener('click', function () {
  currentIndex--;
  // 첫 슬라이드에서 이전을 누르면 마지막으로
  if (currentIndex < 0) {
    currentIndex =slides.length - 1;
  }
  moveSlide();
});
