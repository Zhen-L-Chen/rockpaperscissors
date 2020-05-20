let count = 0;

function rockInput(){
    //input for rock
    let userInput = "rock";
    return userInput;
}

function paperInput(){
    //input for paper
    let userInput = "paper";
    return userInput;
}

function scissorsInput(){
    //input for scissors
    let userInput = "scissors";
    return userInput;
}

function compSelection(){
    const compArr = ["rock", "paper", "scissors"];
    let compSelection = compArr[Math.floor(Math.random()*compArr.length)];
    return compSelection;
}

function computerPlay(userSelection, compSelection){
    if (userSelection === "rock" && compSelection === "scissors"){
        document.getElementById("updatePrompt").innerHTML = "you win";
    }else if (userSelection === "paper" && compSelection === "rock"){
        document.getElementById("updatePrompt").innerHTML = "you win";
    }else if (userSelection === "scissors" && compSelection === "paper"){
        document.getElementById("updatePrompt").innerHTML = "you win";
    }else if (userSelection === compSelection){
        document.getElementById("updatePrompt").innerHTML = "it's a draw";
    }else{
        document.getElementById("updatePrompt").innerHTML = "you lose";
    }
}


function game(userInput){
    let comp = compSelection();
    computerPlay(userInput, comp);
    count += 1;
    document.getElementById("updateYourScore").innerHTML = count;
}


document.getElementById("rock").addEventListener("click", ()=>{
    game("rock")});

document.getElementById("paper").addEventListener("click", ()=>{
    game("paper")});

document.getElementById("scissors").addEventListener("click", ()=>{
    game("scissors")});   


    