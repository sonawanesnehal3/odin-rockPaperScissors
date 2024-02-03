
let choices = ['rock', 'paper', 'scissor'];

function getComputerChoice(){
    //console.log("Hello World!!");
    console.log("Computer choice is : " , choices[Math.floor(Math.random() * choices.length)]);
    return choices[Math.floor(Math.random() * choices.length)];
}

const playerSelection = "rock";
console.log("Player choice is : " , playerSelection);
//let computerChoice = getComputerChoice();
let playerscore = 0;

function playRound(playerSelection){
    let computerChoice = getComputerChoice();
    if(computerChoice == playerSelection){
        console.log("It's a tie!");
        return playerscore;
    }
    else if((computerChoice === 'paper' && playerSelection === 'rock') || (computerChoice === 'rock', playerSelection === 'scissor') || (computerChoice === 'scissor' && playerSelection === 'paper')){
        console.log("Computer won the round!");
        return playerscore;
    }

    else if((computerChoice === 'rock' && playerSelection === 'paper') || (computerChoice === 'scissor' && playerSelection === 'rock') || (computerChoice === 'paper' && playerSelection === 'scissor')){
        console.log("You won the round!");
        return playerscore++;
    }
}

//console.log(playRound(playerSelection,computerChoice));
function playGame(playerSelection){
    
    for (let i = 0; i < 5; i++) {
        console.log("Playcount : " , i+1);
        playRound(playerSelection);
    }
    console.log("Player score = " , playerscore);
    if(playerscore > 2){
            console.log("You won the Game!");
    }
    else{
            console.log("You could not win!");
    }  
}

playGame(playerSelection);