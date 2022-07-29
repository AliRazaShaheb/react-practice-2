import { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1/comments";
const UserList = () => {
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

  const renderUser = user
    .filter((item) => {
      // console.log( item.name.indexOf(term))
      return item.name.indexOf(term) >= 0;
    })
    .map((user, idx) => {
      return <div key={idx}>{user.name}</div>;
    });
  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {renderUser}
    </div>
  );
};

export default UserList;
