import { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1/comments";
const userHOC = (WrappedComp, entity) => {
  return (props) => {
    const [user, setUser] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
      fetchUserList();
    }, []);

    const fetchUserList = async () => {
      const res = await fetch(baseURL);
      const json = await res.json();
      setUser(json);
    };
    const filterData = user.filter((item) => {
      // if (entity === Object.keys(item))
      //   return item[`${Object.keys(item)}`].indexOf(term) >= 0;
      return item[entity].toLowerCase().indexOf(term.toLowerCase()) >= 0;
    });

    return (
      <div>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <WrappedComp data={filterData} {...props} />
      </div>
    );
  };
};

export default userHOC;
