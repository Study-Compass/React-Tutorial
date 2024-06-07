import React,{useState,useEffect} from "react";
import './Board.css';
import Tile from './Tile/Tile.jsx';

function Board({turn, winner, onBoardChange, win}){
    const [board, setBoard]=useState([['b', 'b', 'b'],['b', 'b', 'b'],['b', 'b', 'b']]);

    function calculateItemIndex(index){
        return board[Math.floor((index-1)/3)][(index-1)%3];
    }

    useEffect(()=>{
        if(turn==='0'){
            setBoard([['b', 'b', 'b'],['b', 'b', 'b'],['b', 'b', 'b']]);
            onBoardChange();
        }
    },[turn]);

    const getColumn = (arr, colIndex) => {
        return arr.map(row => row[colIndex]);
    };

    const getDiagonals = (matrix) => {
        const lD = [];
        const rD = [];
      
        for (let i = 0; i < matrix.length; i++) {
          lD.push(matrix[i][i]);
          rD.push(matrix[i][matrix.length - 1 - i]);
        }
        return { lD, rD };
    };

    function onChange(index){

        const newBoard = board.map((r, rowIndex) =>
            r.map((cell, colIndex) =>
              rowIndex === Math.floor((index-1)/3) && colIndex === (index-1)%3 ? (turn === '1' ? 'o' : 'x') : cell
            )
          );
        setBoard(newBoard);
        var check=false;
        const checkBoard = newBoard.map((r, rowIndex) =>{
            (JSON.stringify(r) === JSON.stringify(['o', 'o', 'o']) ? check=true : (JSON.stringify(r) === JSON.stringify(['x', 'x', 'x']) ? check=true: check=check));
            const c = getColumn(newBoard, rowIndex);
            (JSON.stringify(c) === JSON.stringify(['o', 'o', 'o']) ? check=true : (JSON.stringify(c) === JSON.stringify(['x', 'x', 'x']) ? check=true: check=check));
        });
        const { lD, rD } = getDiagonals(newBoard);
        (JSON.stringify(lD) === JSON.stringify(['o', 'o', 'o']) ? check=true : (JSON.stringify(lD) === JSON.stringify(['x', 'x', 'x']) ? check=true: check=check));
        (JSON.stringify(rD) === JSON.stringify(['o', 'o', 'o']) ? check=true : (JSON.stringify(rD) === JSON.stringify(['x', 'x', 'x']) ? check=true: check=check));
        (check === true ? win() : onBoardChange());
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
                                        winner={winner}
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