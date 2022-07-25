import { useContext } from "react";
import { useSelector } from "react-redux";
import { newContext } from "../../context/counterContext2";

const ContextComp2 = () => {
  const { counter, handleCounter } = useContext(newContext);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => handleCounter("increment")}>+</button>
      <button onClick={() => handleCounter("decrement")}>-</button>
    </div>
  );
};

export default ContextComp2;
