function getComputerChoice() {
    const v = Math.floor(Math.random() * 3);
    if (v === 0) return "rock";
    else if (v === 1) return "paper";
    return "scissors";
}

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log(
            `You chose ${humanChoice} against ${computerChoice}. Draw.`,
        );
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return console.log(
            `You chose ${humanChoice} against ${computerChoice}. You win.`,
            humanScore++,
        );
    } else {
        return console.log(
            `You chose ${humanChoice} against ${computerChoice}. Computer wins.`,
            computerScore++,
        );
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        console.log(
            `Round ${
                i + 1
            } of 5\nYou: ${humanScore} Computer: ${computerScore}`,
        );
    }
    compareScores();
}

function compareScores() {
    if (humanScore > computerScore) {
        console.log("Congratulations, you won!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins.");
    } else if (humanScore === computerScore) {
        console.log("Game draw.");
    }
}

playGame();
