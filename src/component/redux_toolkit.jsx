import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";

const ReduxToolkitComp = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const handleClick = (func) => {
    dispatch(func());
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => handleClick(increment)}>+</button>
      <button onClick={() => handleClick(decrement)}>-</button>
    </div>
  );
};

export default ReduxToolkitComp;
