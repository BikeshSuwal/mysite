import React from "react";

import Todos from "./todos";

export default function Body() {
  return (
    <>
      <div className="front">
        <div className="front-text">
          <div className="words">
            <div className="maintext">
              <span className="maintext1">Hello, I am</span>
              <br />
              <span className="maintext2">BIKESH SUWAL</span>
            </div>
            <span className="subtext">trying to make my website</span>
          </div>
        </div>
        <div>
          <Todos />
        </div>

        <div className="gallery">
          <div className="divtitle">
            <span>Random Photos</span>
          </div>
          <div className="photos">
            <a href="img1.jpg">
              <img src="/img1.jpg" alt="" />
            </a>
            <a href="img2.jpg">
              <img src="/img2.jpg" alt="" />
            </a>
            <a href="img3.jpg">
              <img src="/img3.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
