let turn = "X";
let isGameOver = false;
const size = 20;
let boxes = [];

document.querySelector("#start-game").addEventListener("click", () => {
  let playerXName = document.querySelector("#playerXName").value || "Player X";
  let playerOName = document.querySelector("#playerOName").value || "Player O";

  localStorage.setItem("playerXName", playerXName);
  localStorage.setItem("playerOName", playerOName);

  document.querySelector("#playerXDisplayName").innerText = playerXName;
  document.querySelector("#playerODisplayName").innerText = playerOName;

  document.querySelector("#player-form").style.display = "none";
  document.querySelector("#game-container").style.display = "block";

  createGrid();
  loadScores();
  loadGameState();
});

window.onload = function () {
  loadScores();
  loadGameState();
  createGrid();
};

function createGrid() {
  const table = document.getElementById("board");
  table.innerHTML = "";
  boxes = []; 

  for (let i = 0; i < size; i++) {
    const row = table.insertRow();
    for (let j = 0; j < size; j++) {
      const cell = row.insertCell();
      cell.textContent = "";
      cell.dataset.index = i * size + j;
      boxes.push(cell);

      cell.addEventListener("click", () => {
        if (!isGameOver && cell.innerHTML === "") {
          cell.innerHTML = turn;
          saveGameState();
          changeTurn();
        }
      });
    }
  }
}

function changeTurn() {
  turn = turn === "X" ? "O" : "X";
  saveGameState();
}

function loadScores() {
  
}

function saveGameState() {
 
}

function loadGameState() {
  
}


function checkWin() {}

function checkDraw() {}

function saveGameState() {}
