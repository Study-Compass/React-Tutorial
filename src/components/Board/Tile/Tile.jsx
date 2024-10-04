import React from "react";
import "./Tile.css";
import Logo from '../../../assets/icons/cross.svg';
import circle from '../../../assets/icons/circle.svg';

function Tile({row, col, value, changeBoard, player, disabled}){
    function handleClick(){
        if (!disabled &&value === null){
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
            {value && value === 1 ? <img src={Logo} alt="" className= "logo"/> : value === 0 ? <img src={circle} alt="" className= "logo"/> : ''}
        </div>
    )
}
export default Tile;