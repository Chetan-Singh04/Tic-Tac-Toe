// Select elements from the DOM
const boardElement = document.getElementById("board");
const resetButton = document.getElementById("reset");

// Render the Tic Tac Toe board
function renderBoard(board) {
    boardElement.innerHTML = ""; // Clear the board
    board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell");
            cellElement.textContent = cell !== " " ? cell : ""; // Display X or O
            if (cell !== " ") {
                cellElement.classList.add("taken");
            }
            cellElement.addEventListener("click", () => makeMove(rowIndex, colIndex));
            boardElement.appendChild(cellElement);
        });
    });
}

// Fetch the current board state and reset game
function resetGame() {
    fetch("/reset", { method: "POST" })
        .then((response) => response.json())
        .then((data) => renderBoard(data.board))
        .catch((err) => console.error("Error resetting game:", err));
}

// Make a move on the board
function makeMove(row, col) {
    fetch("/move", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ row, col }),
    })
        .then((response) => {
            if (!response.ok) {
                return response.json().then((data) => {
                    alert(data.error || "An error occurred!");
                    throw new Error(data.error);
                });
            }
            return response.json();
        })
        .then((data) => {
            if (data.winner) {
                if (data.winner === "Draw") {
                    alert("It's a draw!");
                } else {
                    alert(`Player ${data.winner} wins! 🎉`);
                }
                resetGame(); // Reset the game after a win/draw
            } else {
                renderBoard(data.board);
            }
        })
        .catch((err) => console.error("Error making move:", err));
}

// Event listener for the Reset button
resetButton.addEventListener("click", resetGame);

// Initial setup: Reset and render the board
resetGame();
