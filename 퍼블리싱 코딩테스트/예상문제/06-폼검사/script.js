// Created: 2026-08-10 10:46
// [문제] 이 파일에는 오류가 있다. 모두 찾아 수정하시오.
// (힌트: preventDefault는 실패하는 분기마다 확인할 것)
const form = document.getElementById('joinForm');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const errName = document.querySelector('.err-name');
const errEmail = document.querySelector('.err-email');

form.addEventListener('submit', function (e) {
  errName.textContent = '';
  errEmail.textContent = '';
  let isValid = true;

  if (userName.value.trim() === '') {
    errName.textContent = '이름을 입력하세요.';
    e.preventDefault;
    isValid = false;
  }

  if (userEmail.value.indexOf('@') === -1) {
    errEmail.innerText() = '이메일 형식이 아닙니다.';
    e.preventDefault();
    isValid = false;
  }

  if (isValid = true) {
    alert('가입 완료');
  }
});

// 입력 중이면 이름 에러 메시지 지우기
userName.addEventListener('input', function () {
  errName.textContent = "";
});
