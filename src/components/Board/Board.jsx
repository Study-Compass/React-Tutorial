import React, {useEffect, useState}from "react";
import "./Board.css";
import Tile from "./Tile/Tile";
function Board(){

    const [board, setBoard] = useState([[null, null, null],[null, null, null],[null, null, null]])

    const changeBoard = (row, col, value) => {
        //changes board[row][col] to value
        //make a copy of board
        //setBoard(copy)
        //copy = board
        const copy = [...board];
        copy[row][col] = value;
        setBoard(copy);


    }

    return(
        <div className="board">
            {
                board.map((row, index)=>{
                    return(
                        <div className="board-row" key={`row${index}`}>
                            {
                                row.map((tile, colIndex)=>{
                                    return <Tile row={index} col={colIndex}/>
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
        
    
}

export default Board;