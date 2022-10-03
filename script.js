

// create the function to get a computer choice
function getComputerChoice() {
    //put Rock, Paper, Scissors, into an array
    const options = ["rock", "paper", "scissors"];
    //randomly select item's index # by random # * array length
    randomOption = options[Math.floor(Math.random() * options.length)];
    //return the selected item
    return randomOption;
}

// console.log(getComputerChoice());

//ask user for input
const input = prompt();
let playerSelection = input.toLowerCase();

let computerSelection = getComputerChoice();

// create a function that takes user input and computer choice as the parameters
function round(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You Win!";
        } else if (computerSelection === "paper") {
            return "You Lose!";
        } else if (computerSelection === "rock") {
            return "It's a Draw!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win!";
        } else if (computerSelection === "scissors") {
            return "You Lose!";
        } else if (computerSelection === "paper") {
            return "It's a Draw!";
        }
    } else if (playerSelection === "scissors") { 
        if (computerSelection === "paper") {
            return "You Win!";
        } else if (computerSelection === "rock") {
            return "You Lose!";
        } else if (computerSelection === "scissors") {
            return "It's a Draw!";
        }
    } 
}


console.log(round(playerSelection, computerSelection));
console.log("You Picked: ", playerSelection);
console.log("Computer Picked: ", computerSelection);

