import React, { useState, useEffect } from "react";
import './TicTacToe.css';
import Header from "../../components/Header/Header";
import Board from "../../components/Board/Board";
import TurnLabel from "../../components/TurnLabel/TurnLabel";

function TicTacToe(){

    const [turn, setTurn]=useState("1");
    const [winner, setWinner]=useState("0");


    function onBoardChange(){
        setTurn(prevTurn => (prevTurn === "1" ? "2": "1"));
    }

    function win(){
        setWinner(prevWinner => (prevWinner === "0"? "1": "0"));
    }

    function resetBoard(){
        setWinner("0");
        setTurn("0");
    }


    
    return(
        <div className="tic-tac-toe">
            <Header resetBoard={resetBoard}/>
            <div className="content">
                <TurnLabel turn={turn} winner={winner}/>
                <div className="board-container">
                    <Board turn={turn} winner={winner} onBoardChange={onBoardChange} win={win}/>
                </div>
            </div>
        </div>
    );
}

export default TicTacToe;