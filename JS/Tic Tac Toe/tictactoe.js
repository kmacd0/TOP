const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoardState = () => [...board];

  const placeMark = (index, mark) => {
    if (index >= 0 && index < 9 && board[index] === "") {
      board[index] = mark;
      return true;
    }
    return false;
  };

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  const displayBoard = () => {
    const boardState = Gameboard.getBoardState();
    const display = boardState.map((cell, index) =>
      cell === "" ? index : cell
    );

    console.log(`
 ${display[0]} | ${display[1]} | ${display[2]}
---+---+---
 ${display[3]} | ${display[4]} | ${display[5]}
---+---+---
 ${display[6]} | ${display[7]} | ${display[8]}
`);
  };

  return {
    getBoardState,
    placeMark,
    resetBoard,
    displayBoard,
  };
})();

const createPlayer = (name, mark) => {
  return { name, mark };
};

const GameController = (() => {
  let players = [];
  let currentPlayerIndex;
  let turnCount = 0;

  const WIN_COMBINATIONS = [
    [0, 1, 2], // R
    [3, 4, 5], // R
    [6, 7, 8], // R
    [0, 3, 6], // C
    [1, 4, 7], // C
    [2, 5, 8], // C
    [0, 4, 8], // D
    [2, 4, 6], // D
  ];

  const startGame = () => {
    let player1 = prompt("Enter Player1's name (X): ", "Player 1");
    let player2 = prompt("Enter Player 2's name (O): ", "Player 2");

    players = [createPlayer(player1, "X"), createPlayer(player2, "O")];
    currentPlayerIndex = 0;
    playGame();
  };

  const swapPlayerTurn = () => {
    currentPlayerIndex = 1 - currentPlayerIndex;
  };

  const checkWin = (board) => {
    return WIN_COMBINATIONS.some((combination) => {
      const [a, b, c] = combination;
      return board[a] !== "" && board[a] === board[b] && board[a] === board[c];
    });
  };

  const checkTie = () => {
    return turnCount === 9 && !checkWin(Gameboard.getBoardState());
  };

  const playGame = () => {
    Gameboard.resetBoard();
    turnCount = 0;

    while (true) {
      Gameboard.displayBoard();
      const currentPlayer = players[currentPlayerIndex];
      const playerMove = parseInt(
        prompt(
          `${currentPlayer.name} (${currentPlayer.mark}, choose your placement (0-8):`
        )
      );

      if (isNaN(playerMove) || playerMove < 0 || playerMove > 8) {
        console.log("Invalid move, choose a tile 0-8.");
        continue;
      }

      const placedMove = Gameboard.placeMark(playerMove, currentPlayer.mark);

      if (!placedMove) {
        console.log("Spot already filled, choose another.");
        continue;
      }

      turnCount++;

      if (checkWin(Gameboard.getBoardState())) {
        Gameboard.displayBoard();
        console.log(`${currentPlayer.name} (${currentPlayer.mark}) wins!`);
        break;
      }

      if (checkTie()) {
        Gameboard.displayBoard();
        console.log("Game tie.");
        break;
      }

      swapPlayerTurn();
    }
  };

  const resetGame = () => {
    Gameboard.resetBoard();
    startGame();
  };

  return { startGame, playGame, resetGame };
})();
