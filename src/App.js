import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Battlearea from "./components/Battlearea/Battlearea";

// const initialState = {
//   input: "",
//   wordsArray: [],
//   generalFirstLetter: "",
//   firstLetter: "",
//   lastLetter: "",
//   lastWord: "",
//   isFirstPlayer: true,
// };

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Battlearea />
    </div>
  );
};

export default App;
