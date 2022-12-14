let cardsEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message")
let profileEl = document.getElementById("profile")
let isAlive = false
let hasBlackJack = false
let message = ""
let cards = []
let sum = 0
const profile = { player: "jim", chips: 220 }
profileEl.textContent += " " + profile.player + " ($ " + profile.chips + ")"

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return (11)

    } else if (randomNumber > 10) {
        return (10)
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards : "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " . "
    }
    sumEl.textContent = "sum : " + sum
    if (sum < 21) {
        message = "do you want to draw a new card?"
    }
    else if (sum == 21) {
        message = "You have Black Jack "
        hasBlackJack = true
    }
    else {
        message = " you are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let getNewCard = getRandomNumber()
        sum += getNewCard
        cards.push(getNewCard)
        renderGame()
    }
}