const openBtn =  document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.btn-close');

openBtn.addEventListener('click',function(){
  modal.classList.add('show');
});

closeBtn.addEventListener('click', function(){
  modal.classList.remove('show');
});

modal.addEventListener('click', function(e){
  if(e.target === modal){
    modal.classList.remove('show');
  }
});