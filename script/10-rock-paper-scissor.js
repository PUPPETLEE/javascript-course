      
      let score =JSON.parse(localStorage.getItem
        ('score')) ||  {
            wins: 0,
            losses: 0,
            Ties: 0
          }; 
  
          updateScoreElement();
          showResultElement();
          showMoves();
  
        
          /* just for reference
        if (!score) {S
          score = {
            wins: 0,
            losses: 0,
            Ties: 0
          };
        }
          */
  
  
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
  
      
        alert(`You picked ${playerMove}. Computer picked ${computerMove}.${result}
  Wins: ${score.wins} Losses ${score.losses} Ties: ${score.Ties}`);
   
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
        
  