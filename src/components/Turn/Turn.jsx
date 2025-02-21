import React, { useEffect, useState } from 'react';
import './Turn.scss';
//the Turn can be either an 0, 1 or 2 state. 1 is player 1, 2 is player 2. 0 is start.
//get it to change colors
function Turn({ state }) {  
  return (
    <div className={`Turn turn${state}`} >
      {state === 1 && "player 1's turn!"}
      {state === 2 && "player 2's turn!"}
      {state === 3 && "player 1 wins!"}
      {state === 4 && "player 2 wins!"}
    </div>
  );
}

export default Turn;
