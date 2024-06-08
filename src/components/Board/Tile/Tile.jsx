import React, { useState, useEffect } from "react";
import './Tile.css';
import O from '../../../assets/icons/O.svg';
import X from '../../../assets/icons/X.svg';

// state = "x" : X
// state = "o" : O
// state = "b" : blank

function Tile({index, state, onChange, winner}){
    
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
    }, [state])

    function calculateItemIndex(index){
        return [Math.floor((index-1)/3), (index-1)%3];
    }

    function onTileClick(){
        if (tileState === "Blank" && winner === null){
            onChange(calculateItemIndex(index)[0], calculateItemIndex(index)[1]);
            
        }
    }

    return (
        <div className={`tile ${state === 'x' ? 'x' : state === 'o' ? 'o' : ''}`} onClick={onTileClick}>
            {
                state !== "b" &&
                <img src={state === 'x' ? X : O} alt="" />
            }
        </div>
        
    );
}

export default Tile;