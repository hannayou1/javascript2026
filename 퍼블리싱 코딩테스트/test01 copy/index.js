const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content')

tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function(){
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        this.classList.add('active');

        const target = document.getElementById(this.dataset.tab);
        target.classList.add('active');
    });
});
