const countLabel = document.getElementById("countLabel");
const countLabel2 = document.getElementById("countLabel2");
const increaseBtn = document.getElementById("increaseBtn");
const increaseBtn2 = document.getElementById("increaseBtn2");
const decreaseBtn = document.getElementById("decreaseBtn");
const decreaseBtn2 = document.getElementById("decreaseBtn2");
const resetBtn = document.getElementById("resetBtn");

let count = [0, 0];

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
}

function resetScore() {
  count = [0, 0];
  countLabel.textContent = count[0];
  countLabel2.textContent = count[1];
}

// Fungsi untuk memeriksa apakah ada pemenang
function winnerPlayer() {
  // kalo menang maka harus selisih 2 poin
  if (count[0] >= 21 && count[0] - count[1] >= 2) {
    alert(`${playerName1 || "Player 1"} won the game!`);
    resetScore();
  } else if (count[1] >= 21 && count[1] - count[0] >= 2) {
    alert(`${playerName2 || "Player 2"} won the game!`);
    resetScore();
  }
  //jika deuce maka lanjot trus permainan hingga selisih 2 poin atau siapa yang duluan sampe 30 poin
  if (count[0] === 30) {
    alert(`${playerName1 || "Player 1"} won the game with 30 points!`);
    resetScore();
  } else if (count[1] === 30) {
    alert(`${playerName2 || "Player 2"} won the game with 30 points!`);
    resetScore();
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

//function save nama player
function savePlayerName1() {
  playerName1 = document.getElementById("inputPlayerName1").value;

  if (playerName1.trim() === "") {
    alert("Player name cannot be empty");
    return;
  }
  document.getElementById("playerName1").textContent = `${playerName1}`;
  document.getElementById("inputContainer1").style.display = "none";
}

function savePlayerName2() {
  playerName2 = document.getElementById("inputPlayerName2").value;

  if (playerName2.trim() === "") {
    alert("Player name cannot be empty!!!");
    return;
  }
  document.getElementById("playerName2").textContent = `${playerName2}`;
  document.getElementById("inputContainer2").style.display = "none";
}

document.getElementById("btnSaveP1").onclick = savePlayerName1;
document.getElementById("btnSaveP2").onclick = savePlayerName2;
// end of save nama player
