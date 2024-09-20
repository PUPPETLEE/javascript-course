
function toggleButton(selector){
  const button = document.querySelector(selector)
  
  if(!button.classList.contains('is-toggled')){
    turnOffPreviousButton();
    button.classList.add('is-toggled')
  }else{
    button.classList.remove('is-toggled')
  }
}

function turnOffPreviousButton(){
  const previousButton = document.querySelector('.is-toggled');

  //True if the other button have class of is-toggled this will remove it 
  if(previousButton){
    previousButton.classList.remove('is-toggled');
  }
}