// Rock, Paper, Scissors constant variables
const ROCK = "rock"; 
const PAPER = "paper";
const SCISSORS = "scissors";
const rockChoice = document.querySelector(".btn-rock");
const paperChoice = document.querySelector(".btn-paper");
const scissorsChoice = document.querySelector(".btn-scissors");

// For getComputerChoice min and max value
const MIN_CHOICE = 1;
const MAX_CHOICE = 4;

// Number of Rounds
const ROUNDS = 1;

// Keep track of the player and computer score
let humanScore = 0
let computerScore = 0


// Main()
startGame();

function mainGame(choice) {
    for (let i = 0; i < ROUNDS; i++) {
        let computerChoice = getComputerChoice();

        // Prompt the user for their move
        let humanChoice = choice;

        playRound(humanChoice, computerChoice);       
    }
    selectWinnerByScore(humanScore, computerScore);
    resetScore();
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === ROCK && computerChoice === SCISSORS) {
        humanScore++;
        return  
    }
    else if(humanChoice === PAPER && computerChoice === ROCK) {
        humanScore++;
        return 
    }
    else if(humanChoice === SCISSORS && computerChoice === PAPER) {
        humanScore++;
        return;
    }
    // both sides gain no points when tied
    else if(humanChoice === computerChoice) {
        return;
    }
    else {
        computerScore++;
        return; 
    }
}

function startGame() {
    rockChoice.addEventListener("click", () => mainGame(ROCK));
    paperChoice.addEventListener("click", () => mainGame(PAPER));
    scissorsChoice.addEventListener("click", () => mainGame(SCISSORS));
}

function selectWinnerByScore(humanScore, computerScore) {
    if(humanScore > computerScore) return console.log("You win the game!");
    else if(humanScore < computerScore) return console.log("You lose the game!");
    else return console.log("It's a draw!")
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getComputerChoice() {
    let randomInt = getRandomInt(MIN_CHOICE, MAX_CHOICE);
    // console.log(randomInt);

    if(randomInt === 1) {
        return ROCK;
    }
    else if(randomInt === 2) {
        return PAPER;
    }
    else {
        return SCISSORS;
    }
}