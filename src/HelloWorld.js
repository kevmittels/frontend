import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCount, incrementCount, resetCount } from "./CounterSlice";

export default function HelloWorld() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  const incrementCountHandler = () => {
    dispatch(incrementCount());
  }

  const resetCountHandler = () => {
    dispatch(resetCount());
  }

  return (
    <div className="App">
      <p>Hello World!</p>
      <p>Count: {count} </p>
      <button type="button" onClick={incrementCountHandler}>
        Increment
      </button>
      <button type="button" onClick={resetCountHandler}>
        Reset
      </button>
    </div>
  );
}
