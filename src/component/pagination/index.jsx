import { useEffect, useState } from "react";
const baseURL = "https://jsonplaceholder.typicode.com/users/1/todos";
const PaginationComp = () => {
  const [paginationData, setPaginationData] = useState([]);

  useEffect(() => {
    fetchData(baseURL);
  }, []);
  const fetchData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    setPaginationData(json);
  };
  console.log(paginationData);
  return (
    <div>
      <div style={containerPagination}>data</div>
      <div>buttons</div>
    </div>
  );
};

export default PaginationComp;

const containerPagination = {
  backgroundColor: "blue",
  height: "70vh"
};
