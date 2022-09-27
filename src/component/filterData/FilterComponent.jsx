import { useEffect, useState } from "react";
import { fruits_data } from "./data";

const FilterComp = () => {
  const [inputValue, setInputValue] = useState({
    filterData: "",
    data: []
  });
  const onChangeHandler = (target) => {
    setInputValue((prev) => ({ ...prev, filterData: target }));
  };
  useEffect(() => {
    setInputValue((prev) => ({ ...prev, data: fruits_data }));
  }, []);

  // solution -1

  const filterDataMap = (filterStr) => {
    return inputValue.data
      .filter((each) => {
        return each.includes(filterStr);
      })
      .map((item, idx) => {
        return <p key={idx}>{item}</p>;
      });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue.filterData}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      {filterDataMap(inputValue.filterData)}
    </div>
  );
};

export default FilterComp;
