import React from "react";
import "./App.scss";

import Scoreboard from "./components/Scoreboard/Scoreboard";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title />
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
