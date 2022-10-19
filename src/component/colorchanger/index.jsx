import { useState } from "react";

const Colorchanger = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <p style={{ marginBottom: "1rem" }}>Color changer</p>
      <BgContainer />
    </div>
  );
};

export default Colorchanger;

export const BgContainer = () => {
  const [uiColor, setUiColor] = useState("");
  const changeColor = (color) => {
    setUiColor(color);
  };
  return (
    <div>
      <div
        style={{
          width: "15rem",
          height: "15rem",
          background: `${uiColor || "rgba(255,255,255,0.2)"}`,
          marginBottom: "2rem"
        }}
      ></div>
      <ColorInput changeColor={changeColor} />
    </div>
  );
};

export const ColorInput = ({ changeColor }) => {
  const [input, setInput] = useState("");

  const colorHandler = (e) => {
    const { value } = e.target;
    setInput(value);
    changeColor(value);
  };
  const randomColor = () => {
    const randColor = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    changeColor(randColor);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input type="text" value={input} onChange={colorHandler} />
      <p>OR</p>
      <button onClick={randomColor}>Random Color</button>
    </div>
  );
};
