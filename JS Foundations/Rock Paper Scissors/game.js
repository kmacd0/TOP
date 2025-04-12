function getComputerChoice() {
    const v = Math.floor(Math.random() * 3);
    if (v === 0) return "rock";
    else if (v === 1) return "paper";
    return "scissors";
}
const computerChoice = getComputerChoice();

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors").toLowerCase();
}
const humanChoice = getHumanChoice();

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
        );
    } else {
        return console.log(
            `You chose ${humanChoice} against ${computerChoice}. Computer wins.`,
        );
    }
}

playRound(humanChoice, computerChoice);
