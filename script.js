function getComputerChoice() {
    let x = Math.random();
    if (x < 1/3) {return "Rock"}
    if (x > 2/3) {return "Paper"}
    else {return "Scissors"}
}
console.log(getComputerChoice())

function getUserChoice() {
    while (true){
        let input = prompt('Rock, Paper, Scissors?');
        lowerInput = input.toLowerCase()
        if (lowerInput == 'rock'){return 'Rock'}
        if (lowerInput == 'paper'){return 'Paper'}
        if (lowerInput == 'scissors'){return 'Scissors'}
    }
}

console.log(getUserChoice())