const chooseRock = document.querySelector("#rock");
chooseRock.addEventListener("click", () => {
    humanChoice = "rock";
    playGame();
});

const choosePaper = document.querySelector("#paper");
choosePaper.addEventListener("click", () => {
    humanChoice = "paper";
    playGame();
});

const chooseScissors = document.querySelector("#scissors");
chooseScissors.addEventListener("click", () => {
    humanChoice = "scissors";
    playGame();
});

function getComputerChoice() {
    const v = Math.floor(Math.random() * 3);
    if (v === 0) return "rock";
    else if (v === 1) return "paper";
    return "scissors";
}

const humanScoreText = document.querySelector("#humanScore");
const computerScoreText = document.querySelector("#computerScore");
const roundNumber = document.querySelector("#roundNumber");
const roundResult = document.querySelector("#roundResult");

let humanScore = 0;
let computerScore = 0;
let gameRound = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return (roundResult.textContent = `You chose ${humanChoice} against ${computerChoice}. Draw.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return (
            (roundResult.textContent = `You chose ${humanChoice} against ${computerChoice}. You win.`),
            humanScore++,
            (humanScoreText.textContent = `Your score: ${humanScore}`)
        );
    } else {
        return (
            (roundResult.textContent = `You chose ${humanChoice} against ${computerChoice}. Computer wins.`),
            computerScore++,
            (computerScoreText.textContent = `Computer score: ${computerScore}`)
        );
    }
}

function playGame() {
    gameRound++;
    roundNumber.textContent = `Round: ${gameRound}`;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    if (gameRound === 10) {
        endGame();
    }
}

function endGame() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;

    if (humanScore > computerScore) {
        roundResult.textContent = "Congratulations, you won!";
    } else if (humanScore < computerScore) {
        roundResult.textContent = "Computer wins.";
    } else if ((humanScore = computerScore)) {
        roundResult.textContent = "Game draw.";
    }
}
