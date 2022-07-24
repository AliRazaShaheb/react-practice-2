import { useContext } from "react";
import { counterContext2 } from "../../context/counterContext2";

const ContextComp2 = () => {
  const { counter, handleClick } = useContext(counterContext2);
  console.log("hello");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => handleClick("increment")}>+</button>
      <button onClick={() => handleClick("decrement")}>-</button>
    </div>
  );
};

export default ContextComp2;
