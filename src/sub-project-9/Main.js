import App from "./App";

import { BrowserRouter } from "react-router-dom";

import "./index.css";

const Main = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Main;
