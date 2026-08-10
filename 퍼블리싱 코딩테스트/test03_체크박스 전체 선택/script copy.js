// Created: 2026-08-10 10:46
// [문제] 이 파일에는 오류가 4곳 있다. 모두 찾아 수정하시오.
const checkAll = document.getElementById('checkAll');
const checks = document.querySelectorAll('.chk');

checkAll.addEventListener('change', function () {
  //하위 체크박스를 하나씩 돌면서(forEach), 각각의 체크 상태(chk.checked)를 전체선택의
  //  현재 상태(checkAll.checked)와 똑같이 맞춥니다.
  checks.forEach(function (chk) {
    chk.checked = checkAll.checked;
  });
});

//이번엔 하위 체크박스 3개 각각에 change 이벤트를 겁니다. (forEach로 돌면서 하나씩 등록)
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
