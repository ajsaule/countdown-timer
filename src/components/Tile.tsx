import React from "react";
import "../styles/Tile.scss";

const Tile = ({ time, number }: { time: string; number: number }) => {
  return (
    <div>
      <div className="tile-container">
        <div className="tile-top-half"></div>
        <span className="numbers">{number}</span>
      </div>
      <span>{time}</span>
    </div>
  );
};

export default Tile;
