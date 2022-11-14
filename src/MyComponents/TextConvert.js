import React, { useState } from "react";

export default function TextConvert() {
  //   let Original = text;

  const ToUpper = () => {
    console.log("ToUpper clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const ToLower = () => {
    console.log("ToLower clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  console.log(text);

  const [text, setText] = useState("");
  return (
    <>
      <div className="divtitle">
        <span>Text Converter</span>
      </div>
      <div className="formbox">
        <textarea
          className="form"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn convertButton" onClick={ToUpper}>
          To UPPERCASE
        </button>
        <button className="btn convertButton" onClick={ToLower}>
          To lowercase
        </button>
      </div>
    </>
  );
}
