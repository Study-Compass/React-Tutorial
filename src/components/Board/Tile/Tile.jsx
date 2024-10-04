import React from "react";
import "./Tile.css";
import LogoX from '../../../assets/icons/cross.svg'
import LogoC from '../../../assets/icons/circle.svg'



//<img src={Logo} alt="" className="logo"/>

function Tile({ row, col, value, changeBoard, player, disabled }){

    function handleClick(){
        // changeboard(row, col, value)
    
        if(!disabled && value === null){
            if(player === 0){
                changeBoard(row, col, 0);

            }else if(player === 1){
                changeBoard(row, col, 1);

            }
            
        }
        
        
    }

    return(
        <div className="tile" onClick={handleClick}>
            {value && value === 1 ? <img src={LogoX} alt="" className="logo"/> : value === 0 ? <img src={LogoC} alt="" className="logo"/> : ''}

        </div>
    );
}

export default Tile