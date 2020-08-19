// Global Scores
let globalPlayerScore = 0;
let globalComputerScore = 0;

const updateGlobalScores = () => {
  document.getElementById("global-player-score").innerHTML = globalPlayerScore;
  document.getElementById(
    "global-computer-score"
  ).innerHTML = globalComputerScore;
};

// Player function
let playerSelection = "";
const playerSelects = selection => {
  if (selection === "rock") {
    computerSelects();

    playerSelection = selection;
    scoreLogic();
    document.getElementById("player-selection").src =
      "https://leinierperez.github.io/rock-paper-scissors/images/rock.png";
  } else if (selection === "paper") {
    computerSelects();

    playerSelection = selection;
    scoreLogic();
    document.getElementById("player-selection").src =
      "https://leinierperez.github.io/rock-paper-scissors/images/paper.png";
  } else {
    computerSelects();

    playerSelection = selection;
    scoreLogic();
    document.getElementById("player-selection").src =
      "https://leinierperez.github.io/rock-paper-scissors/images/scissors_left.png";
  }
};

// Computer function
let computerSelection = "";
const computerSelects = () => {
  let computerSelections = Array("rock", "paper", "scissors");
  let randomSelection = Math.floor(Math.random() * computerSelections.length);
  if (computerSelections[randomSelection] === "rock") {
    document.getElementById("computer-selection").src =
      "https://leinierperez.github.io/rock-paper-scissors/images/rock.png";
    computerSelection = computerSelections[randomSelection];
  } else if (computerSelections[randomSelection] === "paper") {
    document.getElementById("computer-selection").src =
      "https://leinierperez.github.io/rock-paper-scissors/images/paper.png";
    computerSelection = computerSelections[randomSelection];
  } else {
    document.getElementById("computer-selection").src =
      "https://leinierperez.github.io/rock-paper-scissors/images/scissors_left.png";
    computerSelection = computerSelections[randomSelection];
  }
};

// Scores function
let playerScore = 0;
let computerScore = 0;
const scoreLogic = () => {
  //
  // if player selects rock
  //
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore = computerScore + 1;
      document.getElementById(
        "computer-score-number"
      ).innerHTML = computerScore;
    } else if (computerSelection === "scissors") {
      playerScore = playerScore + 1;
      document.getElementById("player-score-number").innerHTML = playerScore;
    }
  }
  //
  // if player selects paper
  //
  if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore = playerScore + 1;
    document.getElementById("player-score-number").innerHTML = playerScore;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore = computerScore + 1;
    document.getElementById("computer-score-number").innerHTML = computerScore;
  }
  //
  // if player selects paper
  //
  if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore = computerScore + 1;
    document.getElementById("computer-score-number").innerHTML = computerScore;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore = playerScore + 1;
    document.getElementById("player-score-number").innerHTML = playerScore;
  }
  scoresToZero();
};

// End Game function

const scoresToZero = () => {
  if (playerScore === 5) {
    globalPlayerScore = globalPlayerScore + 1;
    updateGlobalScores();
    computerScore = 0;
    playerScore = 0;
    document.getElementById("computer-score-number").innerHTML = "0";
    document.getElementById("player-score-number").innerHTML = "0";
  } else if (computerScore === 5) {
    globalComputerScore = globalComputerScore + 1;
    updateGlobalScores();
    computerScore = 0;
    playerScore = 0;
    document.getElementById("computer-score-number").innerHTML = "0";
    document.getElementById("player-score-number").innerHTML = "0";
  }
};

// Show Message When Game Finishes
const gameFinishedMessage = () => {
  console.log("game finished");
};
