import useConter from "../hooks/use-counter";

import Card from "./Card";

const BackwardCounter = () => {
  const counter = useConter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
