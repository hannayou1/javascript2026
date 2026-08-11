// Created: 2026-08-10 10:46
// [문제] 이 파일에는 오류가 4곳 있다. 모두 찾아 수정하시오.
const checkAll = document.getElementById('checkAll');
const checks = document.querySelectorAll('.chk');

checkAll.addEventListener('change', function () {
  checks.forEach(function (chk) {
    chk.checked = checkAll.checked;
  });
});

checks.forEach(function (chk) {
  chk.addEventListener('change', function () {
    let allChecked = true;
    checks.forEach(function (c) {
      if (c.checked === false) {
        allChecked = false;
      }
    });
    checkAll.checked = allChecked;
  });
});
