import { useEffect, useState } from "react";
import UserHOC from "./DataHOC";

const OldUserList = ({ data }) => {
  return (
    <>
      {data.map((user, idx) => {
        return <div key={idx}>{user.name}</div>;
      })}
    </>
  );
};
const UserList = UserHOC(OldUserList, "name");
export default UserList;
