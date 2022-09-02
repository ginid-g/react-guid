// import logo from "./logo.svg";
import "./App.css";
// import ExpensProject from "./sub/expense/ExpensProject";
// import Course from "./course/Course";

// import Sub2 from "./sub2/Sub2";

import Main from "./sub-project-7/Main";

import { Provider } from "react-redux";
import store from "./sub-project-7/store";

function App() {
  return (
    <div className="App">
      {/* <ExpensProject></ExpensProject> */}
      {/* <Course /> */}
      {/* <Sub2 /> */}
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
