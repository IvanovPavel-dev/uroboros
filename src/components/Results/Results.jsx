import React from "react";
import s from "./Results.module.css";

function Results({ wordsArray, snakeAppear, isWin }) {
  return (
    <div className={s.result}>
      <div>
        {snakeAppear && (
          <img
            className={s.snake}
            src="https://key0.cc/images/small/10643_3a392b79930ddfc3f00bd751505386a9.png"
            alt={"logo"}
          />
        )}
        {isWin && (
          <img
            className={s.snake}
            src="https://freepngimg.com/thumb/ouroboros/1-2-ouroboros-free-png-image.png"
            alt={"logo"}
          />
        )}
      </div>
      <div className={s.result}>
        {[...wordsArray].reverse().map((item) => {
          return <li key={item.key}>{item.word}</li>;
        })}
      </div>
    </div>
  );
}

export default Results;
