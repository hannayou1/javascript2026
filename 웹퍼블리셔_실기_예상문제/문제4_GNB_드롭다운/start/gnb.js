// [제공 코드 — 수정 금지]
// HTML 구조를 이 코드에 맞춰 작성하세요.
// - 헤더: .header
// - GNB 메뉴 항목: .gnb 안의 .gnb-item (li) — 서브메뉴(.sub-menu)를 자식으로 가짐
// - 활성 클래스: is-open (gnb-item에), is-scrolled (header에)

document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.header');
  var gnbItems = document.querySelectorAll('.gnb .gnb-item');

  gnbItems.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      item.classList.add('is-open');
    });
    item.addEventListener('mouseleave', function () {
      item.classList.remove('is-open');
    });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  });
});
