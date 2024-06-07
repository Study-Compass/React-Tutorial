import React, { useState, useEffect } from "react";
import './TicTacToe.css';
import Header from "../../components/Header/Header";
import Board from "../../components/Board/Board";
import TurnLabel from "../../components/TurnLabel/TurnLabel";

function TicTacToe(){

    const [turn, setTurn]=useState("1");


    function onBoardChange(){
        setTurn(prevTurn => (prevTurn === "1" ? "2": "1"));
    }

    function resetBoard(){
        setTurn("1");
        console.log("reset-clicked");

    }


    
    return(
        <div className="tic-tac-toe">
            <Header resetBoard={resetBoard}/>
            <div className="content">
                <TurnLabel turn={turn}/>
                <div className="board-container">
                    <Board turn={turn} onBoardChange={onBoardChange}/>
                </div>
            </div>
        </div>
    );
}

export default TicTacToe;