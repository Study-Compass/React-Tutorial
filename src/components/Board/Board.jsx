import React,{useState,useEffect} from "react";
import './Board.css';
import Tile from './Tile/Tile.jsx';

function Board({turn, onBoardChange}){
    const [board, setBoard]=useState([['b', 'b', 'b'],['b', 'b', 'b'],['b', 'b', 'b']]);

    function calculateItemIndex(index){
        return board[Math.floor((index-1)/3)][(index-1)%3];
    }

    function onChange(index){
        console.log(index);
        const newBoard = board.map((r, rowIndex) =>
            r.map((cell, colIndex) =>
              rowIndex === Math.floor((index-1)/3) && colIndex === (index-1)%3 ? (turn === '1' ? 'x' : 'o') : cell
            )
          );
        setBoard(newBoard);
        console.log(newBoard);
        onBoardChange();
    }

    return(
        <div className="board">
            {
                board.map((row, rowIndex)=>{
                    return(
                        <div className="row" key={`row ${rowIndex}`}>
                            {row.map((tile, tileIndex)=>{
                                return(
                                    <Tile 
                                        key={`tile ${(tileIndex+1)+3*(rowIndex)}`} 
                                        index={(tileIndex+1)+3*(rowIndex)} 
                                        state={calculateItemIndex((tileIndex+1)+3*(rowIndex))} 
                                        onChange={onChange}/>
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