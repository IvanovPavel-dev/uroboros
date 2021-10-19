import React from "react";
import s from "./Header.module.css";

let article =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const Header = () => {
  return (
    <header className={s.wraper}>
      <div className={s.header}>Уроборос</div>
      <div>Правила игры</div>
      <div className={s.article}>{article}</div>
    </header>
  );
};

export default Header;
