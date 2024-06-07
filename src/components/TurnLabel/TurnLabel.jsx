import React,{useState,useEffect} from "react";
import './TurnLabel.css';

function TurnLabel({turn, winner}){

    const labelClass = turn === "1" ? "one" : "two";

    return(
        <div className={`turnLabel ${labelClass}`}>
            <p>{winner=== "0" ? (turn === "1" ? "player 1's turn" : "player 2's turn") : 
            turn === "1" ? "player 1 wins!" : "player 2 wins!"}</p>
        </div>
    );
}

export default TurnLabel;