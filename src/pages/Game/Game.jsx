import React, { useState } from 'react';
import './Game.scss';
import Board from '../../components/Board/Board';
import Header from '../../components/Header/Header';
import Turn from '../../components/Turn/Turn';
//only use for restart, used for board and header to communicate through

function Game() {  
  const [gameState, setGameState] = useState('started');

  const handleRestart = () => {
    setGameState('resetting');
  }

  return (
    <div className="Game">
      <Header onClickFunction={()=>{handleRestart()}}/>
      <Board gameState={gameState} setGameState={setGameState}/>
    </div>
  );

}

export default Game;
