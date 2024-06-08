import React, { useState, useEffect } from "react";
import './Board.css';
import Tile from "./Tile/Tile";

function Board({onBoardChange, turn, setWinner}){
    const [board, setBoard] = useState([['b', 'b', 'b'], ['b', 'b', 'b'], ['b', 'b', 'b']]); 

    function calculateItemIndex(index){
        return board[Math.floor((index-1)/3)][(index-1)%3];
    }

    function onTileChange(rowIndex, tileIndex){
        const newBoard = board.map(row => [...row]);
        console.log(newBoard);
        newBoard[rowIndex][tileIndex] = turn === 1 ? 'x' : 'o';
        setBoard(newBoard);
        onBoardChange();

        if (checkWin(newBoard)) {
            setWinner(turn);
        }
    }

    function checkWin(board){
        const lines = [
            [board[0][0], board[0][1], board[0][2]],
            [board[1][0], board[1][1], board[1][2]],
            [board[2][0], board[2][1], board[2][2]],

            [board[0][0], board[1][0], board[2][0]],
            [board[0][1], board[1][1], board[2][1]],
            [board[0][2], board[1][2], board[2][2]],

            [board[0][0], board[1][1], board[2][2]],
            [board[0][2], board[1][1], board[2][0]]
        ];

        for (let line of lines) {
            if (line[0] !== 'b' && line[0] === line[1] && line[1] === line[2]) {
                return true;
            }
        }
        return false;
    }

    return (
        <div className="board">
            {
                board.map((row, rowIndex) =>{
                    return (
                        <div className="row" key = {rowIndex}>
                            {
                                row.map((tile, tileIndex) =>{
                                    return (
                                        <Tile 
                                            key = {(tileIndex+1)+3*(rowIndex)} 
                                            index = {(tileIndex+1)+3*(rowIndex)} 
                                            state = {calculateItemIndex((tileIndex+1)+3*(rowIndex))}
                                            onChange = {onTileChange}
                                        />  
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Board;