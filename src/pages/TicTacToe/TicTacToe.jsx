import React, { useState, useEffect } from "react";
import './TicTacToe.css';
import Header from "../../components/Header/Header";
import Board from "../../components/Board/Board";

function TicTacToe(){
    return(
        <div className="tic-tac-toe">
            <Header/>
            <div className="content">
                <Board/>
            </div>
        </div>
    );
}

export default TicTacToe;