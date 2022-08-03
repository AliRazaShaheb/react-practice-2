import { useRef, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const childRef = useRef();

  return (
    <div>
      ============ hello from Parent ===============
      <Child ref={childRef} />
      <button
        onClick={() => childRef.current.showMsgHandler("hello from parent")}
      >
        show msg Parent
      </button>
    </div>
  );
};

export default Parent;
