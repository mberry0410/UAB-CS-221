function playRound(){
    let userInput = "";
    let isValid = false;


// User input
// will prompt the user until they choose a valid choice
while (!isValid){
    let rawInput = prompt("Enter your choice: Rock, Paper, or Scissors");

    //if user presses cancel
    if (rawInput === null){
        console.log("Game cancelled by user");
        return false;
    }

    // converts the input to lowercase and whitespace
    userInput = rawInput.trim().toLowerCase();

    //validates the user input
    if (userInput== "rock" || userInput == "paper" || userInput == "scissors"){
        isValid = true;

    } else{
        alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
    }
}

    //the computer randomly selects a choice
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    // Display choices in the console
    console.log(`The User chose: ${userInput}`);
    console.log(`The console chose: ${computerChoice}`);

    // Determines the winner
    if (userInput === computerChoice){
        console.log("It's a tie!");
    } else if (
        (userInput === "rock" && computerChoice === "scissors") ||
        (userInput === "paper" && computerChoice === "rock") ||
        (userInput === "scissors" && computerChoice === "paper")
    ) {
        console.log("User wins!");
    } else {
        console.log("Computer wins!");
    }

    return true; 
}

//main game function
function startGame(){
    let keepPlaying = true;

    while (keepPlaying){
        let roundPlayed = playRound();

        //if the user cancels the prompt, then exit the loop
        if (!roundPlayed){
            break;
    }

    //asks user if they want to play another round
    keepPlaying = confirm("Do you want to play anothe rround?");
}
console.log("Thanks for playing!");

}

//starts game
startGame();




