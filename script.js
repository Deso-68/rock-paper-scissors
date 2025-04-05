// Rock, Paper, Scissors constant variables
const ROCK = "rock"; 
const PAPER = "paper";
const SCISSORS = "scissors";

// For getComputerChoice min and max value
const MIN_CHOICE = 1;
const MAX_CHOICE = 4;

// Number of Rounds
const ROUNDS = 5;

// Keep track of the player and computer score
let humanScore = 0
let computerScore = 0


// Main()
mainGame();


function mainGame() {
    for (let i = 0; i < ROUNDS; i++) {
        let computerChoice = getComputerChoice();

        // Prompt the user for their move
        let humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
        console.log("humanChoice: ",humanChoice, "  human: ", humanScore);
        console.log("computerChoice: ",computerChoice, "  computer: ",computerScore);
        console.log("");        
    }
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

function logChoice(humanChoice, computerChoice) {
    return console.log(`You win! ${humanChoice} beats ${computerChoice}`);
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