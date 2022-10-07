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
const btn = document.querySelectorAll('button');
const scoreDiv = document.querySelector('.score')
let newScore = document.createElement('p')
let update = document.createElement('p')

function game() {
    newScore.textContent = "Score: 0 - 0"
    scoreDiv.appendChild(newScore)
    btn.forEach((btn) => {
        btn.addEventListener('click', () => {
            let playerSelection = btn.className
            let computerSelection = getComputerChoice();
            console.log(playerSelection + "VS" + computerSelection)

            if (playRound(computerSelection, playerSelection) === "You win!") {
                playerScore += 1
                newScore.textContent = "Score: " + playerScore + " - " + computerScore
                update.textContent = "You won that round!"
                scoreDiv.appendChild(newScore)
                scoreDiv.appendChild(update)
            }
            else if (playRound(computerSelection, playerSelection) === "You lose!") {
                computerScore += 1
                newScore.textContent = "Score: " + playerScore + " - " + computerScore
                update.textContent = "You lost that round!"
                scoreDiv.appendChild(newScore)
                scoreDiv.appendChild(update)
            }
            else {
                update.textContent = "You tied that round!"
                scoreDiv.appendChild(update)
            }

            if (playerScore === 5) {
                console.log("win")
                update.textContent = "You won the series!"
                return scoreDiv.appendChild(update)
                
            }
            else if (computerScore === 5) {
                console.log("lose")
                update.textContent = "You lost the series!"
                return scoreDiv.appendChild(update)
                
            }
        });
    });
}

game()