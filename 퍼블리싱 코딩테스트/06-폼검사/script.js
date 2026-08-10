const form = document.querySelector('#joinForm');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const errName =document.querySelector('.err-name');
const errEmail =document.querySelector('.err-email');

form.addEventListener('submit', function(e){
  errName.textContent = '';
  errEmail.textContent = '';
  let isValid = true;
      
  if(userName.value.trim() === ''){
    errName.textContent="이름을 입력하세요";
    e.preventDefault();
    isValid=false;
  }

  if(userEmail.value.indexOf('@') === -1){
    errEmail.textContent="이메일 형식이 아닙니다.";
    e.preventDefault();
    isValid=false;
  }

  if(isValid === true){
    alert('완료');
  }

});

userName.addEventListener('input', function(){
  errName.textContent='';
});

