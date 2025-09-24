const trial_count = document.querySelector(".trial_count")
let inputValue = document.querySelector('.input_value')
const action_btn = document.querySelector('.action_btn')
const  enter_text = document.querySelector('.enter_text')


let tries = 5;



const computer_choice = Math.floor(Math.random()*11)


trial_count.value = tries;


function check_values(){
            const userGuess = parseInt(inputValue.value)

            if(isNaN(userGuess)){
                enter_text.textContent = "input a number to play"
                return;
            }
            
            if (userGuess === computer_choice){
               enter_text.textContent = "congrations! you got the lucky number" ;
                action_btn.disabled = true;
                return
            }else if(userGuess> computer_choice){
                enter_text.textContent = "The number you chose is way bigger than the lucky number, try again"
                tries--
            }else{
                enter_text.textContent = "The number you chose is smaller than the lucky number, try again.."
                tries--
            }
            if (tries === 0 && userGuess !== computer_choice ){
                enter_text.textContent = `Game over!! The lucky number was ${computer_choice}. \n Refresh to play agian`
                action_btn.disabled = true;
                
            }
            trial_count.value = tries;
        
}
 

