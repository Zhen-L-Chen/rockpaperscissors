const prompts = require('prompts');
  
function computerPlay(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return score = "player";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return score = "player";
    } else if (playerSection === "scissors" && computerSelection === "paper"){
        return score = "player";
    } else if (playerSection === computerSelection){
        return score = "draw";
    } else{
        return score = "computer"
    }
}

function userSelection() {
    const selection = prompts("write down your choice between: rock, paper or scissors");
    return selection;
}

function compSelection() {
    const compPlay = ["rock", "paper", "scissors"];
    const selection = compPlay[Math.random()*compPlay.length];
    return selection;
}

function winComparison(playerScore, computerScore){
    if(playerScore > computerScore){
        return "you win";
    }else if(playerScore === computerScore){
        return "it is a draw";
    }else{
        return "you lost";
    }
}

function game() {
    let count = 0;
    let playerScore = 0;
    let draw = 0;
    let computerScore = 0;
    while(count < 5) {
        let playerSelection = userSelection();
        let computerSelection = compSelection();
        let scoring = computerPlay(playerSelection, computerSelection);
        if(scoring === "player"){
            playerScore += 1;
        }else if(scoring === "draw"){
            draw += 1;
        }else{
            computerScore +=11;
        }
        count +=1;
    }
    console.log(winComparison(playerScore, computerScore));
}

game();

