import { createContext, useState } from "react";

export const newContext = createContext();

const NewContentProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (value) => {
    setCounter((prev) => {
      if (value === "increment") return prev + 1;
      if (prev < 1) return prev;
      return prev - 1;
    });
  };

  return (
    <newContext.Provider value={{ counter, handleCounter }}>
      {children}
    </newContext.Provider>
  );
};
export default NewContentProvider;
