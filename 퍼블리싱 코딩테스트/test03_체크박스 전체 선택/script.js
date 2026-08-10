const checkAll = document.getElementById('checkAll');
const checks = document.querySelectorAll('.chk');

checkAll.addEventListener('change', function(){
  checks.forEach(function(chk){
    chk.checked = checkAll.checked;
  });
});

checks.forEach(function(chk){
  chk.addEventListener('change', function(){
    let allChecked = true;

     checks.forEach(function(c){
      if(c.checked === false) {
        allChecked = false;
      }
     }); 

     checkAll.checked = allChecked;
  });
});

