let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const weapons = ["rock", "paper", "scissors"];

const resultMessages = {
  playerWins: "You win this round! %s beats %s",
  computerWins: "You lose this round! %s beats %s",
  tie: "It's a tie!!",
};

// Randomize computer choice
function getComputerChoice() {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

// Determine Round winner
function determineRoundWinner(playerSelection, computerSelection) {
  //compare playerSelection and computerSelection and return the winner
  if (
    (playerSelection == weapons[0] && computerSelection == weapons[1]) ||
    (playerSelection == weapons[1] && computerSelection == weapons[2]) ||
    (playerSelection == weapons[2] && computerSelection == weapons[0])
  ) {
    return "computer";
  } else if (
    (computerSelection == weapons[0] && playerSelection == weapons[1]) ||
    (computerSelection == weapons[1] && playerSelection == weapons[2]) ||
    (computerSelection == weapons[2] && playerSelection == weapons[0])
  ) {
    return "player";
  } else {
    return "tie";
  }
}

// Update scores based on the round winner
function updateScores(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    // Prompt the player for their choice and validate it
    let isValid = false;
    while (!isValid) {
      playerSelection = prompt("What is your choice? Rock, Paper or Scissors")
        .toLowerCase()
        .trim();
      isValid = weapons.includes(playerSelection);
      if (!isValid) {
        alert("Invalid choice. Please enter 'rock', 'paper' or 'scissors'.");
      }
    }
    computerSelection = getComputerChoice();

    const roundWinner = determineRoundWinner(
      playerSelection,
      computerSelection
    );
    updateScores(roundWinner);

    // Display the result of the round
    if (roundWinner === "player") {
      alert(
        resultMessages.playerWins
          .replace("%s", playerSelection)
          .replace("%s", computerSelection)
      );
    } else if (roundWinner === "computer") {
      alert(
        resultMessages.computerWins
          .replace("%s", computerSelection)
          .replace("%s", playerSelection)
      );
    } else {
      alert(resultMessages.tie);
    }
  }
  // Determine the overall winner and return the game result
  if (playerScore === computerScore) {
    return `Game Tied!! Player: ${playerScore} Computer: ${computerScore}`;
  } else if (playerScore > computerScore) {
    return `Player wins the game!! Player: ${playerScore} Computer: ${computerScore}`;
  } else {
    return `Computer wins the game!! Player: ${playerScore} Computer: ${computerScore}`;
  }
}

alert(game());
