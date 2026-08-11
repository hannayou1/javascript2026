// Created: 2026-08-10 16:24
// [문제 8] 로그인 유효성 검사를 구현하시오
// 요구사항은 index.html 상단 주석 참고

// TODO: 여기에 작성하세요
const loginForm = document.querySelector('#loginForm')
const inputId = document.querySelector('#inputId');
const inputPassword = document.querySelector('#inputPassword');
const errorId = document.querySelector('#errorId');
const errorPassword = document.querySelector('#errorPassword');
const loginBtn = document.querySelector('#loginBtn');

loginForm.addEventListener('submit', function(e){
    e.preventDefault();

        errorId.textContent ="";
        errorPassword.textContent="";

        let isVaild =true;

        if(inputId.value.trim() === ''){
            errorId.textContent="아이디를 입력하세요";
            isVaild =false;    
        }

        if(inputPassword.value.trim() === ''){
            errorPassword.textContent="비밀번호를 입력하세요";
            isVaild =false;    
        }

        if(isVaild){
            alert('성공');
        }

        inputId.addEventListener('input', function(){
            errorId.textContent ="";  
        });

         inputPassword.addEventListener('input', function(){
            errorPassword.textContent ="";  
        });



});

