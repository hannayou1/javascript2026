// [버그 3개를 수정한 정답]
//
// 버그 1: closeModal()이 classList.add를 하고 있었음 → remove로 수정
// 버그 2: 열기 버튼(openBtn)에 closeModal이 연결돼 있었음 → openModal로 수정
// 버그 3: dimmed 클릭 판정이 e.target === closeBtn 이었음
//         → dimmed(래퍼 자신)를 클릭했는지 봐야 하므로 e.target === modalWrap 로 수정
//         (모달 내부를 클릭하면 e.target이 모달 안쪽 요소라 닫히지 않음)

document.addEventListener('DOMContentLoaded', function () {
  var modalWrap = document.querySelector('.modal-wrap');
  var openBtn = document.querySelector('.btn-open-modal');
  var closeBtn = document.querySelector('.btn-close-modal');

  function openModal() {
    modalWrap.classList.add('is-show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalWrap.classList.remove('is-show'); // 버그 1 수정
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openModal); // 버그 2 수정

  closeBtn.addEventListener('click', closeModal);

  // dimmed(모달 바깥) 클릭 시 닫기
  modalWrap.addEventListener('click', function (e) {
    if (e.target === modalWrap) { // 버그 3 수정
      closeModal();
    }
  });
});
