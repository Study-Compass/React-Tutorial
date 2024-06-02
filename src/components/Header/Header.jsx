import React from "react";
import './Header.css';
import cross from "../../assets/icons/cross.svg"

function Header(){

    function reset(){
        console.log("reset-clicked");
    };


    return(
        <div className="Header">
            <div className="left">
                <img src={cross} alt="cross-icon" />
                <h1>
                    tic-tac-toe
                </h1>
            </div>
            <div className="right">
                <button className="header-button" onClick={reset}>
                    <p>reset</p>
                </button>
            </div>
        </div>
    );
}

export default Header;