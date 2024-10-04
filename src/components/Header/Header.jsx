import React from "react";
import "./Header.css"
import Logo from '../../assets/icons/cross.svg';
import resetGame from '../Board/Board';


const Header = ({ setReset }) => {

    // function handleClick(){
    //     setReset(true);
    // }

    return(
        <header className="header">

            <div className="left">
                <img src={Logo} alt="" className="logo"/>
                <h1>tic-tac-toe</h1>    
            </div>

            <button onClick={()=>{setReset(true)}}>
                <h2>
                    reset
                    
                </h2>
            </button>

        </header>
    );

}

export default Header
