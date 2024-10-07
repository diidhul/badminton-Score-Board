const countLabel = document.getElementById("countLabel");
const countLabel2 = document.getElementById("countLabel2");
const increaseBtn = document.getElementById("increaseBtn");
const increaseBtn2 = document.getElementById("increaseBtn2");
const decreaseBtn = document.getElementById("decreaseBtn");
const decreaseBtn2 = document.getElementById("decreaseBtn2");
const resetBtn = document.getElementById("resetBtn");

let count = [0, 0];

let winningScore = 6;

function increaseScore(playerIndex, countLabel) {
  count[playerIndex]++;
  countLabel.textContent = count[playerIndex];
  winnerPlayer();
}

function decreaseScore(playerIndex, countLabel) {
  if (count[playerIndex] > 0) {
    count[playerIndex]--;
    countLabel.textContent = count[playerIndex];
  }
  winnerPlayer();
}

function resetScore() {
  count = [0, 0];
  countLabel.textContent = count[0];
  countLabel2.textContent = count[1];
}

// Fungsi untuk memeriksa apakah ada pemenang
function winnerPlayer() {
  if (count[0] >= winningScore) {
    alert("Player 1 won the game!");
    resetScore(); // Reset skor setelah ada pemenang
  } else if (count[1] >= winningScore) {
    alert("Player 2 won the game!");
    resetScore(); // Reset skor setelah ada pemenang
  }
}

increaseBtn.onclick = function () {
  increaseScore(0, countLabel);
};

increaseBtn2.onclick = function () {
  increaseScore(1, countLabel2);
};

decreaseBtn.onclick = function () {
  decreaseScore(0, countLabel);
};

decreaseBtn2.onclick = function () {
  decreaseScore(1, countLabel2);
};

resetBtn.onclick = resetScore;

let playerName1;
let playerName2;

function savePlayerName1() {
  playerName1 = document.getElementById("inputPlayerName1").value;

  if (playerName1.trim() === "") {
    alert("Player name cannot be empty");
    return;
  }
  document.getElementById("playerName1").textContent = `${playerName1}`;
  document.getElementById("inputPlayerName1").style.display = "none";
}

function savePlayerName2() {
  playerName2 = document.getElementById("inputPlayerName2").value;

  if (playerName2.trim() === "") {
    alert("Player name cannot be empty!!!");
    return;
  }
  document.getElementById("playerName2").textContent = `${playerName2}`;
  document.getElementById("inputPlayerName2").style.display = "none";
}

document.getElementById("btnSaveP1").onclick = savePlayerName1;
document.getElementById("btnSaveP2").onclick = savePlayerName2;
