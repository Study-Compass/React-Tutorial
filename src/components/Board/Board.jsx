import React, { useState } from 'react';
import './Board.scss';
import Tile from '../Tile/Tile';

function Board() {  
    const [board, setBoard] = useState([
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ]);
    return (
        
        <div className="Board">
        {   
        //in arrow function, curly bracket denote javascript code
            //first item is item thats getting iterated, second is index

            //we need to give it a unique string so it has an identifying factor so react can identify its kids
            board.map((row, i)=>(
                <div className="row" key = {`row ${i}`}>
                    {row.map((col,j)=>{
                        return <Tile key={`tile $i}-${j}`} state={board[i][j]}/>
                    })}
                </div>
                
            ))
        }
        </div>
    );
}

export default Board;
