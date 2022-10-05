function getComputerChoice() {
    let selection = Math.floor(Math.random() * 9);
    if (selection < 3) {
        return "rock";
    }
    else if (selection > 2 & selection < 7) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return "That's a tie!"
    }
    else if (computerSelection === "rock" & playerSelection === "scissors") {
        return "You lose!"
    }
    else if (computerSelection === "rock" & playerSelection === "paper") {
        return "You win!"
    }
    else if (computerSelection === "scissors" & playerSelection === "paper") {
        return "You lose!"
    }
    else if (computerSelection === "paper" & playerSelection === "scissors") {
        return "You win!"
    }
    else if (computerSelection === "paper" & playerSelection === "rock") {
        return "You lose!"
    }
    else if (computerSelection === "scissors" & playerSelection === "rock") {
        return "You win!"
    }
}

let playerScore = 0
let computerScore = 0

function game() {
    let computerSelection = ""
    let playerSelection = ""
    let outcome = ""

    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Choose your weapon").toLowerCase();
        console.log(playerSelection + "VS" + computerSelection)
        outcome = playRound(computerSelection, playerSelection)

        if (outcome === "You win!") {
            playerScore += 1
            console.log(outcome + " " + "Player Score" + " " + playerScore + " " + "Computer Score" + " " + computerScore)
        }
        else if (outcome === "You lose!") {
            computerScore += 1
            console.log(outcome + " " + "Player Score" + " " + playerScore + " " + "Computer Score" + " " + computerScore)
        }
        else {
            console.log(outcome + " " + "Player Score" + " " + playerScore + " " + "Computer Score" + " " + computerScore)
        }
    }
    if (playerScore > computerScore) {
        return "You won the series!"
    }
    else if (computerScore > playerScore) {
        return "You lost the series!"
    }
    else {
        return "You tied the series!"
    }
}

console.log(game())