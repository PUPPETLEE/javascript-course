      
      let score =JSON.parse(localStorage.getItem
        ('score')) ||  {
            wins: 0,
            losses: 0,
            Ties: 0
          }; 
  
          updateScoreElement();
  
  
        
          /* just for reference
        if (!score) {S
          score = {
            wins: 0,
            losses: 0,
            Ties: 0
          };
        }
          */
      
document.querySelector('.js-auto-play-button').addEventListener('click',()=>{
autoPlay();
});
       
let isAutoPlaying = false;
let intervalID;

//const autoPlay = () =>{

//};  
function autoPlay() {
  if (!isAutoPlaying) {
    // Start the interval if not playing
    intervalID = setInterval(()=> {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true; 
  } else {
    // Clear the interval if already playing
    clearInterval(intervalID);  // Stop the current interval
    isAutoPlaying = false;  // Set autoplay flag to false
  }
}

          
    
 document.querySelector('.js-rock-button').addEventListener('click',() => {
  playGame('Rock');
 })

 document.querySelector('.js-paper-button').addEventListener('click',() =>{
  playGame('Paper');
 })

 
 document.querySelector('.js-scissors-button').addEventListener('click',() =>{
  playGame('Scissors');
 })

document.body.addEventListener('keydown',(event)=>{
 if(event.key=== 'r'){
  playGame('Rock');
 }else if(event.key === 'p'){
  playGame('Paper');
 }else if(event.key === 's'){
  playGame('Scissors')
 }
});
  
        //we created a pramter that accept computer move
        function playGame(playerMove){
        // we save the return value of camputer in variable name computer movee
        const computerMove = pickComputerMove();
  
        let result ='';
  
        if (playerMove === 'Scissors'){
              if(computerMove === 'Rock'){
                result = 'You lose.';
                }else if (computerMove === 'Paper'){
                  result = 'You Win.';
                }else if (computerMove === 'Scissors'){
                  result = 'Tie.';
                }
        }else if (playerMove === 'Rock'){
              if(computerMove === 'Rock'){
                result = 'Tie.';
                }else if (computerMove === 'Paper'){
                  result = 'You lose.';
                }else if (computerMove === 'Scissors'){
                  result = 'You Win.'
                }
        }else if (playerMove === 'Paper'){
              if(computerMove === 'Rock'){
                result = 'You Win.';
                }else if (computerMove === 'Paper'){
                  result = 'Tie.';
                }else if (computerMove === 'Scissors'){
                result = 'You lose.'
                }
        }
        // this where the code result goes too basta hahaha para sa result
  
        if(result==='You Win.'){
          score.wins += 1; 
        }else if(result ==='You lose.'){
          score.losses += 1; 
        }else if(result ==='Tie.'){
          score.Ties += 1;
  
        }
  
        localStorage.setItem('score',JSON.stringify(score));
  
  
        document.querySelector('.js-result').innerHTML = `${result}`;
  
        document.querySelector('.js-moves').innerHTML = `You  <img class="move-icon" src="images/${playerMove}-emoji.png" alt="">
         <img class="move-icon" src="images/${computerMove}-emoji.png" alt="">Computer`;
        updateScoreElement();
  
        };
      
     
  
  
        function updateScoreElement(){
          
        document.querySelector('.js-score').innerHTML =  
          `Wins: ${score.wins} Losses ${score.losses} Ties: ${score.Ties}`;
        }
  
        function pickComputerMove(){
  
          randomNumber = Math.random();
          let computerMove = '';
  
  
          if (randomNumber >= 0  && randomNumber <1/3){
            computerMove = 'Rock';
          }else if (randomNumber >=1/3 && randomNumber <2/3){
            computerMove ='Paper';
          }else if(randomNumber >= 2/3 && randomNumber <=1 ){
            computerMove ='Scissors';
          }
          console.log(computerMove);
  
         return computerMove;
        }
        
  