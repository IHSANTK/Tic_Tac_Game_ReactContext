import React from 'react';
import Square from '../Components/Square';



const Board = () => {
  const renderSquare = (i) => {
    return <Square index={i} key={i} />;
  };

  return (
    <div className="board">
      {Array.from({ length: 9 }).map((_, index) => renderSquare(index))}
    </div>
  );
};

export default Board;