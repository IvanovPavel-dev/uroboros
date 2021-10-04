import React from 'react';
import s from './Battlearea.module.css';


const Battlearea = () => {
    return <div className={s.battlearea}>

        <div className={s.player1}>icon1</div>
        <div className={s.knopka}>new game</div>
        <div className={s.player2}>icon2</div>
        <div className={s.letter}>A</div>
        <div className={s.answer}>new game</div>
            <div className={s.input}><input  type="text" /></div>
        </div>
    
} 

export default Battlearea;