let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const weapons = ["rock", "paper", "scissors"];

// randomize computer choice
function getComputerChoice() {
    return weapons[Math.floor(Math.random() * weapons.length)];
}

// Play one round
function playRound(playerSelection, computerSelection) {
    //get Player Selection

    let result;

    if (
        (playerSelection == weapons[0] && computerSelection == weapons[1]) ||
        (playerSelection == weapons[1] && computerSelection == weapons[2]) ||
        (playerSelection == weapons[2] && computerSelection == weapons[0])
    ) {
        result = `You lose this round! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    } else if (
        (computerSelection == weapons[0] && playerSelection == weapons[1]) ||
        (computerSelection == weapons[1] && playerSelection == weapons[2]) ||
        (computerSelection == weapons[2] && playerSelection == weapons[0])
    ) {
        result = `You win this round! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else if (playerSelection == computerSelection) {
        result = `It's a tie!!`;
    } else {
        result = `There is a disturbance in the Force.`;
    }
    return result
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let isValid = false;
        while (!isValid) {
            playerSelection = prompt("What is your choice? Rock, Paper or Scissors")
                .toLowerCase()
                .trim();
            isValid = weapons.includes(playerSelection);
        }
        computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore === computerScore) {
        return `Game Tied!!`
    } else if (playerScore > computerScore) {
        return `Player wins the game!`
    } else if (computerScore > playerScore) {
        return `Computer wins the game!`
    }

}

console.log(game());
