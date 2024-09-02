let turn = "X";
let GameOver = false;
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

  const turnIndicator = document.getElementById("playersturn");
  turnIndicator.style.display = "block";
  turnIndicator.innerText = `Current Turn: Player ${turn}`;
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
        if (!GameOver && cell.innerHTML === "") {
          cell.innerHTML = turn;
          saveGameState();
          checkWin();
          checkDraw();
          changeTurn();
        }
      });
    }
  }
}

function changeTurn() {
  turn = turn === "X" ? "O" : "X";
  document.getElementById("playersturn").innerText = `Current Turn: Player ${turn}`;
  saveGameState();
}

function loadScores() {
  let scoreX = parseInt(localStorage.getItem('scoreX') || "0");
  let scoreO = parseInt(localStorage.getItem('scoreO') || "0");
  document.querySelector("#scoreX").innerText = scoreX;
  document.querySelector("#scoreO").innerText = scoreO;
}

function saveGameState() {
  const gameState = {
    turn: turn,
    boxes: boxes.map(cell => cell.innerHTML),
    GameOver: GameOver
  };
  localStorage.setItem('ticTacToeState', JSON.stringify(gameState));
}

function loadGameState() {
  const gameState = JSON.parse(localStorage.getItem('ticTacToeState'));
  if (gameState) {
    turn = gameState.turn;
    GameOver = gameState.GameOver;
    boxes.forEach((cell, index) => cell.innerHTML = gameState.boxes[index]);
    if (GameOver) {
      document.querySelector("#replay").style.display = "block";
    }
  }
}

function checkWin() {
  const winLength = 5;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col <= size - winLength; col++) {
      let winIndices = [];
      for (let i = 0; i < winLength; i++) {
        winIndices.push(row * size + col + i);
      }
      if (winIndices.every(index => boxes[index].innerHTML === turn)) {
        markWin(winIndices);
        GameOver = true;
        saveGameState();
        return;
      }
    }
  }

  for (let col = 0; col < size; col++) {
    for (let row = 0; row <= size - winLength; row++) {
      let winIndices = [];
      for (let i = 0; i < winLength; i++) {
        winIndices.push(col + (row + i) * size);
      }
      if (winIndices.every(index => boxes[index].innerHTML === turn)) {
        markWin(winIndices);
        GameOver = true;
        saveGameState();
        return;
      }
    }
  }

  for (let row = 0; row <= size - winLength; row++) {
    for (let col = 0; col <= size - winLength; col++) {
      let winIndices = [];
      for (let i = 0; i < winLength; i++) {
        winIndices.push((row + i) * size + col + i);
      }
      if (winIndices.every(index => boxes[index].innerHTML === turn)) {
        markWin(winIndices);
        GameOver = true;
        saveGameState();
        return;
      }
    }
  }

  for (let row = winLength - 1; row < size; row++) {
    for (let col = 0; col <= size - winLength; col++) {
      let winIndices = [];
      for (let i = 0; i < winLength; i++) {
        winIndices.push((row - i) * size + col + i);
      }
      if (winIndices.every(index => boxes[index].innerHTML === turn)) {
        markWin(winIndices);
        GameOver = true;
        saveGameState();
        return;
      }
    }
  }
}

function checkDraw() {
  if (boxes.every(cell => cell.innerHTML !== "") && !GameOver) {
    document.querySelector("#results").innerText = "It's a draw!";
    document.querySelector("#replay").style.display = "block";
    GameOver = true;
    saveGameState();
  }
}

function markWin(indices) {
  indices.forEach(index => {
    boxes[index].style.backgroundColor = "#d5f365";
  });
  document.querySelector("#results").innerText = `Player ${turn} wins!`;
  document.querySelector("#replay").style.display = "block";
}


document.querySelector("#replay").addEventListener("click", () => {

    GameOver = false;
    turn = "X";
    document.querySelector("#results").innerHTML = "";

    boxes.forEach(cell => {
        cell.innerHTML = "";
        cell.style.backgroundColor = "";
    });

    document.querySelector("#player-form").style.display = "block";
    document.querySelector("#game-container").style.display = "none";
    document.querySelector("#replay").style.display = "none";

    saveGameState();
})