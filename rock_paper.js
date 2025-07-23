let yourScore = 0;
let compScore = 0;
let gameCount = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const you = document.querySelector("#you");
const computer = document.querySelector("#computer");
const reset = document.querySelector(".reset");
const countDisplay = document.querySelector("#count");

reset.addEventListener("click", () => {
    yourScore = 0;
    compScore = 0;
    gameCount = 0;
    you.innerText = yourScore;
    computer.innerText = compScore;
    
    countDisplay.innerText = gameCount;
    msg.innerText = "Scores have been reset. Start playing!";
    msg.style.backgroundColor = "white";
});

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randint = Math.floor(Math.random() * 3);
    return options[randint];
}

const drawGame = () => {
    console.log("------the game is draw!------");
    msg.innerText = "Game Draw! Play again!";
    msg.style.backgroundColor = "yellow";
    gameCount++;
    countDisplay.innerText = gameCount;
}

const win = (userWin, userChoice, comChoice) => {
    if (userWin) {
        console.log("---you win---");
        msg.innerText = `You win! Your ${userChoice} beats computer's ${comChoice}`;
        msg.style.backgroundColor = "green";
        yourScore++;
        you.innerText = yourScore;
    } else {
        console.log("---you lose---");
        msg.innerText = `You lose! Computer's ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        computer.innerText = compScore;
    }
    gameCount++;
    countDisplay.innerText = gameCount;
}

const playGame = (userChoice) => {
    console.log("Your choice = ", userChoice);
    const comChoice = genCompChoice();
    console.log("Comp choice = ", comChoice);
    if (userChoice === comChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = comChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = comChoice === 'scissor' ? false : true;
        } else {
            userWin = comChoice === 'rock' ? false : true;
        }
        win(userWin, userChoice, comChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
