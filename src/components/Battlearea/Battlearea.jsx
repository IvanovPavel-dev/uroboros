import React, { useState } from "react";
import s from "./Battlearea.module.css";
//import { v4 as uuidv4 } from "uuid";
import pic1 from "./wer.png";
import pic2 from "./wer1.png";

const Battlearea = () => {
  const [input, setInput] = useState("");
  const [lastLetter, setLastLetter] = useState("");
  const [generalFirstLetter, setGeneralFirstLetter] = useState("");
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const [wordsArray, setWordsArray] = useState([]);
  const [mooveAnswer, setMooveAnswer] = useState("начнём");
  let [firstPlayerHarts, setFirstPlayerHearts] = useState(5);
  let [secondPlayerHarts, setSecondPlayerHearts] = useState(5);

  function onFormSubmit(event) {
    event.preventDefault();

    if (wordsArray.length === 0) {
      setIsFirstPlayer(false);
      setWordsArray([...wordsArray, input]);
      setGeneralFirstLetter(input[0]);
      setLastLetter(Array.from(input)[input.length - 1]);
      setMooveAnswer("продолжим");
    } else {
      if (wordsArray.includes(input)) {
        setIsFirstPlayer(isFirstPlayer === true ? false : true);
        setMooveAnswer("слово уже было!!!");
        isFirstPlayer === true
          ? setFirstPlayerHearts(firstPlayerHarts - 1)
          : setSecondPlayerHearts(secondPlayerHarts - 1);
      } else {
        if (lastLetter === input[0]) {
          setWordsArray([...wordsArray, input]);
          setLastLetter(Array.from(input)[input.length - 1]);
          setIsFirstPlayer(isFirstPlayer === true ? false : true);
          setMooveAnswer("правильно");
        } else {
          setIsFirstPlayer(isFirstPlayer === true ? false : true);
          setMooveAnswer("буквы не совпали!!!");
          isFirstPlayer === true
            ? setFirstPlayerHearts(firstPlayerHarts - 1)
            : setSecondPlayerHearts(secondPlayerHarts - 1);
        }
      }
    }
    setInput("");
  }

  return (
    <div className={s.battlearea}>
      <div className={s.player1}>
        <img
          className={s.img}
          src="https://i.pinimg.com/originals/54/90/13/549013cde1373f75086b99b2d3c4e423.png"
          alt={"logo"}
        />
        <div>{firstPlayerHarts}</div>
      </div>
      <div className={s.player2}>
        <img
          className={s.img}
          src="https://i.pinimg.com/originals/fe/2a/7d/fe2a7d2785461fd4d56707853817bef4.png"
          alt={"logo"}
        />

        <div>{secondPlayerHarts}</div>
      </div>

      <div className={s.letter}>
        <div className={s.knopka}>
          <button onclick="newGameButton()">Start new game BUTTON</button>
        </div>
        <div>{generalFirstLetter}</div>
        <input
          type="text"
          placeholder="Следующий ход..."
          value={input}
          required
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={onFormSubmit}>Ход</button>

        <div className={s.answer}>{mooveAnswer}</div>
      </div>
      <div className={s.result}>{wordsArray}</div>
    </div>
  );
};

export default Battlearea;
