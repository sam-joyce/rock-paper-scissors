const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const popup = document.querySelector('.popup');
const scoreboard = {
  player: 0,
  computer: 0
}

// Function to play

const playGame = (e) => {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = decideWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

// Computer choice 

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);;
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Game winner

const decideWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return 'draw';
  } else if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
    return 'computer';
  } else {
    return 'player';
  }
}

const showWinner = (winner, computerChoice) => {
  if (winner === 'player') {
    scoreboard.player++;
    result.innerHTML = `
    <h1 class="text-win">Well Done, you won by chance.</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose ${computerChoice.toUpperCase()}</p>`;
  } else if (winner === 'computer') {
    scoreboard.computer++;
    result.innerHTML = `
    <h1 class="text-lose">You lost, better luck next time.</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose ${computerChoice.toUpperCase()}</p>`;
  } else {
    result.innerHTML = `
    <h1>You didn't lose.... but you didn't win either....</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose ${computerChoice.toUpperCase()}</p>`;
  }
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;

  popup.style.display = 'block';
}

// Reset game

const restartGame = () => {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
  <p>Player: 0</p>
  <p>Computer: 0</p>`
}


// Clear popup

const clearPopup = (e) => {
  if (e.target == popup) {
    popup.style.display = 'none';
  }
}

// Event listeners

choices.forEach(choice => choice.addEventListener('click', playGame));
window.addEventListener('click', clearPopup);
restart.addEventListener('click', restartGame);