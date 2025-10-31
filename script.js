// Function that gets value by math random => getComputerChoice
    // First conditional checks value if it's between 0 and 33
    // Second conditional checks value if it's between 34 and 66
    // Third conditonal checks value if it's between 67 and 99
function getComputerChoice(){
    choice = Math.floor(Math.random()*100)
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
getHumanChoice()