import React, { useState } from "react";

export default function Calculator() {
  return (
    <div>
      <div className="divtitle">
        <span>Calculator</span>
      </div>
      <div className="calcframe">
        <div className="calcdisplay">
          <div className="typed"></div>
          <div className="result"></div>
        </div>
        <div className="buttons">
          <button className="one">1</button>
          <button className="two">2</button>
          <button className="three">3</button>
        </div>
      </div>
    </div>
  );
}
