import React, { useEffect, useState } from 'react';
import './Tile.scss';
//the tile can be either an o or x state
//get it to change colors
function Tile({ state, onClickFunction }) {  
  return (
    <div className={`Tile turn${state}`} onClick={onClickFunction} >
      {state === 1 && "O"}
      {state === 2 && "X"}
      {state === 3 && "O"}
      {state === 4 && "X"}
    </div>
  );
}

export default Tile;
