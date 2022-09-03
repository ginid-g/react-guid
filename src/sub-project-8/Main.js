import App from "./App";
import "./Main.css";

import { Provider } from "react-redux";

import store from "./store";

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Main;
