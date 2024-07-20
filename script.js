const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn2 = document.getElementById("increaseBtn2");
const decreaseBtn2 = document.getElementById("decreaseBtn2");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
const countLabel2 = document.getElementById("countLabel2");

let count = 0;
let count2 = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

increaseBtn2.onclick = function () {
  count2++;
  countLabel2.textContent = count2;
};

decreaseBtn2.onclick = function () {
  count2--;
  countLabel2.textContent = count2;
};

resetBtn.onclick = function () {
  count = 0;
  count2 = 0;
  countLabel.textContent = count;
  countLabel2.textContent = count2;
};
