// [제공 코드 — 수정 금지]
document.addEventListener('DOMContentLoaded', function () {
  var tabButtons = document.querySelectorAll('.tab-list .tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
      tabButtons.forEach(function (b) {
        b.classList.remove('is-active');
      });
      tabPanels.forEach(function (p) {
        p.classList.remove('is-active');
      });

      btn.classList.add('is-active');
      tabPanels[index].classList.add('is-active');
    });
  });
});
