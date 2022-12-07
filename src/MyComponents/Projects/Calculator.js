import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    // if (!ops.includes(value)) {
    //   setResult(eval(calc + value).toString());
    // }
  };
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setResult(eval(calc).toString());
  };

  console.log(result);
  const clearall = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div>
      <div className="divtitle">
        <span>Calculator</span>
      </div>
      <div className="calcframe">
        <div className="calcdisplay">
          <div className="typed">{calc || "0"}</div>
          <div className="result"> = {result || "0"}</div>
        </div>
        <div className="rowone">
          <div className="buttons">
            <button
              className="click one"
              value="1"
              onClick={() => updateCalc("1")}
            >
              1
            </button>
            <button
              className="click two"
              value="2"
              onClick={() => updateCalc("2")}
            >
              2
            </button>
            <button
              className="click three"
              value="3"
              onClick={() => updateCalc("3")}
            >
              3
            </button>
            <button
              className="click plus"
              value="+"
              onClick={() => updateCalc("+")}
            >
              +
            </button>
          </div>
        </div>
        <div className="rowone">
          <div className="buttons">
            <button
              className="click four"
              value="4"
              onClick={() => updateCalc("4")}
            >
              4
            </button>
            <button
              className="click five"
              value="5"
              onClick={() => updateCalc("5")}
            >
              5
            </button>
            <button
              className="click six"
              value="6"
              onClick={() => updateCalc("6")}
            >
              6
            </button>
            <button
              className="click minus"
              value="-"
              onClick={() => updateCalc("-")}
            >
              -
            </button>
          </div>
        </div>
        <div className="rowone">
          <div className="buttons">
            <button
              className="click seven"
              value="7"
              onClick={() => updateCalc("7")}
            >
              7
            </button>
            <button
              className="click eight"
              value="8"
              onClick={() => updateCalc("8")}
            >
              8
            </button>
            <button
              className="click nine"
              value="9"
              onClick={() => updateCalc("9")}
            >
              9
            </button>
            <button
              className="click multiply"
              value="*"
              onClick={() => updateCalc("*")}
            >
              ×
            </button>
          </div>
        </div>
        <div className="rowone">
          <div className="buttons">
            <button className="click clear" onClick={clearall}>
              C
            </button>
            <button
              className="click zero"
              value="0"
              onClick={() => updateCalc("0")}
            >
              0
            </button>
            <button className="click equalTo" value="=" onClick={calculate}>
              =
            </button>
            <button
              className="click divide"
              value="/"
              onClick={() => updateCalc("/")}
            >
              /
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
