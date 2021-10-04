import React from 'react';
import s from './Header.module.css';

let article ='Правила очень простые - первый игрок назвает слово по заданной теме, второй игрок называет слово, первая буква которого совпадает с последней буквой слова, названного первым игроком. Далее третий игрок и т. д по очереди. Тот, кто не может в течении 30 секунд придумать слово с нужной буквы, выбывает из игры.'

const Header = () => {
    return <header className={s.wraper}>
        <div className={s.header}>Uroboros</div>
        <div>Правила игры</div>
        <div className={s.article}>{article}</div>
    </header >
} 

export default Header;