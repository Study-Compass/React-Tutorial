import React, { useState, useEffect } from "react";
import './TicTacToe.css';
import Header from "../../components/Header/Header";
import Board from '../../components/Board/Board';


function TicTacToe(){
    const [turn, setTurn] = useState(1);
    const [key, setKey] = useState(0); 
    const [winner, setWinner] = useState(null);
    
    function onBoardChange(){
        if (turn === 1){
            setTurn(2);
        } else {
            setTurn(1);
        }
    }

    function resetGame() {
        setKey(prevKey => prevKey + 1); // Change the key to reset the Board
        setTurn(1);
        setWinner(null);
    }

    return(
        <div className="tic-tac-toe">
            <Header resetGame={resetGame}/>
            <div className="content">
                <div className={`players ${turn === 2 ? "": "blue"}`}>
                    {winner ? `Player ${winner} wins!` : `Player ${turn}'s turn`}
                </div>
                <Board key={key} turn = {turn} onBoardChange = {onBoardChange} setWinner={setWinner} />
            </div>                     
        </div>
    );
}

export default TicTacToe;