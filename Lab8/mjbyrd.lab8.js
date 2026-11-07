
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const userEmoji = document.getElementById("user-emoji");
const computerEmoji = document.getElementById("computer-emoji");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerAnnouncement = document.getElementById("winner-announcement");

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];
const emojiMap = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();

    // Updates emojis
    userEmoji.textContent = emojiMap[userChoice];
    computerEmoji.textContent = emojiMap[computerChoice];

    userChoiceDisplay.textContent = userChoice.toUpperCase();
    computerChoiceDisplay.textContent = computerChoice.toUpperCase();

    // Determines the winner and updates the scores
    if (userChoice === computerChoice) {
        winnerAnnouncement.textContent = "It's a TIE!";
        winnerAnnouncement.style.color = "#a0a0c0";
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        winnerAnnouncement.textContent = "You win this round!";
        winnerAnnouncement.style.color = "#00f2fe";
        playerScore++;
        playerScoreSpan.textContent = playerScore;
    }
    else {
        winnerAnnouncement.textContent = "Computer wins this round!";
        winnerAnnouncement.style.color = "#f20000";
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }
}

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

