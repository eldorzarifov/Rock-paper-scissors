computer = 0
human = 0
// Function that gets value by math random => getComputerChoice
    // First conditional checks value if it's between 0 and 33
    // Second conditional checks value if it's between 34 and 66
    // Third conditonal checks value if it's between 67 and 99
function getComputerChoice(){
    let choice = Math.floor(Math.random()*100)
    if(choice <= 33){
        return "rock";
    }   
    else if(choice <= 66){
        return "paper";
    }
    else{
        return "scissors";
    };
}
// console.log(getComputerChoice())
// New function for human choice => getHumanChoice
function getHumanChoice(){
    let option = prompt("Rock, Paper, Scissors");
    let fixed = option.toLowerCase().trim();
    if(fixed === "rock"){
        console.log('rock');
        return fixed;
    }
    else if(fixed === "paper"){
        console.log('paper');
        return fixed;
    }
    else if(fixed === "scissors"){
        console.log('scissors');
        return fixed;
    }
    else{
        console.log('Please choose among Rock, Paper, Scissors')
    };
}
// getHumanChoice()

// //Function for playing a round, it takes choices and finds the winner and adds 1 to their score
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("draw");
        return;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        human +=1;
        console.log("Scissors beat paper, You win!");
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        human +=1;
        console.log("Rock beats Scissors, You win!");
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        human +=1;
        console.log("Paper beats Rock, You win!");
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        computer +=1;
        console.log("Rock beats Scissors, You lose");
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        computer +=1;
        console.log("Paper beats Rock, You lose");
    }
    else{
        computer +=1;
        console.log("Scissors beat paper, You lose");
    };
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log("Computer chose " + computerSelection)
console.log(human)
console.log(computer)