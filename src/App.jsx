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
      <div className=" w-[500px] h-[400px] bg-slate-400 gap-10 mx-auto rounded-md">
        <h1 className="pt-20 text-5xl bold">Counter: {count}</h1>
        <div className=" flex mt-10 items-center justify-center space-around">
        <button onClick={() => dispatch(increment())} className="m-2 w-30 text-white bg-slate-800 p-2 rounded-lg">Increment</button>
        <button onClick={() => dispatch(decrement())} className="m-2 w-30 text-white bg-slate-800 p-2 rounded-lg">Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))} className="w-30 text-white bg-slate-800 p-2 rounded-lg">
          Increment by 5
        </button>
        </div>
      </div>
    </>
  );
}

export default App;
