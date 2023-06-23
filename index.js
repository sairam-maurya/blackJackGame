let firstCard = 16;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message ="";
let messageEL=document.getElementById("message-el")



function startGame(){

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    
    } else if (sum === 21) {
        message="Wohooo! You've got blackjack"
        hasBlackJack = true
    
    } else {
    
        message= "you're out of the game"
        isAlive = false
    
    }
    messageEL.textContent=message
}


