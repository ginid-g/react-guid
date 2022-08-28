import useConter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  const counter = useConter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
