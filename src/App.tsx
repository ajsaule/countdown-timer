import { useEffect, useState } from "react";
import "./App.css";
import Tile from "./components/Tile";

import { countdown } from "./helpers/countdown";

function App() {
  const [timer, setTimer] = useState([]);

  useEffect(() => {
    setInterval(() => {
      const time = countdown().split(" ");
      // @ts-ignore
      setTimer(time);
    }, 1000);
  });

  return (
    <div className="App">
      <h1>Launching soon</h1>
      <header className="App-header">
        <Tile time="Days" number={timer[0]} />
        <Tile time="Hours" number={timer[1]} />
        <Tile time="Minutes" number={timer[2]} />
        <Tile time="Seconds" number={timer[3]} />
      </header>
    </div>
  );
}

export default App;
