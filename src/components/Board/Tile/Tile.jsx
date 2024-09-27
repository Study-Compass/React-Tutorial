import React from "react";
import "./Tile.css";
//import Logo from '../../assets/icons/cross.svg';

function Tile({row, col, value, changeBoard, player}){
    function handleClick(){
        if (value === null){
            if (player === 0){
                changeBoard(row,col,0);
            }
            else if (player === 1){
                changeBoard(row,col,1);
            }
        }

    }
    return(
        <div className="tile" onClick={handleClick}>
            {value && value === 1 ? "X" : value === 0 ? "0" : ''}
        </div>
    )
}
export default Tile;