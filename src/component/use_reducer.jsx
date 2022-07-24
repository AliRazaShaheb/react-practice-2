import { useReducer } from "react";

const initialState = {
  counter: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state.counter + 1;
    case "decrement":
      if (state < 1) return state;
      return state.counter - 1;
    default:
      return;
  }
};

const UseReducerHook = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  const handleClick = (clickType) => {
    dispatch(clickType);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => handleClick("increment")}>+</button>
      <button onClick={() => handleClick("decrement")}>-</button>
    </div>
  );
};

export default UseReducerHook;
