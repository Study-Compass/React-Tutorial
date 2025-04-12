import React, { useState, useEffect } from 'react';
import './Board.scss';

function Board({ reset, setReset }){
    const [board, setBoard] = useState([
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ]); // 0 -> blank, 1 -> O, 2 -> X
    const [turn, setTurn] = useState(false);//false -> p1, true ->
    const [winner, setWinner] = useState(null); // null -> nobody has won, 0 -> draw, 1 -> player1, 2 -> player2

    // 4 possible outcomes : player1 wins, player2 wins, draw, no winner

    useEffect(()=>{
        if(reset){
            setBoard([
                [0,0,0],
                [0,0,0],
                [0,0,0],
            ]);
            setTurn(false);
            setWinner(null);
        }
        //if reset went through
        setReset(false);
    },[reset]);

    //reset button clicked => reset === true => board detects reset is true => resets the board => sets reset false

    useEffect(()=>{
        const checkWin = () => {
            for (let i = 0; i < 3; i++) {
                if (board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][1] === board[i][2]) return board[i][0];
                if (board[0][i] !== 0 && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return board[0][i];
            }
            if (board[0][0] !== 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[0][0];
            if (board[0][2] !== 0 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[0][2];
            return 0;
        };
        const result = checkWin();
        if(result !== 0){
            console.log(`${result} has won`);
            setWinner(result);
        } else {
            let draw = true;
            for (let i = 0; i <= 2; i++) {
                for (let j = 0; j <= 2; j++) {
                    if (board[i][j] === 0) {
                        draw = false;
                        break;
                    }
                }
            }
            if (draw === true) {
                console.log('draw');
                console.log(board);
            } 
        }
    },[board]);

    /*
    for row in board:
        for col in row
            make a div for this cell with the index i and j
    */
    
    const handleTileClick = (i,j) =>{
        if(board[i][j] !== 0 || winner !== null){
            return; //do nothing
        }
        console.log(`tile ${i}, ${j} has been clicked`);
        let copy = board.map(row => row.slice());
        copy[i][j] = turn ? 2 : 1;
        setBoard(copy);
        setTurn(!turn);
    }

    const asdf = () => {
        if (winner === 1) return "player 1 has won";
        if (winner === 2) return "player 2 has won";
        if (winner === 0) return "draw";
    }

    return (
        <div className="Board">
            <div className={`turn ${winner === null ? turn ? "x" : "o" : winner === 0 ? "o" : winner === 1 ? 'o' : 'x'}`}>
                {
                    winner === null ? 
                    <h2>player {turn? "2" : "1"}'s turn</h2>
                    :
                    <h2>{asdf()}</h2> //3 possible outcomes: p1, p2, draw, 0, 1, 2
                }
            </div> 

            {
                board.map((row, i)=>{
                    return(
                        <div className="row">
                            {
                                row.map((col, j)=>(
                                    <div className={`tile ${col === 0 ? "" : col === 1 ? "o" : "x"}`} onClick={()=>handleTileClick(i,j)}>
                                        {col === 0 ? "" : col === 1 ? "O" : "X"}
                                    </div>
                                ))
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Board;