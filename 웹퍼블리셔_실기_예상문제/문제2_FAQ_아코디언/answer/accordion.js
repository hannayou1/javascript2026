// [제공 코드 — 빈칸을 채운 정답]
document.addEventListener('DOMContentLoaded', function () {
  var faqItems = document.querySelectorAll('.faq-list .faq-item');

  faqItems.forEach(function (item) {
    var questionBtn = item.querySelector('.faq-question'); // (1)

    questionBtn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open'); // (2)

      // 모든 항목 닫기
      faqItems.forEach(function (other) {
        other.classList.remove('is-open'); // (3)
      });

      // 닫혀 있던 항목이면 열기 (토글)
      if (!isOpen) {
        item.classList.add('is-open'); // (4)
      }
    });
  });
});
