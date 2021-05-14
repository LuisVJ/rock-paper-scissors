function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "Scissors") {
            return "player";
        }
        else if (computerSelection === "Paper") {
            return "computer";
        }
        else return "Tie!";
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Rock") {
            return "player";
        }
        else if (computerSelection === "Scissors") {
            return "computer";
        }
        else return "Tie!";
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "Paper") {
            return "player";
        }
        else if (computerSelection === "Rock") {
            return "computer";
        }
        else return "Tie!";
    }
    else {
        return "Invalid option."
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let computerSelection;
    let result;
    while (playerScore < 3 && computerScore < 3) {
        playerSelection = prompt("Choose rock, paper or scissors: ");
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if (result == "player") {
            playerScore++;
            console.log("Player wins round!");
        }
        else if (result == "computer") {
            computerScore++;
            console.log("Computer wins round");
        }
        else {
            console.log(result);
        }
        console.log(`Current score: ${playerScore}:${computerScore}`);
    }

    let winner = playerScore > computerScore ? "Player" : "Computer";
    console.log(`Final score is: ${playerScore}:${computerScore}.
    ${winner} wins!!`)
}

game();