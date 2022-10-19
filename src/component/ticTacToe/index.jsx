import { useState } from "react";
import Tile from "./Tile";

const checkMatch = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const TicTacToe = () => {
  const [isChange, setIsChange] = useState(false);
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div
        style={{
          display: "flex",
          gap: "1rem"
        }}
      >
        {[1, 2, 3, 4].map((each) => {
          return (
            <Tile each={each} isChange={isChange} setIsChange={setIsChange} />
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
