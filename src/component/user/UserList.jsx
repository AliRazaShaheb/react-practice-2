import { useEffect, useState } from "react";
import userHOC from "./DataHOC";

const OldUserList = ({ data }) => {
  return (
    <>
      {data.map((user, idx) => {
        return <div key={idx}>{user.name}</div>;
      })}
    </>
  );
};
const UserList = userHOC(OldUserList, "name");
export default UserList;
