import React, { useState, useEffect } from 'react';
import './Board.scss';
import Tile from '../Tile/Tile';
import Turn from '../Turn/Turn';
//can interact with tile, functionality in here
//if board is looking at something, easier to pass it to the child
function Board({ gameState, setGameState }) {  
    //have a setboard function that will change the use state

    const [board, setBoard] = useState([
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ]);

    const [turn, setTurn] = useState(0);

    useEffect(()=>{
        if(gameState === "resetting"){
            setBoard([[0,0,0],[0,0,0],[0,0,0],]);
            setGameState('started');
            setTurn(0);
            setWinner(false);
        }
    },[gameState]);

    //when gamestate changes run useEffect function
    //0 is empty, 1 is 0, 2 is X

    const [winner, setWinner] = useState(null);

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
        // Check if all tiles are filled
        for (let row of board) {
            if (row.includes(null)) {
                return false;
            }
        }
        return true;
    };

    const handleTileClick = (i, j) => {
        if(!winner){
            if(board[i][j]===0){
                let newBoard = board.map(row => row.slice());
                newBoard[i][j] = turn % 2 === 0 ? 1 : 2;
                if(!checkWin(newBoard,turn % 2 === 0 ? 1 : 2)){
                    setTurn(turn+1);
                }else{
                    if(turn % 2 === 0){
                        newBoard[i][j] = 3;
                        setTurn(3);
                    }else{
                        newBoard[i][j] = 4;
                        setTurn(4);
                    }
                    setWinner(true);
                }
                setBoard(newBoard);
            }
        }
    }
    if(!winner){
        return (
            <div className="Board">
                <Turn state={ turn%2 === 0 ? 1 : 2 }/>
               
                {/* //in arrow function, curly bracket denote javascript code
                //first item is item thats getting iterated, second is index
    
                //we need to give it a unique string so it has an identifying factor so react can identify its kids */}
            {   
                board.map((row, i)=>(
                    <div className="row" key = {`row ${i}`}>
                        {row.map((col,j)=>{
                            return <Tile key={`tile ${i}-${j}`} state={board[i][j]} onClickFunction={()=>{handleTileClick(i,j)}}/>
                        })}
                    </div>
                ))
            }
            </div>
        );
    }else{
        console.log(turn);
        return (
            <div className="Board">
                <Turn state={ turn }/>
            {   
                board.map((row, i)=>(
                    <div className="row" key = {`row ${i}`}>
                        {row.map((col,j)=>{
                            return <Tile key={`tile ${i}-${j}`} state={board[i][j]} onClickFunction={()=>{handleTileClick(i,j)}}/>
                        })}
                    </div>
                ))
            }
            </div>
        );
    
    }
    
}

export default Board;
