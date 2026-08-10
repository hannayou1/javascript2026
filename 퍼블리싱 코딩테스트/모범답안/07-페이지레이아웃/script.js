// Created: 2026-08-10 16:24
// [모범답안] 카테고리 탭 필터
// 패턴: 전체 초기화 → 클릭된 것만 활성화 (탭 메뉴와 동일)
//       + data-category 비교로 카드 보이기/숨기기
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // 1. 버튼 active 갈아끼우기
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    // 2. 클릭된 버튼의 카테고리 값 읽기
    const category = this.dataset.category;

    // 3. 카드 하나씩 검사: 전체이거나 카테고리가 일치하면 보이기
    cards.forEach(function (card) {
      if (category === 'all' || card.dataset.category === category) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});
