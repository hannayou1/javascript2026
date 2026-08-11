// [제공 코드 — 빈칸을 채운 정답]
document.addEventListener('DOMContentLoaded', function () {
  var track = document.querySelector('.slide-track');
  var slides = document.querySelectorAll('.slide');
  var prevBtn = document.querySelector('.btn-prev');
  var nextBtn = document.querySelector('.btn-next');
  var dots = document.querySelectorAll('.dot');
  var currentIndex = 0;

  function updateSlider() {
    track.style.transform = 'translateX(' + (-currentIndex * 100) + '%)'; // (1)

    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === currentIndex); // (2)
    });
  }

  nextBtn.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // (3)
    updateSlider();
  });

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      currentIndex = i; // (4)
      updateSlider();
    });
  });
});
