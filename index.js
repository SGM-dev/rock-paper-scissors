const weapons = ["rock", "paper", "scissors"]

// randomize computer choice
function getComputerChoice() {
    return weapons[Math.floor(Math.random() * weapons.length)]
}

const computerSelection = getComputerChoice()

//get Player Selection
let playerSelection;
let isValid = false;

while (!isValid) {
    playerSelection = prompt("What is your choice? Rock, Paper or Scissors").toLowerCase().trim()
    isValid = weapons.includes(playerSelection)
}

// Play one round 
function playRound(playerSelection, computerSelection) {

    if ((playerSelection == weapons[0] && computerSelection == weapons[1]) || (playerSelection == weapons[1] && computerSelection == weapons[2]) || (playerSelection == weapons[2] && computerSelection == weapons[0])) {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else if ((computerSelection == weapons[0] && playerSelection == weapons[1]) || (computerSelection == weapons[1] && playerSelection == weapons[2]) || (computerSelection == weapons[2] && playerSelection == weapons[0])) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection == computerSelection) {
        return `It's a tie!!`
    }
    else {
        return `There is a disturbance in the Force.`
    }
}


console.log(playRound(playerSelection, computerSelection))