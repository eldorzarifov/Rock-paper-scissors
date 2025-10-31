let human = 0
let computer = 0
// Function that gets value by math random => getComputerChoice
    // First conditional checks value if it's between 0 and 33
    // Second conditional checks value if it's between 34 and 66
    // Third conditonal checks value if it's between 67 and 99

function getComputerChoice(){
    choice = Math.floor(Math.random()*100)
    if(choice >= 0 && choice <= 33){
        choice = "rock";
        return choice;
    }   
    else if(choice >=34 && choice <=66){
        choice = "paper"
        return choice;
    }
    else{
        choice = "scissors";
        return choice;
    };
    
}
console.log(getComputerChoice())
// New function for human choice => getHumanChoice
function getHumanChoice(){
    let option = prompt("Rock, Paper, Scissors");
    if(option.toLowerCase() === "rock"){
        console.log('rock');
        return option;
    }
    else if(option.toLowerCase() === "paper"){
        console.log('paper');
        return option;
    }
    else if(option.toLowerCase() === "scissors"){
        console.log('scissors');
        return option;
    }
    else{
        console.log('Please choose among Rock, Paper, Scissors')
    }
}
// getHumanChoice() 

// //Function for playing a round, it takes choices and finds the winner and adds 1 to their score
function playRound(humanChoice, computerChoice) {
    if(humanChoice === "rock" && computerChoice === "paper"){
        computer += 1;
        console.log("Computer wins");
        return;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        human +=1;
        console.log("Human wins");
        return;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        human +=1;
        console.log("Human wins");
        return;
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        computer += 1;
        console.log("Computer wins");
        return;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        computer += 1;
        console.log("Computer wins");
        return;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        human +=1;
        console.log("Human wins");
        return;
    }
    else{
        console.log("Draw");
        return; 
    };
}


playRound(getHumanChoice(), getComputerChoice())
console.log(human)
console.log(computer)