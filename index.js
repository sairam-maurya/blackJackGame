let player={
    name:"Sai Ram",
    chips:"2000"
}
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEL = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips

function getRandom() {

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandom();
    let secondCard = getRandom();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards"

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "

    }

    sumEl.textContent = "Sum: " + sum


    if (sum <= 20) {
        message = "Do you want to draw a new card?"

    } else if (sum === 21) {
        message = "Wohooo! You've got blackjack"
        hasBlackJack = true

    } else {

        message = "you're out of the game"
        isAlive = false

    }
    messageEL.textContent = message
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {

        let card = getRandom();
        sum += card
        cards.push(card)

        renderGame()
    }

}





