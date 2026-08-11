// [제공 코드 — 버그가 3개 있습니다. 찾아서 고치세요]
// 구조: .modal-wrap(dimmed 포함 래퍼) > .modal
// 열기 버튼: .btn-open-modal / 닫기 버튼: .btn-close-modal
// 활성 클래스: is-show (.modal-wrap에 부여)

document.addEventListener('DOMContentLoaded', function () {
  var modalWrap = document.querySelector('.modal-wrap');
  var openBtn = document.querySelector('.btn-open-modal');
  var closeBtn = document.querySelector('.btn-close-modal');

  function openModal() {
    modalWrap.classList.add('is-show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalWrap.classList.remove('is-show');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openModal);

  closeBtn.addEventListener('click', closeModal);

  // dimmed(모달 바깥) 클릭 시 닫기
  modalWrap.addEventListener('click', function (e) {
    if (e.target === modalWrap) {
      closeModal();
    }
  });
});
