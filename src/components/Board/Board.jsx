import React, { useEffect, useState } from "react";
import "./Board.css"
import Tile from "./Tile/Tile";
import Header from "../Header/Header";

const Board = ({reset, setReset}) => {

    const [board, setBoard] = useState([[null, null, null],[null, null, null],[null, null, null]])

    const [player, setPlayer] = useState(0);
    //if value = null, than empty
    //if value = 0, than o
    //if value = 1, thank x

    const [winner, setWinner] = useState(null);
    const [draw, setDraw] = useState(false); // Tracks if the game is a draw

    const changeBoard = (row, col, value) => {
        //changes board[row][col] to value
        //make a copy of board
        //setBoard(copy)
        //copy = board
        
        if (winner || board[row][col] !== null) return; // Do nothing if game over or tile is already filled
        const updateBoard = [...board];
        updateBoard[row][col] = value;
        setBoard(updateBoard);

    
        if (checkWin(updateBoard, value)) {
            setWinner(player);
        } else if (checkDraw(updateBoard)) {
            setDraw(true); // No winner, but the board is full
        }
        else {
            
          
            setPlayer(player === 0 ? 1 : 0);
            
        }

    };

    const checkWin = (board, value) => {
        return checkRows(board, value) || checkCols(board, value) || checkDiagonals(board, value);
    };
        
    const checkRows = (board, value) => {
        return board.some(row => row.every(cell => cell === value));
    };
        
    const checkCols = (board, value) => {
        for (let col = 0; col < 3; col++) {
            if (board[0][col] === value && board[1][col] === value && board[2][col] === value) {
            return true;
            }
        }
        return false;
    };
        
    const checkDiagonals = (board, value) => {
    // Check the two diagonals
    return (
        (board[0][0] === value && board[1][1] === value && board[2][2] === value) ||
        (board[0][2] === value && board[1][1] === value && board[2][0] === value)
        );
    };

    // Check for draw
    const checkDraw = (board) => {
        // Check if all tiles are filled
        for (let row of board) {
            if (row.includes(null)) {
                return false;
            }
        }
        return true;
    };


    const resetGame = () => {
        setBoard([[null, null, null], [null, null, null], [null, null, null]]);
        setPlayer(0);
        setWinner(null);
        setDraw(null);
    };

   
    useEffect(()=>{
        if(reset){
            resetGame();
            setReset(false)
        }
    },[reset]);


    return(
        <header className="board">

            <div className={`player ${player === 0 ? "" : "player2"}`}>
            {winner !== null ? (
               
                    <h1>Player {winner + 1} wins!</h1>
                
            ) : draw ? (
               
                    <h1>It's a draw!</h1>
             
            ) : (
                    <h1>Player {player + 1}'s turn</h1>
            )}
            </div>

            {
                board.map((row, index)=>{
                    return(
                        <div className="board-row" key={`row${index}`}>
                            {
                                row.map((tile, colIndex)=>{
                                    return<Tile row={index} col={colIndex} value={board[index][colIndex]} changeBoard={changeBoard} player={player} disabled={winner !== null}/>
                                })
                            }

                        </div>
                    )

                })

            }
            

            
        </header>

    );
}

export default Board