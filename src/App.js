import { Provider } from "react-redux";
import CounterContextProvider from "../context/counterContext";
import CounterContextProviderComp from "../context/counterContext2";
import { store } from "../redux/store";
import ReduxToolkitComp from "./component/redux_toolkit";
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
        <CounterContextProviderComp>
          <ContextComp2 />
        </CounterContextProviderComp>
      </main>
    </div>
  );
}
