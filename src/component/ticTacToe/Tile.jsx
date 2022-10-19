import { useState } from "react";

const Tile = ({ each, isChange, setIsChange }) => {
  const [startGame, setStartGame] = useState(false);
  const [gameValue, setGameValue] = useState("x");
  return (
    <div
      key={each}
      style={{
        width: "4rem",
        height: "4rem",
        background: "gray"
      }}
      onClick={() => {
        setStartGame(true);
        gameValue ? setIsChange(true) : setIsChange(false);
        isChange ? setGameValue("x") : setGameValue("0");
      }}
    >
      {startGame ? <p>{gameValue}</p> : ""}
    </div>
  );
};

export default Tile;
