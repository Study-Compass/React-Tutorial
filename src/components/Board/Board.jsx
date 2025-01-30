import React, { useState } from 'react';
import './Board.scss';

function Board(){
    const [board, setBoard] = useState([
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ]); // 0 -> blank, 1 -> O, 2 -> X
    const [turn, setTurn] = useState(false);//false -> p1, true ->

    /*
    for row in board:
        for col in row
            make a div for this cell with the index i and j
    */
    
    const handleTileClick = (i,j) =>{
        if(board[i][j] !== 0){
            return; //do nothing
        }
        console.log(`tile ${i}, ${j} has been clicked`);
        let copy = board.map(row => row.slice());
        copy[i][j] = turn ? 2 : 1;
        setBoard(copy);
        setTurn(!turn);
    }

    return (
        <div className="Board">
            <div className={`turn ${turn ? "x" : "o"}`}>
                <h2>player {turn? "2" : "1"}'s turn</h2>
                
            </div>

            {
                board.map((row, i)=>{
                    return(
                        <div className="row">
                            {
                                row.map((col, j)=>(
                                    <div className={`tile ${col === 0 ? "" : col === 1 ? "o" : "x"}`} onClick={()=>handleTileClick(i,j)}>
                                        {col === 0 ? "" : col === 1 ? "O" : "X"}
                                    </div>
                                ))
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Board;