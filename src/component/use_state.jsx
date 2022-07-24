import { useState } from "react";

const UseStateHook1 = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCounter((prev) => {
      if (prev < 1) return prev;
      return prev - 1;
    });
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

// option - 2

const UseStateHook = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (clickType) => {
    setCounter((prev) => {
      if (clickType === "increment") return prev + 1;
      if (prev < 1) return prev;
      return prev - 1;
    });
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => handleClick("increment")}>+</button>
      <button onClick={() => handleClick("decrement")}>-</button>
    </div>
  );
};

export default UseStateHook;
