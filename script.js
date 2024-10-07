const countLabel = document.getElementById("countLabel");
const countLabel2 = document.getElementById("countLabel2");
const increaseBtn = document.getElementById("increaseBtn");
const increaseBtn2 = document.getElementById("increaseBtn2");
const decreaseBtn = document.getElementById("decreaseBtn");
const decreaseBtn2 = document.getElementById("decreaseBtn2");
const resetBtn = document.getElementById("resetBtn");
const playerName1 = document.getElementById("playerName1");
const playerName2 = document.getElementById("playerName2");
const inputPlayerName1 = document.getElementById("inputPlayerName1");
const inputPlayerName2 = document.getElementById("inputPlayerName2");
const btnSaveP1 = document.getElementById("btnSaveP1");

let count = [0, 0];

function increaseScore(playerIndex, countLabel) {
  count[playerIndex]++;
  countLabel.textContent = count[playerIndex];
}

function decreaseScore(playerIndex, countLabel) {
  if (count[playerIndex] > 0) {
    count[playerIndex]--;
    countLabel.textContent = count[playerIndex];
  }
}

function resetScore() {
  scores = [0, 0];
  countLabel.textContent = scores[0];
  countLabel2.textContent = scores[1];
}
increaseBtn.onclick = function () {
  increaseScore(0, countLabel);
};

increaseBtn2.onclick = function () {
  increaseScore(0, countLabel2);
};

decreaseBtn.onclick = function () {
  decreaseScore(0, countLabel);
};

decreaseBtn2.onclick = function () {
  decreaseScore(0, countLabel2);
};

resetBtn.onclick = resetScore;

function printPlayerName1() {
  const playerNameInput = inputPlayerName1.value;
  if (playerNameInput.trim() !== "") {
    playerName1.textContent = playerNameInput;
  } else {
    alert("Nama pemain tidak boleh kosong!");
  }
  console.log("print player name success");
}

btnSaveP1.onclick = printPlayerName1;

function pointJust() {}

function winnerPlayer() {}
