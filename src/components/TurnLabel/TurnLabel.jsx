import React,{useState,useEffect} from "react";
import './TurnLabel.css';

function TurnLabel({turn}){

    const labelClass = turn === "1" ? "one" : "two";

    return(
        <div className={`turnLabel ${labelClass}`}>
            <p>{turn === "1" ? "player 1's turn" : "player 2's turn"}</p>
        </div>
    );
}

export default TurnLabel;