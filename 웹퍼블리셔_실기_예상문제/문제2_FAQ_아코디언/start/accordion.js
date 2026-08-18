// [제공 코드 — 빈칸 (1)~(4)만 채우세요. 그 외 수정 금지]
// 구조: .faq-list > .faq-item(li) > .faq-question(button) + .faq-answer
// 활성 클래스: is-open (li에 부여)

document.addEventListener('DOMContentLoaded', function () {
  var faqItems = document.querySelectorAll('.faq-list .faq-item');

  faqItems.forEach(function (item) {
    var questionBtn = item.querySelector('.faq-question');

    questionBtn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      // 모든 항목 닫기
      faqItems.forEach(function (other) {
        other.classList.remove( 'is-open' );
      });

      // 닫혀 있던 항목이면 열기 (토글)
      if (!isOpen) {
        item.classList.add( 'is-open' );
      }
    });
  });
});
