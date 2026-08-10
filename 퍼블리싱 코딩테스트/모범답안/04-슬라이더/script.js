// Created: 2026-08-10 10:46
// [모범답안] ① slideWidth  ② slides.length  ③ slides.length - 1  ④ moveSlide
const slideList = document.querySelector('.slide-list');
const slides = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let currentIndex = 0;
const slideWidth = 300;

function moveSlide() {
  slideList.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)';  // ① 이동 거리 = 인덱스 × 슬라이드 너비
}

btnNext.addEventListener('click', function () {
  currentIndex++;
  // 마지막 슬라이드를 넘어가면 처음으로
  if (currentIndex >= slides.length) {                   // ② 인덱스는 0부터 → 3장이면 유효 범위 0~2
    currentIndex = 0;
  }
  moveSlide();
});

btnPrev.addEventListener('click', function () {
  currentIndex--;
  // 첫 슬라이드에서 이전을 누르면 마지막으로
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;                    // ③ 마지막 인덱스는 개수 - 1 (length로 쓰면 빈 화면)
  }
  moveSlide();                                           // ④ 인덱스만 바꾸면 화면이 안 움직임
});
