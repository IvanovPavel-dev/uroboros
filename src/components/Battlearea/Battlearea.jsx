import React, { useState } from 'react';
import s from './Battlearea.module.css';
import Form from '../Form/Form';

const Battlearea = () => {
    const [input, setInput] = useState('');
    let [firstLetter,setFirstLetter] = useState('');
    let [lastLetter,setLastLetter] = useState('');
    let [generalFirstLetter,setGeneralFirstLetter] = useState('');
    let [lastWord,setLastWord] = useState('');
    let [isFirstPlayer,setIsFirstPlayer] = useState(true);
    const [wordsArray,setWordsArray] = useState([]);
    

    return(
    <div className={s.battlearea}>
            <div className={s.player1}>icon1</div>
            <div className={s.player2}>icon2</div>
            <div className={s.knopka}>
                <button onclick="newGameButton()">
                   Start new game BUTTON
                </button>
            </div>
            <div className={s.letter}>
                <div>A</div>
                <Form input={input} setInput={setInput} wordsArray={wordsArray} setWordsArray={setWordsArray}/>
            </div>
            <div className={s.answer}>answer to moove</div>          
    </div>
    )
} 

export default Battlearea;