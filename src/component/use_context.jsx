import { useContext } from "react";
import { CounterContext } from "../../context/counterContext";

const ContextComp = () => {
  const { counter, setCounter } = useContext(CounterContext);

  const handleClick = (value) => {
    setCounter((prev) => {
      if (value === "increment") return prev + 1;
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

export default ContextComp;
