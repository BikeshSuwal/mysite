import React from "react";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="divtitle">
        <span>Click Counter</span>
      </div>
      <button onClick={increment}>Increase</button>
      <div>You clicked {counter} times</div>
    </>
  );
}
