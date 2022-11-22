import React from "react";
import Calculator from "./Projects/Calculator";
import Counter from "./Projects/Counter";
import TextConvert from "./Projects/TextConvert";

export default function Projects() {
  return (
    <div>
      <div className="container">
        <TextConvert />
      </div>
      <div className="container">
        <Counter />
      </div>
      <div className="container">
        <Calculator />
      </div>
    </div>
  );
}
