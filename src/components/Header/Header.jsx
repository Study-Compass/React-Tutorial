import React from "react";
import "./Header.css"
import Logo from '../../assets/icons/cross.svg';

const Header = () => {
    return(
        <header className="header">

            <div className="left">
                <img src={Logo} alt="" className="logo"/>
                <h1>tic-tac-toe</h1>    
            </div>

            <button>
                <h2>
                    reset
                </h2>
            </button>

        </header>
    );

}

export default Header
