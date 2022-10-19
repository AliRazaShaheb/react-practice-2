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
    return color;
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
  const [selectColor, setSelectColor] = useState("");

  const colorHandler = (e) => {
    const { value } = e.target;
    setInput(value);
    const latestColor = changeColor(value);
    setSelectColor(latestColor);
  };
  const selectColorHandler = (e) => {
    const { value } = e.target;
    setSelectColor(value);
    changeColor(value);
  };
  const randomColor = () => {
    const randColor = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    const latestColor = changeColor(randColor);
    console.log(latestColor);
    setSelectColor(latestColor);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input type="text" value={input} onChange={colorHandler} />
      <p>OR</p>
      <label>
        Select Color:
        <input
          type="color"
          value={selectColor}
          onChange={selectColorHandler}
          style={{ marginLeft: "2rem" }}
        />
      </label>
      <p>OR</p>
      <button onClick={randomColor}>Random Color</button>
    </div>
  );
};
