computer = 0
human = 0
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors")
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

// //Function for playing a round, it takes choices and finds the winner and adds 1 to their score
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log("Draw");
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        human++;
        console.log(`${humanChoice} beats ${computerChoice}, You win!`);
    } else {
        computer++;
        console.log(`${computerChoice} beats ${humanChoice}, You lose!`);
    }    
}

rock.addEventListener("click", () => {playRound("rock",getComputerChoice())});
paper.addEventListener("click", () => {playRound("paper",getComputerChoice())});
scissors.addEventListener("click", () => {playRound("scissors",getComputerChoice())})
