// Created: 2026-08-10 10:46
// [모범답안] 오류 수정
// (1) e.preventDefault; → e.preventDefault(); : 괄호가 없으면 참조만 하고 실행 안 됨 → 폼이 그대로 전송
// (2) errEmail.innerText() = '...' → errEmail.textContent = '...' : innerText는 속성이지 함수가 아님 (TypeError)
// (3) isValid = true → isValid === true : 대입이라 항상 true → 실패해도 "가입 완료"가 뜸 (if (isValid)도 정답)
// (4) 세트 함정: preventDefault()가 실패하는 분기마다 있는지 확인
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
    e.preventDefault();                                  // (1) 괄호 추가
    isValid = false;
  }

  if (userEmail.value.indexOf('@') === -1) {
    errEmail.textContent = '이메일 형식이 아닙니다.';     // (2) textContent 속성에 대입
    e.preventDefault();
    isValid = false;
  }

  if (isValid === true) {                                // (3) 비교 연산자
    alert('가입 완료');
  }
});

// 입력 중이면 이름 에러 메시지 지우기
userName.addEventListener('input', function () {
  errName.textContent = "";
});
