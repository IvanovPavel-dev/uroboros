import React, { useState } from "react";
import s from "./Battlearea.module.css";
import { v4 as uuidv4 } from "uuid";

const Battlearea = () => {
  const [input, setInput] = useState("");
  const [firstLetter, setFirstLetter] = useState("");
  const [lastLetter, setLastLetter] = useState("");
  const [generalFirstLetter, setGeneralFirstLetter] = useState("");
  const [lastWord, setLastWord] = useState("");
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const [wordsArray, setWordsArray] = useState([]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  //сделать эту функцию async
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (wordsArray.length == 0) {
      setIsFirstPlayer(false);
    }

    setWordsArray([...wordsArray, { id: uuidv4(), word: input }]);
    if (generalFirstLetter === "") {
      setGeneralFirstLetter(input.split("")[0]);
    }

    setLastLetter(input.split("").reverse()[0]);
    console.log(lastLetter === firstLetter ? true : false);
    console.log(firstLetter);
    console.log(lastLetter);
    setFirstLetter(input.split("")[0]);
    setInput("");
  };

  return (
    <div className={s.battlearea}>
      <div className={s.player1}>icon1</div>
      <div className={s.player2}>icon2</div>
      <div className={s.knopka}>
        <button onclick="newGameButton()">Start new game BUTTON</button>
      </div>
      <div className={s.letter}>
        <div>{generalFirstLetter}</div>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            placeholder="Следующий ход..."
            value={input}
            required
            onChange={onInputChange}
          />
          <button type="submit">Ход</button>
        </form>
        <div className={s.answer}>answer to moove</div>
      </div>
      <div className={s.result}>list of played words</div>
    </div>
  );
};

export default Battlearea;
