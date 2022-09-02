import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => dispatch(counterActions.toggle());

  const incrementHandler = () => dispatch(counterActions.increment());

  const decrementHandler = () => dispatch(counterActions.decrement());

  const increaseHandler = () => dispatch(counterActions.increase(5));

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      <button onClick={incrementHandler}>INCREMENT</button>
      <button onClick={decrementHandler}>DECREMENT</button>
      <button onClick={increaseHandler}>INCREASE</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
