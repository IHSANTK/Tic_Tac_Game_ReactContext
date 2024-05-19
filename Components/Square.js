import React, { useContext } from 'react';
import { GameContext } from '../Components/GameContext';

const Square = ({ index }) => {
    const { board, handleClick } = useContext(GameContext);
  
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };
  
  export default Square;
