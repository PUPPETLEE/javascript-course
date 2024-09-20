display();

        // function for so it display the calculation when page is refresh is saved in local storage
        function display(){
          document.querySelector('.js-display').innerHTML = localStorage.getItem('calculation');
        }

        // || for defult value 
        let calculation = localStorage.getItem('calculation') || '';
        //this will show what is the current number saved in the localstorage
        console.log(calculation);

        function updateCalculation(update){

          calculation+=update;

          //set item will save the calculation to local storage
          localStorage.setItem('calculation',calculation);

          return document.querySelector('.js-display').innerHTML = calculation;

        }