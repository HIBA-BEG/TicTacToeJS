var board;
// var currPlayer = playerO;
var gameOver = false;
const size = 20;
const rounds = 5;

window.onload = function() {
    // loadScores();
    // loadGameState();
    createGrid();
}

function createGrid() {
    const table = document.getElementById('board');
    
    for (let i = 0; i < size; i++) {
        const row = table.insertRow(); 
        for (let j = 0; j < size; j++) {
            const cell = row.insertCell();
            cell.textContent = '';
    
        }
    }
    
}

function loadScores() {

}

function loadGameState(){

}

