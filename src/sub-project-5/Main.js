import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";

function Main() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default Main;
