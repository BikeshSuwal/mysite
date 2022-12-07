import React, { useState } from "react";

export default function TextConvert() {
  //   let Original = text;

  const ToUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const ToLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const Cleartext = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

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
        <button className="btn convertButton" onClick={Cleartext}>
          Clear text
        </button>
      </div>
    </>
  );
}
