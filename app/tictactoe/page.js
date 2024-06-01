'use client'
import React, { useEffect, useState } from 'react'
import "./global.css"


const WINNING_COMBO = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const TicTacToe = () => {
    const [xTurn, setXTurn] = useState(true);

    const [won, setWon] = useState(false);

    const [wonCombo, setWonCombo] = useState([]);

    const [isDraw, setIsDraw] = useState(false);

    const [popTitle, setPopTitle] = useState('');

    const [boardData, setBoardData] =useState({
        0:'',1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:''
    });

    useEffect( () => {
        checkWinner();
        checkDraw();
    }, [boardData]);

    const updateBoardData = (idx) =>{
        if(!boardData[idx] && !won){ //update only if board data is empty
            let value = xTurn? 'X' : 'O';
            setBoardData({...boardData, [idx]:value});
            setXTurn(!xTurn);
        }
    }

    const checkDraw =() => {
        let check = Object.keys(boardData).every( (v) => boardData[v]); //if every position is filled
        setIsDraw(check);
        if (check) setPopTitle("Match Draw!");
    }

    const checkWinner =() =>{
        WINNING_COMBO.map( (bd) => {
            const [a,b,c] = bd;
            if (boardData[a] && boardData[a]===boardData[b] && boardData[b]===boardData[c]){
                setWon(true);
                setWonCombo([a,b,c]);
                setPopTitle(`Player ${!xTurn? 'X': 'O'} won!`);
                return;
            }
        })
    }

    const reset =() =>{
        setBoardData({0:'',1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:''});
        setXTurn(true);
        setIsDraw(false);
        setWonCombo('');
        setWon(false);
        setPopTitle('');
    }

  return (
    <div className='-m-10'>
        <h1 className='flex justify-center text-4xl font-bold mb-10'>Tic Tac Toe</h1>
        <div className='game flex flex-col items-center'>
            <div className='game-menu mb-5 font-bold text-xl'>
                <p>{xTurn? 'X Turn': 'O Turn'}</p>
                {/*<p>{`Game won ${won} Draw ${isDraw}`}</p>*/}
            </div>

            <div className='game_board'>
                {[...Array(9)].map( (v,idx) =>{
                    return <div key={idx} onClick={() => {updateBoardData(idx)}} className={`square ${wonCombo.includes(idx)? 'highlight'  : ''}`}>{boardData[idx]}</div>
                })}
            </div>
        </div>

        <div className={`pop ${popTitle? 'show': ''}`}>
            <div className='pop-title'>{popTitle}</div>
            <button  className='btn btn-primary' onClick={reset}>New Game</button>
        </div>

    </div>
  )
}

export default TicTacToe

//...Array - spreads the array elements as individual arguments
//Spreading ensures that you retain the existing values while updating only the specific entry.


//Object.keys(boardData): This retrieves an array of all the keys (positions) in boardData.
//.every(callback): This array method checks if every element in the array passes the test implemented by the provided callback function.
//If all elements pass, it returns true; otherwise, it returns false.
//(v) => boardData[v] - hceck if all values are true - board filled