import { useEffect, useState } from "react";
import userHOC from "./DataHOC";

const OldEmailList = ({ data }) => {
  return (
    <>
      {data.map((user, idx) => {
        return <div key={idx}>{user.email}</div>;
      })}
    </>
  );
};
const EmailList = userHOC(OldEmailList, "email");
export default EmailList;
