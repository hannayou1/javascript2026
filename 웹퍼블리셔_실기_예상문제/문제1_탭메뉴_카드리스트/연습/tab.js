// [제공 코드 — 수정 금지]
// HTML 구조를 이 코드에 맞춰 작성하세요.
// - 탭 버튼: .tab-list 안의 .tab-btn
// - 콘텐츠 패널: .tab-panel (탭 버튼과 같은 순서)
// - 활성 상태 클래스: is-active

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
