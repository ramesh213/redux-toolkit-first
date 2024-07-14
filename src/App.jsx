import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counter/counterSlice";

import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="gap-10">
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())} className="m-2">Increment</button>
        <button onClick={() => dispatch(decrement())} className="m-2">Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
      </div>
    </>
  );
}

export default App;
