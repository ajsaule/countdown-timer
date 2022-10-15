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

  const days = timer[0];
  const hours = timer[1];
  const minutes = timer[2];
  const seconds = timer[3];

  return (
    <div className="App">
      <h1>Launching soon</h1>
      <header className="App-header">
        <Tile time={days == 1 ? "Day" : "Days"} number={days} />
        <Tile time={hours == 1 ? "Hour" : "Hours"} number={hours} />
        <Tile time={minutes == 1 ? "Minute" : "Minutes"} number={minutes} />
        <Tile time={seconds == 1 ? "Second" : "Seconds"} number={seconds} />
      </header>
    </div>
  );
}

export default App;
