import React, {useEffect, useState}from "react";
import "./Board.css";
import Tile from "./Tile/Tile";
function Board(){

    const [board, setBoard] = useState([[null, null, null],[null, null, null],[null, null, null]])
    const [player,setPlayer] = useState(0);

    const changeBoard = (row, col, value) => {
        //changes board[row][col] to value
        //make a copy of board
        //setBoard(copy)
        //copy = board
        const copy = [...board];
        copy[row][col] = value;
        setBoard(copy);
        setPlayer(player === 0 ? 1 : 0);
    }
    //If value = null, then empty
    //If value = 0, then 0
    //If value = 1, then x

    return(
        <div className="board">
            <div className={`player ${player === 0 ? "" : "player2"}`}><h1>player {player+1}'s turn</h1></div>
            {
                board.map((row, index)=>{
                    return(
                        <div className="board-row" key={`row${index}`}>
                            {
                                row.map((tile, colIndex)=>{
                                    return <Tile row={index} col={colIndex} value={board[index][colIndex]} changeBoard={changeBoard} player={player}/>
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