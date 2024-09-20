function gaming(){
  //if statement to check if the class exist
  if(!document.querySelector('.gaming-button').classList.contains('is-toggled')){
    document.querySelector('.gaming-button').classList.add('is-toggled');

  }else{
    document.querySelector('.gaming-button').classList.remove('is-toggled');
  }

}