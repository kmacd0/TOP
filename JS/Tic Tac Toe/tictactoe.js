const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoardState = () => board;

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

  return {
    getBoardState,
    placeMark,
    resetBoard,
  };
})();

const Player = (name, mark) => {
  return { name, mark };
};
