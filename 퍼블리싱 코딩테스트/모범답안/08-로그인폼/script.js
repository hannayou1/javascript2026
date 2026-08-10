// Created: 2026-08-10 16:24
// [모범답안] 로그인 유효성 검사
// 패턴: submit 이벤트 + preventDefault + 깃발(isValid) — 문제 6과 동일 구조
const form = document.getElementById('loginForm');
const userId = document.getElementById('userId');
const userPw = document.getElementById('userPw');
const errId = document.querySelector('.err-id');
const errPw = document.querySelector('.err-pw');

form.addEventListener('submit', function (e) {
  e.preventDefault();               // 데모 페이지이므로 전송은 항상 차단
  errId.textContent = '';
  errPw.textContent = '';
  let isValid = true;

  if (userId.value.trim() === '') {
    errId.textContent = '아이디를 입력하세요.';
    isValid = false;
  }

  if (userPw.value.trim() === '') {
    errPw.textContent = '비밀번호를 입력하세요.';
    isValid = false;
  }

  if (isValid) {
    alert('로그인 성공');
  }
});

// 입력을 다시 시작하면 해당 에러 메시지 지우기
userId.addEventListener('input', function () {
  errId.textContent = '';
});
userPw.addEventListener('input', function () {
  errPw.textContent = '';
});
