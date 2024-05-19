import React from 'react';
import './App.css';
import { GameProvider } from './Components/GameContext';
import Game from './Components/Game';

const App = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
};

export default App;