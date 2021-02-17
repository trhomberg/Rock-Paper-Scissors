let playerScore = 0;
let cpuScore = 0;
let roundNum = 1;

// Player buttons
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// Score
const userScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#cpu-score");
const tie = document.querySelector("#tie");

//round
const round = document.querySelector(".round");

function computerPlay(){
    const game = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * game.length);
    return game[random];
}

function playRound(playerSelection, computerSelection){
    playerSelection = this.dataset.button;
    // computer chooses rock paper or scissors
    computerSelection = computerPlay();

    if((playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "rock") && (playerScore <= 5 || cpuScore <= 5)){
        playerScore++;
        userScore.textContent = `Score: ${playerScore}`;
        roundNum++;
        if(playerScore >= 5){
            round.textContent = `You win, ${playerSelection} beats ${computerSelection}. ${cpuScore} to ${playerScore}`;
            rock.removeEventListener("click", playRound);
            paper.removeEventListener("click", playRound);
            scissors.removeEventListener("click", playRound);
        } else {
            round.textContent = `${playerSelection} beats ${computerSelection}`;
        }
    } else if((playerSelection === "scissors" && computerSelection === "rock") || 
    (playerSelection === "paper" && computerSelection === "scissors") || 
    (playerSelection === "rock" && computerSelection === "paper") && (playerScore <= 5 || cpuScore <= 5)){
        cpuScore++;
        computerScore.textContent = `Score: ${cpuScore}`;
        roundNum++;
        if(cpuScore >= 5){
            round.textContent = `You lost, ${computerSelection} beats ${playerSelection}. ${cpuScore} to ${playerScore}`;
            rock.removeEventListener("click", playRound);
            paper.removeEventListener("click", playRound);
            scissors.removeEventListener("click", playRound);
        } else {
            round.textContent = `${playerSelection} beats ${computerSelection}`;
        }
    } else {
        round.textContent = `It's a tie. Round: ${roundNum}`;
        roundNum++;
    }
}

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);