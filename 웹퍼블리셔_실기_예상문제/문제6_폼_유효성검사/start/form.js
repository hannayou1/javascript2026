// [제공 코드 — 버그(잘못됐거나 빠진 코드)가 3개 있습니다. 찾아서 고치세요]
// 구조: .inquiry-form 안에 #userName, #userEmail, #agree
//       각 입력은 .form-field로 감싸고 그 안에 .error-msg
// 에러 상태 클래스: is-error (.form-field에 부여)

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.inquiry-form');
  var nameInput = document.querySelector('#userName');
  var emailInput = document.querySelector('#userEmail');
  var agreeCheck = document.querySelector('#agree');

  function showError(input, message) {
    var field = input.closest('.form-field');
    field.classList.add('is-error');
    field.querySelector('.error-msg').textContent = message;
  }

  function clearError(input) {
    var field = input.closest('.form-field');
    field.classList.remove('is-error');
    field.querySelector('.error-msg').textContent = '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = true;

    if (nameInput.value.trim() === '') {
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
