import { useEffect, useState } from "react";
import { countdown } from "./helpers/countdown";

import Tile from "./components/Tile";

import "./App.scss";

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

  const takeoff = (360 / days) * 20;

  return (
    <div className="App">
      <div className="heading-container">
        <div>
          <span />
          <a href="mailto:andrejsaue8@gmail.com">Contact us</a>
        </div>
      </div>
      <header className="App-header">
        <Tile time={days == 1 ? "Day" : "Days"} number={days} />
        <Tile time={hours == 1 ? "Hour" : "Hours"} number={hours} />
        <Tile time={minutes == 1 ? "Minute" : "Minutes"} number={minutes} />
        <Tile time={seconds == 1 ? "Second" : "Seconds"} number={seconds} />
      </header>
      <span style={{ bottom: takeoff }} className="rocket">
        🚀
      </span>
    </div>
  );
}

export default App;
