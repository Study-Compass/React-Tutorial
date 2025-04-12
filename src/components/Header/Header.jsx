import React from 'react';
import "./Header.scss";
import logo from '../../assets/icons/cross.svg';
import {useEffect} from 'react';


function Header({ reset, setReset }){

    const onReset = () => {
        setReset(true);
    }

    useEffect(()=>{
        if(!reset){
            //reset worked
        }
    },[reset]);

    return (
        <div className="Header">
            <div className="left">
                <img src={logo} alt="" />
                <h1>tic-tac-toe</h1>
            </div>
            <div className="right">
                <button onClick={onReset}>reset</button>
            </div>
        </div>
    )
}

export default Header;