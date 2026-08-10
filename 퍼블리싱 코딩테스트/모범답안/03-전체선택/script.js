// Created: 2026-08-10 10:46
// [모범답안] 오류 4곳 수정
// (1) getElementByID → getElementById : 메서드명 오타 (TypeError)
// (2) checkAll.value → checkAll.checked : value는 항상 "on"(truthy)이라 해제가 안 됨
// (3) c.checked = false → c.checked === false : 대입(=)이라 조건문에서 체크를 풀어버림
// (4) allchecked → allChecked : 변수명 대소문자 불일치 (ReferenceError)
const checkAll = document.getElementById('checkAll');    // (1)
const checks = document.querySelectorAll('.chk');

checkAll.addEventListener('change', function () {
  checks.forEach(function (chk) {
    chk.checked = checkAll.checked;                      // (2)
  });
});

checks.forEach(function (chk) {
  chk.addEventListener('change', function () {
    let allChecked = true;
    checks.forEach(function (c) {
      if (c.checked === false) {                         // (3)
        allChecked = false;
      }
    });
    checkAll.checked = allChecked;                       // (4)
  });
});
