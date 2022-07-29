import { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1/comments";
const DataHOC = (WrappedComp) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    const res = await fetch(baseURL);
    const json = await res.json();
    setUser(json);
  };

  return (props) => <WrappedComp data={user} {...props} />;
};

export default DataHOC;
