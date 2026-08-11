// [제공 코드 — 빈칸 (1)~(4)만 채우세요. 그 외 수정 금지]
// 구조: .slider > .slide-track > .slide
// 버튼: .btn-prevv / .btn-next, 인디케이터: .dot (슬라이드 개수만큼)
// 동작 원리: 트랙을 translateX(-현재번호 × 100%)로 밀어서 전환

document.addEventListener('DOMContentLoaded', function () {
  var track = document.querySelector('.slide-track');
  var slides = document.querySelectorAll('.slide');
  var prevBtn = document.querySelector('.btn-prev');
  var nextBtn = document.querySelector('.btn-next');
  var dots = document.querySelectorAll('.dot');
  var currentIndex = 0;

  function updateSlider() {
    // (1) 현재 번호만큼 트랙을 왼쪽으로 밀기 (예: 1번이면 -100%)
    track.style.transform = 'translateX(' + ( currentIndex * -100 ) +'%)';

    dots.forEach(function (dot, i) {
      // (2) i가 현재 번호와 같을 때만 is-active가 붙도록 조건 작성
      dot.classList.toggle('is-active', i ===  currentIndex);
    });
  }

  nextBtn.addEventListener('click', function () {
    // 마지막 슬라이드에서 누르면 0으로 순환 (% 나머지 연산)
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener('click', function () {
    // (3) 첫 슬라이드(0)에서 누르면 마지막으로 순환되도록 작성
    //     힌트: (currentIndex - 1 + 전체개수) % 전체개수
    currentIndex = (currentIndex - 1 + slides.length) % slides.length ;
    updateSlider();
  });

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      // (4) 클릭한 dot의 번호로 이동
      currentIndex = i ;
      updateSlider();
    });
  });
});
