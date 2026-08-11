// Created: 2026-08-10 10:46
// [수정 금지] 이 JS가 동작하도록 index.html을 작성하시오
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // 모든 버튼/컨텐츠에서 active 제거
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    // 클릭한 버튼 활성화
    this.classList.add('active');

    // data-tab 값과 같은 id를 가진 컨텐츠 활성화
    const target = document.getElementById(this.dataset.tab);
    target.classList.add('active');
  });
});
