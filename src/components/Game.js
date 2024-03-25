import React, { useState } from 'react';
import Result from './Result';
import"./Game.css";
const system = Math.floor(Math.random() * 10) + 1;

function Game() {
    const [term, setTerm] = useState("");
   
    function change(e) {
        setTerm(e.target.value);
    }

    return (
        <div className="container">
            <h1>Guess the number 1 to 10  </h1>
            <input id='term' name='term' onChange={change}  maxLength={2}/>
            <Result term={term} system={system} />
        </div>
    );
}

export default Game;
