import { useReducer } from "react";

let counter = 0;
// use object for complex multiple state

const reducer = (state, action) => {
  // state will be object here
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      if (state < 1) return state;
      return state - 1;
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, counter); // can use default value as an object
  // if given state can be object for multiple state
  const handleClick = (clickType) => {
    dispatch({ type: clickType });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => handleClick("increment")}>+</button>
      <button onClick={() => handleClick("decrement")}>-</button>
    </div>
  );
};

//option-2

export default UseReducerHook;
