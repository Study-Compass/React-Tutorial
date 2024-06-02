import React, { useState, useEffect } from "react";
import './Tile.css';

// state = "x" : X
// state = "o" : O
// state = "b" : blank

function Tile({index, state, onChange}){
    
    const [tileState, setTileState] = useState(null);

    useEffect(() => {
        if (state === 'x'){
            setTileState("X");
        }
        if (state === 'o'){
            setTileState("O");
        }
        if (state === 'b'){
            setTileState("Blank");
        }
    }, [])

    function onTileClick(){
        onChange();
    }

    return (
        <div className="tile" onClick={onTileClick}>
            {tileState}

        </div>
    );
}

export default Tile;