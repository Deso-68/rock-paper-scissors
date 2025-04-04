// Rock, Paper, Scissors constant variables
const ROCK = "rock"; 
const PAPER = "paper";
const SCISSORS = "scissors";

// For getComputerChoice min and max value
const MIN_CHOICE = 1;
const MAX_CHOICE = 4;


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getcomputerChoice() {
    randomInt = getRandomInt(1, 4);
    if(randomInt === 1) {
        return 
    }
    
    return;
}