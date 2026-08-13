// [제공 코드 — 빈칸 (1)~(4)만 채우세요. 그 외 수정 금지]
// 구조: .slider > .slide-track > .slide
// 버튼: .btn-prevv / .btn-next, 인디케이터: .dot (슬라이드 개수만큼)
// 동작 원리: 트랙을 translateX(-현재번호 × 100%)로 밀어서 전환

document.addEventListener('DOMContentLoaded',function(){
    var track = document.querySelector('.slide-track');
    var slides = document.querySelectorAll('.slide');
    var preBtn = document.querySelector('.btn-prev');
    var nextBtn = document.querySelector('.btn-next');
    var dots = document.querySelectorAll('.dot');
    var currentIndex = 0;

    function updateSlider() {
        
        track.style.transform ='translateX(' + (-currentIndex * 100) + '%)';
   
        dots.forEach(function(dot, i){
        dot.classList.toggle('is-active', i === currentIndex);
    });
    }


 

       
  
    
    nextBtn.addEventListener('click', function(){
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    preBtn.addEventListener('click',function(){
        currentIndex = (currentIndex - 1 + slides.length ) % slides.length;
        updateSlider();
    });

    dots.forEach(function(dot, i){
        dot.addEventListener('click', function() {
            currentIndex = i;
            updateSlider();
        });
    });

    });    
