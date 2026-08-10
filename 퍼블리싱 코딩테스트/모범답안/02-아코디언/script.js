// Created: 2026-08-10 10:46
// [모범답안] ① 'click'  ② nextElementSibling  ③ remove  ④ add
const titles = document.querySelectorAll('.acc-title');

titles.forEach(function (title) {
  title.addEventListener('click', function () {          // ① 이벤트 이름은 문자열 'click' ('onclick'은 오답)
    // 클릭한 제목 바로 다음 형제 요소(내용) 선택
    const content = this.nextElementSibling;             // ② nextSibling은 공백 텍스트 노드까지 잡히므로 오답
    const isOpen = content.classList.contains('on');

    // 모든 내용 닫기
    document.querySelectorAll('.acc-content').forEach(function (c) {
      c.classList.remove('on');                          // ③
    });

    // 닫혀 있던 항목이면 열기 (토글)
    if (!isOpen) {
      content.classList.add('on');                       // ④ (전체를 먼저 닫았으므로 toggle도 동작은 같음)
    }
  });
});
