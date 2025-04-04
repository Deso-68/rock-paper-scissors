// Rock, Paper, Scissors constant variables
const ROCK = "rock"; 
const PAPER = "paper";
const SCISSORS = "scissors";

// For getComputerChoice min and max value
const MIN_CHOICE = 1;
const MAX_CHOICE = 4;

// Keep track of the player and computer score
let humanScore = 0
let computerScore = 0


// Main()

let computerChoice = getComputerChoice();
// console.log(computerChoice);

// Prompt the user for their move
let humanChoice = getHumanChoice();
// console.log(humanChoice);

playRound(humanChoice, computerChoice);
console.log("humanChoice: ",humanChoice, "  human: ", humanScore);
console.log("computerChoice: ",computerChoice, "  computer: ",computerScore);

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
    // both sides win if tie?
    else if(humanChoice === computerChoice) {
        ++computerScore;
        ++humanScore;
        return;
    }
    else {
        computerScore++;
        return; 
    }
}

function getHumanChoice() {
    let userChoice = prompt("Choose your move:\nrock, paper, or scissors");
    
    // checks if user clicks cancel button which makes the variable null
    if(userChoice === null) {
        alert("You clicked cancel");
        return getHumanChoice();
    }

    // turns the string into lowercase
    userChoice = userChoice.toLowerCase();

    // validate if user input is valid
    switch (userChoice) {
        case ROCK:
            return ROCK;
        case PAPER:
            return PAPER;
        case SCISSORS:
            return SCISSORS;
        default:
            alert("Invalid Input");

             // call the function again if invalid input
            return getHumanChoice(); 
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