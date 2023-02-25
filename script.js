//Variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

//Event Listeners

openBtn.addEventListener('click',function(){

  modalContainer.style.display = 'block';

});

closeBtn.addEventListener('click',function(){

  modalContainer.style.display = 'none';

});

window.addEventListener('click',function(e){
  console.log("target before : " + e);
  if(e.target === modalContainer){
    modalContainer.style.display = 'none';
    console.log("target before : after" + e);
  }
  

})

