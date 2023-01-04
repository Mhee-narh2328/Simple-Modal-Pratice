// Get Modal element
var modal = document.getElementById('simpleModal');
// Get open Modal button 
var modalBtn = document.getElementById('modalBtn');
// Get close Modal button 
var closeBtn = document.getElementById('closeBtn');


// listen for a click

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside)

// function to open modal
function openModal(){
  modal.style.display = 'block';
}

// function to close modal

function closeModal(){
  modal.style.display = 'none';
}

function clickOutside(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}