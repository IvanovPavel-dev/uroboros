import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Rezults from "./components/Rezults/Rezults";
import Battlearea from "./components/Battlearea/Battlearea";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Battlearea />
      <Rezults />
    </div>
  );
};

export default App;
