// Created: 2026-08-10 16:24
// [문제 7] 카테고리 탭 필터를 구현하시오
// 요구사항은 index.html 상단 주석 참고

// TODO: 여기에 작성하세요


const filterBtns = document.querySelectorAll(".tab_btn");
const cards=  document.querySelectorAll(".tab_content");


filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const categroy = this.dataset.category;

        cards.forEach(function(card){
            if(categroy === 'all' || card.dataset.category === categroy) {
                card.classList.remove('hidden');
            }else{
                card.classList.add('hidden');
            }
        });
    });
});