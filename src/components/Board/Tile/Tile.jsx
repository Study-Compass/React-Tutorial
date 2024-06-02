import React,{useState,useEffect} from "react";
import './Tile.css';


// state="x" : X
// state="o" : O
// state="b" : Blank
function Tile({index, state, onChange}){

    const [tileState, setTileState]=useState(state);
    useEffect(()=>{
        if(state==='x')
            setTileState("X");
        if(state==='o')
            setTileState("O");
        if(state==='b')
            setTileState("Blank");
    },[]);

    function onTileClick(){
        onChange();
    }

    return(
        <div className="tile" onClick={onTileClick}>
            {tileState}
        </div>
    );
}

export default Tile;