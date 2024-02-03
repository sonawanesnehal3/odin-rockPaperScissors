let computerChoice;
let choices = ['Rock', 'Paper', 'Scissor'];

function getComputerChoice(){
    console.log("Hello World!!");
    console.log(choices[Math.floor(Math.random() * choices.length)]);
    return choices[Math.floor(Math.random() * choices.length)];
}

getComputerChoice();