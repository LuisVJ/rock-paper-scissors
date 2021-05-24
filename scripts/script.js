function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
    
}

function resetButton(button, computerButton){
    button.classList.add("btHover");
    button.classList.remove("winner");
    button.classList.remove("looser");

    computerButton.classList.remove("winner");
    computerButton.classList.remove("looser");
}

function playRound(e) {
    // Roll computer selection
    let computerSelection = computerPlay();
    let computerButton = document.querySelector(`#${computerSelection}`);

    let winner;
    if (this.value === "Rock") {
        if (computerSelection === "scissors") {
            winner = "player";
        }
        else if (computerSelection === "paper") {
            winner = "computer";
        }
        else winner = "none";
    }
    else if (this.value === "Paper") {
        if (computerSelection === "rock") {
            winner = "player";
        }
        else if (computerSelection === "scissors") {
            winner = "computer";
        }
        else winner = "none";
    }
    else { // value = scissors
        if (computerSelection === "paper") {
            winner = "player";
        }
        else if (computerSelection === "rock") {
            winner = "computer";
        }
        else winner = "none";
    }

    if (winner == "player") {
        let button = this;

        playerScore++;
        this.classList.add("winner");
        this.classList.remove("btHover");
        computerButton.classList.add("looser");
        playerDisplay.textContent = playerScore;

        // Reset button style after 1 second
        setTimeout(function() {resetButton(button, computerButton);}, 300);

        messageDisplay.textContent = `You win this round! 
        ${this.value} beats ${computerSelection}!`;
    }
    else if (winner == "computer") {
        let button = this;

        computerScore++;
        computerButton.classList.add("winner");
        this.classList.add("looser");
        this.classList.remove("btHover");
        computerDisplay.textContent = computerScore;

        // Reset button style after 1 second
        setTimeout(function() {resetButton(button, computerButton);}, 300);

        messageDisplay.textContent = `You loose this round! 
            ${computerSelection} beats ${this.value}!`;
    }
    else {
        // its a tie
        messageDisplay.textContent = `Both picked ${this.value}. It's a Tie!`;
    }

    if (playerScore == 5 || computerScore == 5) {
        // end game
        messageDisplay.textContent = `${winner.toUpperCase()} WINS!!!`;
        playerButtons.forEach(button =>
            button.removeEventListener('click', playRound));
        
        messageDisplay.style['font-size'] = "30px";
        if (winner == "player") {
            messageDisplay.style.color = "green";
        }
        else {
            messageDisplay.style.color = "red";
        }
    }
}

let playerScore = 0;
let computerScore = 0;

const playerDisplay = document.querySelector("#player-score");
const computerDisplay = document.querySelector("#computer-score");
const messageDisplay = document.querySelector("#message");

const playerButtons = document.querySelectorAll(".player-box button")
playerButtons.forEach(buton => 
    buton.addEventListener('click', playRound));

