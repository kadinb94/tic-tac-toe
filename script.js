window.addEventListener("DOMContentLoaded", (event) => {
    let winner = document.getElementById("winner");
    let player = document.getElementById("player");
    let current_player = "X";
    let buttons = [];
    let game = [];
    for (let i = 0; i < 9; i++) {
        buttons.push(document.getElementById("" + i));
        game.push("" + i);
    }
    
    for (let i = 0; i < 9; i++) {
        buttons[i].addEventListener("click", (event) => {
            if (current_player == "X" && !isOver()) {
                current_player = "O";
                player.src = "circle.svg";
                buttons[i].src = "x-square.svg";
                game[i] = "X";
                if (isOver()) {
                    winner.innerHTML += "X is the winner."
                }
            } else if (current_player == "O" && !isOver()) {
                current_player = "X";
                player.src = "x-square.svg";
                buttons[i].src = "circle.svg";
                game[i] = "O";
                if (isOver()) {
                    winner.innerHTML += "O is the winner."
                }
            }
        }, {once: true}, {});
    };

    function isOver() {
        if (game[0] == game[1] && game[1] == game[2]) {
            return true;
        } else if (game[3] == game[4] && game[4] == game[5]) {
            return true;
        } else if (game[6] == game[7] && game[7] == game[8]) {
            return true;
        } else if (game[0] == game[3] && game[3] == game[6]) {
            return true;
        } else if (game[1] == game[4] && game[4] == game[7]) {
            return true;
        } else if (game[2] == game[5] && game[5] == game[8]) { 
            return true;
        } else if (game[0] == game[4] && game[4] == game[8]) {
            return true;
        } else if (game[2] == game[4] && game[4] == game[6]) {
            return true;
        } else {
            return false;
        }
    }
});

