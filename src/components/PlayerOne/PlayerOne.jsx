import React from "react";
import s from "./PlayerOne.module.css";

function PlayerOne({ isFirstPlayer, firstPlayerHarts, firstPlayerHartsImg }) {
  return (
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
  );
}
export default PlayerOne;
