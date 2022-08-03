import { forwardRef, useImperativeHandle, useState } from "react";

const Child = forwardRef((props, ref) => {
  const [showMsg, setShowMsg] = useState("");
  useImperativeHandle(ref, () => ({ showMsgHandler }));
  const showMsgHandler = (msg) => {
    setShowMsg(msg);
  };
  return (
    <div>
      hello from child
      <div>data: {showMsg}</div>
      <button onClick={() => showMsgHandler("hello from child")}>
        show msg child
      </button>
    </div>
  );
});

export default Child;
