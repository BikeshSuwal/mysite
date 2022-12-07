import React from "react";
import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="divtitle">
        <span>Click Counter</span>
      </div>
      <div className="counter">
        <button onClick={increment}>Increase</button>
        <button onClick={reset}>Reset</button>
        <div>You clicked {counter} times</div>
      </div>
    </>
  );
}
