const roundsPerGame = 5;

let round = 1;
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice){

    
    let roundResult = null;
    let compChoiceDisplay = document.createElement('p');
    compChoiceDisplay.textContent = `Computer chooses ${computerChoice}`;
    let playChoiceDisplay = document.createElement('p');
    playChoiceDisplay.textContent = `Player chooses ${playerChoice}`;

    if (playerChoice == computerChoice){
        return 'Tie!'
    }
    if (playerChoice == 'Rock'){
        if (computerChoice == 'Scissors'){playerScore += 1; roundResult = 'Rock beats Scissors!'}
        if (computerChoice == 'Paper'){computerScore += 1;roundResult = 'Paper beats Rock!'}
    }
    if (playerChoice == 'Paper'){
        if (computerChoice == 'Rock'){playerScore += 1;roundResult = 'Paper beats Rock!'}
        if (computerChoice == 'Scissors'){computerScore += 1;roundResult = 'Scissors beats Paper!'}
    }
    if (playerChoice == 'Scissors'){
        if (computerChoice == 'Paper'){playerScore += 1;roundResult = 'Scissors beats Paper!'}
        if (computerChoice == 'Rock'){computerScore += 1;roundResult = 'Rock beats Scissors!'}
    }

    const div = document.querySelector('#results')
    div.innerHTML = roundResult;

    round += 1;
    console.log(round)
    if (round > roundsPerGame){
        endGame()
    }
}

//console.log(playRound(playerSelection, computerSelection)) //need to fix this to grab button selection below
console.log(`Player Score: ${playerScore}`)
console.log(`Computer Score: ${computerScore}`)   

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => playRound(button.className,getComputerChoice()))
})

function getComputerChoice() {
    let x = Math.random();
    if (x < 1/3) {return "Rock"}
    if (x > 2/3) {return "Paper"}
    else {return "Scissors"}
}

function endGame() {
    if (playerScore == computerScore){
        console.log('The game was a tie')
    }
    else if (playerScore > computerScore) {
        console.log('The Player wins!')
    } 
    else {
        console.log('The Computer wins!')
    }
}