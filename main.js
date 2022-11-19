let cards = []
let totalBe = 0
let gotBlackJack = false 
let stillInGame = false
let message = ""

let playTime = document.getElementById("play-time")
let totaly = document.getElementById("totaly")
let card = document.getElementById("card")

let player1 = {
    name: "You",
    money: 100

}

let player = document.getElementById("player")
player.textContent = player1.name + ": €" + player1.money;

function pickRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1

    if (number > 10) {
        return 10
    } else if (number === 1) {
        return 11
    } else {
        return number
    }

     
}

function getPlayMe() {
    stillInGame = true 
    let firstCard = pickRandomCard()
    let secondCard = pickRandomCard()
    cards = [firstCard, secondCard]
    totalBe = firstCard + secondCard;
    continueGame()
}


function continueGame() {
    card.textContent = "Kort: "
    for (let i = 0; i < cards.length; i++) {
        card.textContent += cards[i] + " "
    }
    
    totaly.textContent = "Totalt: " + totalBe
    if (totalBe <= 18) {
        message = 'Do you want an extra card?'
    
    } else if (totalBe === 21) {
        message = 'You got Blackjack!!!'
        gotBlackJack = true
    
    } else {
        message = 'You are out of the game...'
        stillInGame = false
    } 
    playTime.textContet = message;
    
}

function getNewCard() {

    if (stillInGame === true && gotBlackJack === false) {
        let extraCard = pickRandomCard()
        totalBe += extraCard
        cards.push(card)
        continueGame()
    }
}



