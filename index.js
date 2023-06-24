let firstCard = getRandom();
let secondCard = getRandom();
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message ="";
let messageEL=document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

function getRandom(){
    
}

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent="Cards"

    for(i=0;i<cards.length;i++){
        cardsEl.textContent +=  cards[i]+" "

    }

    sumEl.textContent="Sum: " + sum


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

function newCard(){
    let card = getRandom();
    sum+= card
    cards.push(card)

    renderGame()

}


