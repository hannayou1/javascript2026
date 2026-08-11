// [제공 코드 — 수정 금지]
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
