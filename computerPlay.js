let matches = 0;
let compCount = 0;
let yourCount = 0;

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
    if ((userSelection === "rock" && compSelection === "scissors")||(userSelection === "paper" && compSelection === "rock") || (userSelection === "scissors" && compSelection === "paper")){
        yourCount +=1;
        matches +=1;
        document.getElementById("updateYourScore").innerHTML = yourCount;
        document.getElementById("updatePrompt").innerHTML = "you win";
    }else if (userSelection === compSelection){
        matches +=1;
        document.getElementById("updatePrompt").innerHTML = "it's a draw";
    }else{
        compCount +=1;
        matches +=1;
        document.getElementById("updateCompScore").innerHTML = compCount;
        document.getElementById("updatePrompt").innerHTML = "you lose";
    }
}

function checker(userInput){
    if(matches < 5){
        game(userInput)
    }else{
        if(compCount > yourCount){
            document.getElementById("final").innerHTML = "sorry you lost";
        }else{
            document.getElementById("final").innerHTML = "congrats you won";
        }
    }
}

function game(userInput){
    let comp = compSelection();
    computerPlay(userInput, comp);
}

function totalGame(){
    document.getElementById("rock").addEventListener("click", ()=>{
        checker("rock")});      
    document.getElementById("paper").addEventListener("click", ()=>{
        checker("paper")});
    document.getElementById("scissors").addEventListener("click", ()=>{
        checker("scissors")}); 
} 

    

totalGame();

