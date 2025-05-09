from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Game state
board = [[" " for _ in range(3)] for _ in range(3)]
current_player = "X"


def check_winner():
    """Check if a player has won."""
    for row in board:
        if all(cell == current_player for cell in row):
            return True
    for col in range(3):
        if all(board[row][col] == current_player for row in range(3)):
            return True
    if all(board[i][i] == current_player for i in range(3)) or all(board[i][2 - i] == current_player for i in range(3)):
        return True
    return False


def is_full():
    """Check if the board is full."""
    return all(cell != " " for row in board for cell in row)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/move", methods=["POST"])
def make_move():
    global current_player
    data = request.json
    row, col = data["row"], data["col"]

    if board[row][col] != " ":
        return jsonify({"error": "Cell is already occupied!"}), 400

    board[row][col] = current_player
    if check_winner():
        return jsonify({"winner": current_player, "board": board})
    elif is_full():
        return jsonify({"winner": "Draw", "board": board})

    current_player = "O" if current_player == "X" else "X"
    return jsonify({"board": board, "nextPlayer": current_player})


@app.route("/reset", methods=["POST"])
def reset_game():
    global board, current_player
    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"
    return jsonify({"board": board})


if __name__ == "__main__":
    app.run(debug=True)
