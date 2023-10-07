import React, { useState } from "react";
import "./style.css";
import ColumnGroup from "antd/es/table/ColumnGroup";

export default function MoveLeftRight(props) {
  const [leftArr, set_leftArr] = useState([1, 2, 3]);
  const [rightArr, set_rightArr] = useState([4, 5]);
  const [selectedArr, set_selectedArr] = useState([]);
  const [selectingSide, set_selectingSide] = useState("");

  const moveRight = () => {
    if (selectingSide === "left") {
      const updatedArr = leftArr.filter((each) => !selectedArr.includes(each));
      set_rightArr(rightArr.concat(selectedArr));
      set_leftArr(updatedArr);
      set_selectedArr([]);
    }
  };
  const moveLeft = () => {
    if (selectingSide === "right") {
      const updatedArr = rightArr.filter((each) => !selectedArr.includes(each));
      set_leftArr(leftArr.concat(selectedArr));
      set_rightArr(updatedArr);
      set_selectedArr([]);
    }
  };

  const onItemSelect = (item, side) => {
    set_selectingSide(side);
    if (selectedArr.includes(item)) {
      set_selectedArr(selectedArr.filter((each) => each !== item));
    } else {
      set_selectedArr((prev) => [...prev, Number(item)]);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="left">
          left
          <CheckListComp
            checkData={selectedArr}
            arr={leftArr}
            onChange={onItemSelect}
            side="left"
          />
        </div>
        <div className="middle">
          <button onClick={moveRight}>{">"}</button>
          <button onClick={moveLeft}>{"<"}</button>
        </div>
        <div className="right">
          right
          <CheckListComp
            checkData={selectedArr}
            arr={rightArr}
            onChange={onItemSelect}
            side="right"
          />
        </div>
      </div>
    </div>
  );
}

const CheckListComp = ({ checkData, arr, onChange, side }) => {
  return (
    <>
      {arr.map((each, idx) => {
        return (
          <div key={`arr-${idx}`} className="selectbox">
            <input
              type="checkbox"
              checked={checkData.includes(each)}
              id={each}
              onChange={() => onChange(each, side)}
            />
            <label htmlFor={each}>{`${each}`}</label>
          </div>
        );
      })}
    </>
  );
};
