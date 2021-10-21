import React, { useEffect, useState } from "react";
import s from "./Battlearea.module.css";
import { v4 as uuidv4 } from "uuid";
import oneHearts from "../../images/rating-1.png";
import twoHearts from "../../images/rating-2.png";
import threeHearts from "../../images/rating-3.png";
import fourHearts from "../../images/rating-4.png";
import fiveHearts from "../../images/rating-5.png";
import deth from "../../images/deth.png";
import Results from "../Results/Results";

const Battlearea = () => {
  const [input, setInput] = useState("");
  const [lastLetter, setLastLetter] = useState("");
  const [generalFirstLetter, setGeneralFirstLetter] = useState("#");
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const [wordsArray, setWordsArray] = useState([]);
  const [mooveAnswer, setMooveAnswer] = useState("начнём");
  const [firstPlayerHarts, setFirstPlayerHearts] = useState(5);
  const [secondPlayerHarts, setSecondPlayerHearts] = useState(5);
  const [firstPlayerHartsImg, setFirstPlayerHeartsImg] = useState();
  const [secondPlayerHartsImg, setSecondPlayerHeartsImg] = useState();
  const [isValidInput, setIsValidInput] = useState(false);
  const [isWin, setisWin] = useState(false);
  const [snakeAppear, setsnakeAppear] = useState(false);
  useEffect(() => {
    if (input === "") {
      setIsValidInput(false);
    } else {
      setIsValidInput(true);
    }
  }, [input]);

  useEffect(() => {
    switch (firstPlayerHarts) {
      case 5:
        setFirstPlayerHeartsImg(fiveHearts);
        break;
      case 4:
        setFirstPlayerHeartsImg(fourHearts);
        break;
      case 3:
        setFirstPlayerHeartsImg(threeHearts);
        break;
      case 2:
        setFirstPlayerHeartsImg(twoHearts);
        break;
      case 1:
        setFirstPlayerHeartsImg(oneHearts);
        break;
      case 0:
        setFirstPlayerHeartsImg(deth);
        break;
      default:
    }
  }, [firstPlayerHarts]);

  useEffect(() => {
    switch (secondPlayerHarts) {
      case 5:
        setSecondPlayerHeartsImg(fiveHearts);
        break;
      case 4:
        setSecondPlayerHeartsImg(fourHearts);
        break;
      case 3:
        setSecondPlayerHeartsImg(threeHearts);
        break;
      case 2:
        setSecondPlayerHeartsImg(twoHearts);
        break;
      case 1:
        setSecondPlayerHeartsImg(oneHearts);
        break;
      case 0:
        setSecondPlayerHeartsImg(deth);
        break;
      default:
    }
  }, [secondPlayerHarts]);

  function lettersMatch() {
    setWordsArray([...wordsArray, { word: input, key: uuidv4() }]);
    setLastLetter(Array.from(input)[input.length - 1]);
    setIsFirstPlayer(isFirstPlayer === true ? false : true);
    setMooveAnswer("правильно");
  }
  useEffect(() => {
    if (firstPlayerHarts === 0) {
      setsnakeAppear(true);
      setMooveAnswer("появился ЗМЕЙ!");
    } else {
      setsnakeAppear(false);
    }
  }, [firstPlayerHarts]);

  useEffect(() => {
    if (secondPlayerHarts === 0) {
      setsnakeAppear(true);
      setMooveAnswer("появился ЗМЕЙ!");
    } else {
      setsnakeAppear(false);
    }
  }, [secondPlayerHarts]);

  function lettersMissMatch() {
    setIsFirstPlayer(isFirstPlayer === true ? false : true);
    setMooveAnswer("буквы не совпали!!!");
    isFirstPlayer === true
      ? setFirstPlayerHearts(firstPlayerHarts - 1)
      : setSecondPlayerHearts(secondPlayerHarts - 1);
  }

  function wordInArrayMissMatch() {
    setIsFirstPlayer(isFirstPlayer === true ? false : true);
    setMooveAnswer("слово уже было!!!");
    isFirstPlayer === true
      ? setFirstPlayerHearts(firstPlayerHarts - 1)
      : setSecondPlayerHearts(secondPlayerHarts - 1);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    if (wordsArray.length === 0) {
      setIsFirstPlayer(false);
      setGeneralFirstLetter(input[0]);
      setLastLetter(Array.from(input)[input.length - 1]);
      setWordsArray([...wordsArray, { word: input, key: uuidv4() }]);
      setMooveAnswer("продолжим");
    } else {
      if (firstPlayerHarts === 0 || secondPlayerHarts === 0) {
        if (wordsArray.some((e) => e.word === input)) {
          setMooveAnswer("ТЫ МЁРТВ!");
        } else {
          if (
            lastLetter === input[0] &&
            generalFirstLetter === Array.from(input)[input.length - 1]
          ) {
            setsnakeAppear(false);
            setisWin(true);
            setMooveAnswer("Змеюка повержена!");
            setWordsArray([...wordsArray, { word: input, key: uuidv4() }]);
          } else {
            setMooveAnswer("ТЫ МЁРТВ!");
          }
        }
      } else {
        if (wordsArray.some((e) => e.word === input)) {
          wordInArrayMissMatch();
        } else {
          if (lastLetter === input[0]) {
            lettersMatch();
          } else {
            lettersMissMatch();
          }
        }
      }
    }
    setInput("");
  }

  function startNewGame(event) {
    setInput("");
    setWordsArray([]);
    setLastLetter("");
    setGeneralFirstLetter("#");
    setIsFirstPlayer(true);
    setMooveAnswer("начнём");
    setFirstPlayerHearts(5);
    setSecondPlayerHearts(5);
    setisWin(false);
  }

  return (
    <div className={s.battlearea}>
      <div className={s.player1}>
        <img
          className={isFirstPlayer ? s.img : s.imgOpacity}
          src="https://i.pinimg.com/originals/54/90/13/549013cde1373f75086b99b2d3c4e423.png"
          alt={"logo"}
        />
        <div>
          <img className={s.heart} src={firstPlayerHartsImg} alt={"logo"} />
        </div>
        <img
          className={firstPlayerHarts === 0 ? s.crossOpacity : s.cross}
          src="https://cs9.pikabu.ru/post_img/2020/06/26/6/1593158708124569366.png"
          alt={"logo"}
        />
      </div>
      <div className={s.player2}>
        <img
          className={!isFirstPlayer ? s.img : s.imgOpacity}
          src="https://i.pinimg.com/originals/fe/2a/7d/fe2a7d2785461fd4d56707853817bef4.png"
          alt={"logo"}
        />
        <div>
          <img className={s.heart} src={secondPlayerHartsImg} alt={"logo"} />
        </div>
        <img
          className={secondPlayerHarts === 0 ? s.crossOpacity : s.cross}
          src="https://cs9.pikabu.ru/post_img/2020/06/26/6/1593158708124569366.png"
          alt={"logo"}
        />
      </div>
      <div className={s.letter}>
        <div className={s.knopka}>
          <button className={s.button} onClick={startNewGame}>
            НОВАЯ ИГРА
          </button>
        </div>
        <div>{generalFirstLetter}</div>
        <input
          type="text"
          placeholder="Следующий ход..."
          className={s.input}
          value={input}
          disabled={
            mooveAnswer === "ТЫ МЁРТВ!" || mooveAnswer === "Змеюка повержена!"
          }
          required
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          className={s.buttonSmall}
          disabled={!isValidInput}
          onClick={onFormSubmit}
        >
          Ход
        </button>
        <div className={s.answer}>{mooveAnswer}</div>
      </div>
      <Results
        className={s.result}
        wordsArray={wordsArray}
        snakeAppear={snakeAppear}
        isWin={isWin}
      />
    </div>
  );
};

export default Battlearea;
