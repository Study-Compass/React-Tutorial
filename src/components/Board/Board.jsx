import React,{useState,useEffect} from "react";
import './Board.css';
import Tile from './Tile/Tile.jsx';

function Board(){
    const [board, setBoard]=useState([['b', 'b', 'b'],['b', 'b', 'b'],['b', 'b', 'b']]);

    function calculateItemIndex(index){
        return board[Math.floor(index/3)][index%3]
    }

    return(
        <div className="board">
            {
                board.map((row, rowIndex)=>{
                    return(
                        <div className="row" key={rowIndex}>
                            {row.map((tile, tileIndex)=>{
                                return(
                                    <Tile key={tileIndex*rowIndex} index={tileIndex*rowIndex} state={calculateItemIndex(tileIndex*rowIndex)}/>
                                );
                            })}
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Board;