function GetComputerChoice() {
    let x = Math.random();
    if (x < 1/3) {return "Rock"}
    if (x > 2/3) {return "Paper"}
    else {return "Scissors"}
}
console.log(GetComputerChoice())