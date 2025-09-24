const trial_count = document.querySelector(".trial_count")
let inputValue = document.querySelector('.input_value')
const action_btn = document.querySelector('.action_btn')
const  enter_text = document.querySelector('.enter_text')


let tries = 5;
let computer_choice = Math.floor(Math.random() * 10) + 1



trial_count.value = tries;
enter_text.textContent = "Enter a number from 1 to 10 to play"

function check_values(){

    const userGuess = parseInt(inputValue.value)

    if(isNaN(userGuess) || userGuess < 1 || userGuess > 10 ){
        enter_text.textContent = "input a valid number to play"
        return;

    }
    
    if(userGuess === computer_choice){
        enter_text.textContent = "congrations! you got the lucky number" ;
        action_btn.textContent = "Play Again"
        inputValue.disabled = true;
    }else if(tries > 1){
        tries--
        trial_count.value = tries;
        inputValue.disabled = false;
        if( userGuess > computer_choice){
            enter_text.textContent = `The number ${userGuess} is too high. Try again!!. You got ${tries} trials left.`
        }else{
            enter_text.textContent =   `The number ${userGuess} is too low. Try again!!. you got ${tries} trials left.`
        }
    }else{
        tries = 0;
        trial_count.value = tries;
        enter_text.textContent = `Game over! The lucky number was ${computer_choice}. `;
        action_btn.textContent =  "Play Again"  
        inputValue.disabled = true;     
    }
    inputValue.value = "";
}

function resetGame(){
    tries = 5;
    computer_choice = Math.floor(Math.random()*10) + 1;
    trial_count.value = tries
    enter_text.textContent = "Enter a number between 1 to 10 to play!."
    action_btn.textContent = "Guess"
    inputValue.value = "";
    inputValue.disabled = false;
    inputValue.focus()

}

action_btn.addEventListener('click', () => {
    if(action_btn.textContent === "Play Again"){
        resetGame();
    }else{
        check_values()
    }
})



inputValue.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        if (action_btn.textContent === "PlayAgain") {
            resetGame();
        } else {
            check_values();
        }
    }
});
