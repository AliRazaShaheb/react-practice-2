import { useEffect, useState } from "react";

const initialState = {
  text: ""
};

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState(initialState);
  useEffect(() => {
    const localItem = JSON.parse(localStorage.getItem("task")) || [];
    console.log(localItem);
    setTodoList(localItem);
  }, []);
  const handleInput = (targetValue) => {
    setTodoInput((prev) => ({ ...prev, text: targetValue }));
  };
  const addTodos = () => {
    setTodoList((prev) => [...prev, todoInput]);
    localStorage.setItem("task", JSON.stringify(todoList));
    setTodoInput(initialState);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={todoInput.text}
          onChange={(e) => handleInput(e.target.value)}
        />
        <button onClick={addTodos}>Add</button>
      </div>
      {todoList.map((each, idx) => {
        return <div key={idx}>{each.text}</div>;
      })}
    </div>
  );
};

export default TodoApp;
