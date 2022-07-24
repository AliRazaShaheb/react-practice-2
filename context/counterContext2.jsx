import { createContext, useState } from "react";

export const CounterContext2 = createContext();

const CounterContextProviderComp = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = (value) => {
    setCounter((prev) => {
      if (value === "increment") return prev + 1;
      if (prev < 1) return prev;
      return prev - 1;
    });
  };
  return (
    <CounterContext2.Provider value={{ counter, handleClick }}>
      {children}
    </CounterContext2.Provider>
  );
};

export default CounterContextProviderComp;
