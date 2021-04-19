let turn = 1;
let playerTurn = document.getElementById("player-turn");
let boxes = document.querySelectorAll(".box");
let winner = document.getElementById("winner");
let winnerText = document.getElementById("winner-text");
let POneScore = 0;
let PTwoScore = 0;
let POneBox = document.querySelector("#p1-score .score");
let PTwoBox = document.querySelector("#p2-score .score");

let playedTimes = 0;

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {
    if (turn == 1) {
      if (!boxes[i].innerText) {
        playedTimes++;
        playerTurn.innerText = "2";
        boxes[i].innerText = "X";
        turn = 2;
      }

      checkForWin("X");
    } else {
      if (!boxes[i].innerText) {
        playedTimes++;
        playerTurn.innerText = "1";
        boxes[i].innerText = "O";
        turn = 1;
      }
      checkForWin("O");
    }
  });
}

function checkForWin(player) {
  let wins = false;
  let winningPosition = [
    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
  ];
  let playerPosition = [];
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].innerHTML == player) {
      playerPosition.push(1);
    } else {
      playerPosition.push(0);
    }
  }
  console.log(playerPosition);
  for (let j = 0; j < winningPosition.length; j++) {
    let equalPosition = 0;
    for (let m = 0; m < 9; m++) {
      if (playerPosition[m] == 1) {
        if (playerPosition[m] == winningPosition[j][m]) {
          equalPosition++;
        }
      }
    }
    console.log(equalPosition);
    if (equalPosition == 3) {
      wins = true;
    }
  }
  if (wins) {
    playedTimes = 0;
    winner.style.display = "flex";

    if (player == "X") {
      POneScore++;
      winnerText.innerText = "Player 1 wins";
      POneBox.innerText = POneScore;
    } else {
      PTwoScore++;
      winnerText.innerText = "Player 2 wins";
      PTwoBox.innerText = PTwoScore;
    }
  } else {
    if (playedTimes == 9) {
      winner.style.display = "flex";
      winnerText.innerText = "Draw";
    }
  }
}
function restartGame() {
  playedTimes = 0;
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
  }
  winner.style.display = "none";
  winnerText.innerText = "";
}
