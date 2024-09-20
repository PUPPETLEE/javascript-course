function gaming(button){
  //if statement to check if the class exist
  if(!document.querySelector(`.${button}-button`).classList.contains('is-toggled')){
    document.querySelector(`.${button}-button`).classList.add('is-toggled');

  }else{
    document.querySelector(`.${button}-button`).classList.remove('is-toggled');
  }
 
}