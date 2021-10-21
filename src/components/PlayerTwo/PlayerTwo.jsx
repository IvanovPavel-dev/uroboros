import React from "react";
import s from "./PlayerTwo.module.css";

function PlayerTwo({ isFirstPlayer, secondPlayerHarts, secondPlayerHartsImg }) {
  return (
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
  );
}
export default PlayerTwo;
