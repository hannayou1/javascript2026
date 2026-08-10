// Created: 2026-08-10 10:46
// [문제] __①__ ~ __④__ 부분을 알맞은 코드로 바꾸시오
const titles = document.querySelectorAll('.acc-title');

titles.forEach(function (title) {
  title.addEventListener(__①__, function () {
    // 클릭한 제목 바로 다음 형제 요소(내용) 선택
    const content = this.__②__;
    const isOpen = content.classList.contains('on');

    // 모든 내용 닫기
    document.querySelectorAll('.acc-content').forEach(function (c) {
      c.classList.__③__('on');
    });

    // 닫혀 있던 항목이면 열기 (토글)
    if (!isOpen) {
      content.classList.__④__('on');
    }
  });
});
