// Function that gets value by math random => getComputerChoice
    // First conditional checks value if it's between 0 and 33
    // Second conditional checks value if it's between 34 and 66
    // Third conditonal checks value if it's between 67 and 99
function getComputerChoice(){
    choice = Math.floor(Math.random()*100)
    if(choice <= 33){
        choice = "rock";
        return choice;
    }   
    else if(choice <= 66){
        choice = "paper"
        return choice;
    }
    else{
        choice = "scissors";
        return choice;
    };
}
console.log(getComputerChoice())