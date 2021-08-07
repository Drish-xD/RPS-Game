let userscore = 0;
let botscore = 0;
const result = document.querySelector("#result")
const score = document.querySelector("#score")

// comparing the choices using conditions 

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "Its a tie!!!";
    }

    else if (choice1 === "rock") {
        if (choice2 === "paper"){
            botscore++;
            return "Bot";
        }
        else if (choice2 === "scissors"){
            userscore++;
            return "User";
        }
    }

    else if (choice1 === "paper") {
        if (choice2 === "scissors"){
            botscore++;
            return "Bot";
        }
        else if (choice2 === "rock"){
            userscore++;
            return "User";
        }
    }

    else if (choice1 === "scissors") {
        if (choice2 === "rock"){
            botscore++;
            return "Bot";
        }
        else if (choice2 === "paper"){
            userscore++;
            return "User";
        }
    }
}

function rpsgame(choice) {
    let userchoice = choice;
    let botchoice = ["rock", "paper", "scissors"][Math.floor(Math.random()*3)]
    let winner = compare(userchoice, botchoice);
    console.log(winner)
    console.log(userscore)
    console.log(botscore)
    result.classList = "result";

    if (winner === "User") {
        result.innerHTML = winner + " wins";
        result.classList.add("win");
    }
    else if (winner === "Bot") {
        result.innerHTML = winner + " wins";
        result.classList.add("lose");
    }
    else {
        result.innerHTML = winner;
        result.classList.add("tie")
    }
    score.innerHTML = `<div class="score-box user-score">USER: ${userscore} </div>
    <div class="score-box bot-score">COMPUTER: ${botscore} </div>`;
}

