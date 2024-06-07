import React,{useState,useEffect} from "react";
import './Tile.css';
import O from "../../../assets/icons/O.svg"
import X from "../../../assets/icons/X.svg"


// state="x" : X
// state="o" : O
// state="b" : Blank
function Tile({index, state, onChange}){
    console.log(index, state);
    const [tileState, setTileState]=useState(state);
    useEffect(()=>{
        if(state==='x')
            setTileState("X");
        if(state==='o')
            setTileState("O");
        if(state==='b')
            setTileState("Blank");
        console.log(tileState);
    },[state]);

    function onTileClick(){
        if (state === 'b'){
            onChange(index);
        }
    }

    return(
        <div className={`tile ${state}`} onClick={onTileClick}>
            {
                state !== "b" && 
                <img src={state === "x" ? X: O} alt="O-icon" />
            }
        </div>
    );
}

export default Tile;