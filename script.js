const ROCK = "rock"; 
const PAPER = "paper";
const SCISSORS = "scissors";

const rockChoice = document.querySelector(".btn-rock");
const paperChoice = document.querySelector(".btn-paper");
const scissorsChoice = document.querySelector(".btn-scissors");

const MIN_CHOICE = 1;
const MAX_CHOICE = 4;


// Keep track of the player and computer score
let humanScore = 0
let computerScore = 0


// Main()
startGame();

function mainGame(choice) {
    let computerChoice = getComputerChoice();

    playRound(choice, computerChoice);    

    displayScore();
    selectWinnerByScore(humanScore, computerScore);
    resetScore(); 
}

function roundResult(outcome) {
    if(outcome === win) {

    }
    else if(outcome === lost) {

    }
    else {

    }
}

function resetScore() {
    if (humanScore === 5 || computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
    }
}

function displayScore() {
    const displayHumanScore = document.querySelector(".human-score-item");
    const displayComputerScore = document.querySelector(".computer-score-item");

    displayHumanScore.textContent = `${humanScore}`;
    displayComputerScore.textContent = `${computerScore}`;
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
    if(humanScore === 5) {
        document.body.style.backgroundColor = "green";
        alert("You won the match");
    }
    else if(computerScore === 5) {
        document.body.style.backgroundColor = "red";
        alert("You lost the match");
        window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
    }
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