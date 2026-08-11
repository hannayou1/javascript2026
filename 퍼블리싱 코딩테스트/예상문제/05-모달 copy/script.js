// Created: 2026-08-10 10:46
// [수정 금지] 이 JS가 동작하도록 index.html을 작성하시오
const openBtn = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const closeBtn = modal.querySelector('.btn-close');

openBtn.addEventListener('click', function () {
  modal.classList.add('show');
});

closeBtn.addEventListener('click', function () {
  modal.classList.remove('show');
});

// dim(배경) 클릭 시 닫기 — 모달 내부 클릭은 제외
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});
