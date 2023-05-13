import React from "react";
import RandomPhotos from "./HomeBody/RandomPhotos";
import Todos from "./HomeBody/todos";

export default function Body() {
  return (
    <>
      <div className="navgap"></div>
      <div className="front">
        <div className="front-text">
          <div className="words">
            <div className="maintext">
              <span className="maintext1">Hello, I am</span>
              <br />
              <h1 className="maintext2">Bikesh</h1>
            </div>
            <span className="subtext">trying to make my website</span>
          </div>
        </div>
        <div>
          {/* <div className="container">
            <Todos />
          </div> */}
          <div className="full">
            <div className="container">
              <RandomPhotos />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
