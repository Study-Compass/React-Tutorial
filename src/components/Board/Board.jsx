import React, { useState } from 'react';
import './Board.scss';
import logo from '../../assets/icons/cross.svg';

function Board(){
    const [board, setBoard] = useState([
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ]);

    /*
    for row in board:
        for col in row
            make a div for this cell with the index i and j
    */

    return (
        <div className="Board">
            {
                board.map((row, i)=>{
                    return(
                        <div className="row">
                            {
                                row.map((col, j)=>(
                                    <div className="tile">{col}</div>
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