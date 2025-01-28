import React, { useEffect, useState } from 'react';
import './Tile.scss';
//the tile can be either an o or x state
function Tile({ state }) {  

  return (
    <div className="Tile">
        {state}
    </div>
  );
}

export default Tile;
