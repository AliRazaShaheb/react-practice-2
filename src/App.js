import { Provider } from "react-redux";
import CounterContextProvider from "../context/counterContext";
import NewContentProvider from "../context/counterContext2";
import CounterContextProviderComp from "../context/counterContext2";
import { store } from "../redux/store";
import { navBarData } from "./component/navbar/data";
import Navbar from "./component/navbar/Navbar";
import ReduxToolkitComp from "./component/redux_toolkit";
import CommentList from "./component/user/CommentList";
import EmailList from "./component/user/EmailList";
import NewUserList from "./component/user/UserList";
import UserList from "./component/user/UserList";
import ContextComp from "./component/use_context";
import ContextComp2 from "./component/use_context2";
import UseReducerHook from "./component/use_reducer";
import UseStateHook from "./component/use_state";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>REACT-PRACTICE -2</h1>
      <main>
        {/* <UseStateHook /> */}
        {/* <UseReducerHook /> */}
        {/* <Provider store={store}><ReduxToolkitComp /></Provider> */}
        {/* <CounterContextProvider><ContextComp /></CounterContextProvider> */}

        {/* <NewContentProvider>
          <ContextComp2 />
        </NewContentProvider> */}
      </main>
      {/* <Navbar data={navBarData} /> */}
      <div style={divStyle}>
        <UserList />
        <EmailList />
      </div>
    </div>
  );
}

const divStyle = {
  display: "flex",
  gap: "1rem"
};
