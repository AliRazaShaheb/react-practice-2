import React from "react";
import { Provider } from "react-redux";
import CounterContextProvider from "../context/counterContext";
import NewContentProvider from "../context/counterContext2";
import CounterContextProviderComp from "../context/counterContext2";
import { store } from "../redux/store";
import Colorchanger from "./component/colorchanger";
import FilterComp from "./component/filterData/FilterComponent";
import { navBarData } from "./component/navbar/data";
import Navbar from "./component/navbar/Navbar";
import PaginationComp from "./component/pagination";
import Parent from "./component/parent_child/Parent";
import ReduxToolkitComp from "./component/redux_toolkit";
import TicTacToe from "./component/ticTacToe";
import TodoApp from "./component/todo/todoApp";
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
        {/* <FilterComp /> */}
        {/* <TodoApp /> */}

        {/* TODO tictactoe */}
        {/* <TicTacToe /> */}

        <Colorchanger />
      </main>
      {/* <Navbar data={navBarData} /> */}
      {/* <div style={divStyle}>
        <UserList />
        <EmailList />
      </div> */}
      {/* <PaginationComp /> */}
      {/* <Parent /> */}
    </div>
  );
}

const divStyle = {
  display: "flex",
  gap: "1rem"
};
