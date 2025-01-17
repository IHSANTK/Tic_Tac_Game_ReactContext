import React, { useContext } from 'react';
import { GameContext } from '../Components/GameContext';
import Board from '../Components/Board';

const Game = () => {
  const { isXNext, resetGame, board } = useContext(GameContext);

  const result = calculateGameResult(board);
  let status;
  if (result === 'Draw !') {
    status = 'Draw !';
  } else if (result) {
    status = `Winner: ${result}`;
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={resetGame}>Restart</button>
      </div>
    </div>
  );
};

const calculateGameResult = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  if (squares.every(square => square)) {
    return 'Draw !';
  }

  return null;
};

export default Game;
