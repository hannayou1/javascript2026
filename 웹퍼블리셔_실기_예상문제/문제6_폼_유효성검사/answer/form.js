// [버그 3개를 수정한 정답]
//
// 버그 1: submit 핸들러에 e.preventDefault()가 빠져 있었음
//         → 검증 결과와 상관없이 폼이 그대로 제출되어 페이지가 새로고침됨
// 버그 2: 이름 검사 조건이 반전되어 있었음 (!== '' → === '')
//         → 이름을 "입력했을 때" 에러가 뜨고, 비워두면 통과되는 반대 동작
// 버그 3: showError()에서 classList.remove('is-error')로 되어 있었음 → add로 수정
//         → 에러 메시지는 떠도 빨간 테두리가 안 생김

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.inquiry-form');
  var nameInput = document.querySelector('#userName');
  var emailInput = document.querySelector('#userEmail');
  var agreeCheck = document.querySelector('#agree');

  function showError(input, message) {
    var field = input.closest('.form-field');
    field.classList.add('is-error'); // 버그 3 수정
    field.querySelector('.error-msg').textContent = message;
  }

  function clearError(input) {
    var field = input.closest('.form-field');
    field.classList.remove('is-error');
    field.querySelector('.error-msg').textContent = '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // 버그 1 수정: 기본 제출(새로고침) 막기
    var valid = true;

    if (nameInput.value.trim() === '') { // 버그 2 수정
      showError(nameInput, '이름을 입력해 주세요.');
      valid = false;
    } else {
      clearError(nameInput);
    }

    if (emailInput.value.indexOf('@') === -1) {
      showError(emailInput, '올바른 이메일을 입력해 주세요.');
      valid = false;
    } else {
      clearError(emailInput);
    }

    if (!agreeCheck.checked) {
      alert('개인정보 수집·이용에 동의해 주세요.');
      valid = false;
    }

    if (valid) {
      alert('상담 신청이 접수되었습니다.');
    }
  });
});
