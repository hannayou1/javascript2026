
const titles =  document.querySelectorAll('.acc-title');

titles.forEach(function(title) {
  title.addEventListener('click', function(){
    const content =  title.nextElementSibling;
    const isOpen =  content.classList.contains('on');

    document.querySelectorAll('.acc-content').forEach(function(c) {
      c.classList.remove('on');
    });

    if(!isOpen){
      content.classList.add('on');
    }
  })
});