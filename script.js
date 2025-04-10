const ROCK = "rock"; 
const PAPER = "paper";
const SCISSORS = "scissors";

const ROCK_CHOICE = document.querySelector(".btn-rock");
const PAPER_CHOICE = document.querySelector(".btn-paper");
const SCISSOR_SCHOICE = document.querySelector(".btn-scissors");

const PASTEL_GREEN = "#A8E6CF";
const PASTEL_RED = "#F4CCCC";
const PASTEL_YELLOW = "#FFF9A5";

const MIN_CHOICE = 1;
const MAX_CHOICE = 4;

const roundResultContainer = document.querySelector(".round-result-container");

const resultInfo = document.createElement("p");
resultInfo.classList.add("result-info");

// Main()
let humanScore = 0
let computerScore = 0

startGame();

function mainGame(choice) {
    let computerChoice = getComputerChoice();

    playRound(choice, computerChoice);    

    displayScore();
    selectWinnerByScore(humanScore, computerScore);
    resetScore(); 
}

function roundResult(outcome) {
    if(outcome === "win") {
        resultInfo.textContent = "You win this round!";
        resultInfo.style.backgroundColor = PASTEL_GREEN;
      
        roundResultContainer.appendChild(resultInfo);
    }
    else if(outcome === "lost") {
        resultInfo.textContent = "You lost this round!";
        resultInfo.style.backgroundColor = PASTEL_RED;
      
        roundResultContainer.appendChild(resultInfo);
    }
    else {
        resultInfo.textContent = "This round is a tie!";
        resultInfo.style.backgroundColor = PASTEL_YELLOW;
      
        roundResultContainer.appendChild(resultInfo);
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
        roundResult("win");
        humanScore++;
        return  
    }
    else if(humanChoice === PAPER && computerChoice === ROCK) {
        roundResult("win");
        humanScore++;
        return 
    }
    else if(humanChoice === SCISSORS && computerChoice === PAPER) {
        roundResult("win");
        humanScore++;
        return;
    }
    // both sides gain no points when tied
    else if(humanChoice === computerChoice) {
        roundResult();
        return;
    }
    else {
        roundResult("lost");
        computerScore++;
        return; 
    }
}

function startGame() {
    ROCK_CHOICE.addEventListener("click", () => mainGame(ROCK));
    PAPER_CHOICE.addEventListener("click", () => mainGame(PAPER));
    SCISSOR_SCHOICE.addEventListener("click", () => mainGame(SCISSORS));
}

function selectWinnerByScore(humanScore, computerScore) {
    if(humanScore === 5) {
        document.body.style.backgroundColor = PASTEL_GREEN;
        alert("You won the match");
        window.location.href = "https://media1.tenor.com/m/qcLd8VXvY-AAAAAC/happy-cat-cat.gif"
    }
    else if(computerScore === 5) {
        document.body.style.backgroundColor = PASTEL_RED;
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