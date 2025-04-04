// Rock, Paper, Scissors constant variables
const ROCK = "rock"; 
const PAPER = "paper";
const SCISSORS = "scissors";


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}