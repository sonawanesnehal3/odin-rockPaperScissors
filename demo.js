
let choices = ['rock', 'paper', 'scissor'];
let playerScore = 0;
let computerScore = 0;
let computerChoice;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');
const playerDecision = document.querySelector('.player-decision');
const computerDecision = document.querySelector('.computer-decision');
const result = document.querySelector('.winner');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const restartButton = document.querySelector('#restart');

playerScoreElement.textContent = playerScore;
computerScoreElement.textContent = computerScore;


function getComputerChoice(){
    //console.log("Hello World!!");
   //console.log("Computer choice is : " , choices[Math.floor(Math.random() * choices.length)]);
    return choices[Math.floor(Math.random() * choices.length)];
}

rockButton.addEventListener('click', function player(){
    if (playerScoreElement.textContent < 5 && computerScoreElement.textContent < 5){
        playerSelection = rockButton.value;
        playRound(playerSelection); 
    }
});

paperButton.addEventListener('click', function player(){
    if (playerScoreElement.textContent < 5 && computerScoreElement.textContent < 5){
        playerSelection = paperButton.value;
        playRound(playerSelection); 
    }
});

scissorButton.addEventListener('click', function player(){
    if (playerScoreElement.textContent < 5 && computerScoreElement.textContent < 5){
        playerSelection = scissorButton.value;
        playRound(playerSelection); 
    }
});

restartButton.addEventListener('click', function restart(){
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    result.textContent = "";
    result.setAttribute('style','color: black')
    playerDecision.textContent = "";
    computerDecision.textContent = "";
})

function playRound(playerSelection){
    computerChoice = getComputerChoice();
    playerDecision.textContent = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerDecision.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if(computerChoice == playerSelection){
        result.textContent = "It's a tie!";
    }
    else if((computerChoice === 'paper' && playerSelection === 'rock') || (computerChoice === 'rock', playerSelection === 'scissor') || (computerChoice === 'scissor' && playerSelection === 'paper')){
        result.textContent = "Computer won the round!";
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
    else if((computerChoice === 'rock' && playerSelection === 'paper') || (computerChoice === 'scissor' && playerSelection === 'rock') || (computerChoice === 'paper' && playerSelection === 'scissor')){
        result.textContent = "You won the round!";
        playerScore++;
        playerScoreElement.textContent = playerScore;
    }

    checkWinner();
}

function checkWinner(){
    if(playerScore == 5){
        result.textContent = "YOU WON THE GAME!!";
        result.setAttribute("style", "color: green");
    }
    else if(computerScore == 5){
        result.textContent = "COMPUTER WON THE GAME!!"
        result.setAttribute("style", "color: red");
    }
}