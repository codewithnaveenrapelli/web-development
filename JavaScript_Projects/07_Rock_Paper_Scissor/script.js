const btn = document.querySelectorAll("button");
const userScore = document.getElementById("user-score");
const compScore = document.getElementById("computer-score");
const result = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;

btn.forEach((button) => {
    button.addEventListener("click", () => {
        const results = playerRound(button.id, computerPlay());
        result.textContent = results;
    });
});


function computerPlay() {
    const choice = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}


function playerRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It is a tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper")
    ) {
        playerScore++;
        userScore.textContent = playerScore;
        return "You Win " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        compScore.textContent = computerScore;
        return "you lose " + computerSelection + " beats " + playerSelection;
    }
}
