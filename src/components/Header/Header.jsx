import React from 'react';
import "./Header.scss";
import logo from '../../assets/icons/cross.svg';

function Header(){
    return (
        <div className="Header">
            <div className="left">
                <img src={logo} alt="" />
                <h1>tic-tac-toe</h1>
            </div>
            <div className="right">
                <button>reset</button>
            </div>
        </div>
    )
}

export default Header;