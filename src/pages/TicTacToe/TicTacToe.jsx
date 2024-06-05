import React, { useState, useEffect } from "react";
import './TicTacToe.css';
import Header from "../../components/Header/Header";
import Board from "../../components/Board/Board";
import TurnLabel from "../../components/TurnLabel/TurnLabel";

function TicTacToe(){

    const [turn, setTurn]=useState("1");


    function onBoardChange1(){
        setTurn(prevTurn => (prevTurn === "1" ? "2": "1"));
    }


    
    return(
        <div className="tic-tac-toe">
            <Header/>
            <div className="content">
                <TurnLabel turn={turn}/>
                <div className="board-container">
                    <Board turn={turn} onBoardChange={onBoardChange1}/>
                </div>
            </div>
        </div>
    );
}

export default TicTacToe;