import React, {useEffect, useState}from "react";
import "./Board.css";
import Tile from "./Tile/Tile";
import Header from "../Header/Header"; 

function Board({reset, setReset}){

    const [board, setBoard] = useState([[null, null, null],[null, null, null],[null, null, null]])
    const [player,setPlayer] = useState(0);
    const [winner, setWinner] = useState(null);
    const [isDraw, setIsDraw] = useState(false); // Track if the game is a draw

    const changeBoard = (row, col, value) => {
        if (winner || isDraw || board[row][col] !== null) return; // Do nothing if game over or tile is already filled
        //changes board[row][col] to value
        //make a copy of board
        //setBoard(copy)
        //copy = board
        const copy = [...board];
        copy[row][col] = value;
        setBoard(copy);
        if (checkWin(copy, value)) {
            setWinner(player); // Set the current player as the winner
          } else if (checkDraw(copy)) {
            setIsDraw(true); // Declare a draw if the board is full with no winner
          } else {
            // Switch player only if no one has won yet and no draw
            setPlayer(player === 0 ? 1 : 0);
          }
    }
    //If value = null, then empty
    //If value = 0, then 0
    //If value = 1, then x
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
    const checkDraw = (board) => {
        return board.every(row => row.every(cell => cell !== null));
      };
    
    function resetGame (){
        setBoard([[null, null, null], [null, null, null], [null, null, null]]);
        setPlayer(0);
        setWinner(null);
        setIsDraw(false)
      };
      
      
      useEffect(()=>{
        if(reset){
          resetGame();
          setReset(false);
        }
      },[reset]);

    const currentPlayer = winner !== null ? winner : player;
    return(
        <div className="game">
        {/* <Header resetGame={resetGame} /> */}
        <div className="board">
            <div className={`player ${currentPlayer === 0 ? "" : "player2"}`}>
            {winner !== null ? (
          <h1>Player {winner + 1} wins!</h1>
        ) : isDraw ? (
          <h1>It's a draw!</h1>
        ) : (
          <h1>Player {player + 1}'s turn</h1>
        )}</div>
            {
                board.map((row, index)=>{
                    return(
                        <div className="board-row" key={`row${index}`}>
                            {
                                row.map((tile, colIndex)=>{
                                    return <Tile row={index} col={colIndex} value={board[index][colIndex]} changeBoard={changeBoard} player={player}  disabled={winner !== null}/>
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
        
    
}

export default Board;