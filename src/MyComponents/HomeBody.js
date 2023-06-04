import React from "react";
// import RandomPhotos from "./HomeBody/RandomPhotos";
// import Todos from "./HomeBody/todos";
import { Header } from "./Header";
import { Link } from "react-router-dom";
export default function Body() {

 
  return (
    <>
    <Header />
      <div className="mainblock">
        <div className="front">
        <div className="front-text">
          <div className="words">
            <div className="maintext">
              <span className="maintext1">Hello, I am</span>
              <br />
              <h1 className="maintext2">Bikesh Suwal</h1>
            </div>
            {/* <span className="subtext">trying to make my website</span> */}
          </div>
        </div>
        </div>
        
        <div>
          {/* <div className="container">
            <Todos />
          </div> */}
         
        </div>
      </div>
      <div className="mainblock">
        <div className="whatIdo blockContainer bgGreen">
          <span className="maintext1">What I do?</span>
                <br />
          <span className="maintext3">Whatever makes me happy,</span>
          <span>and is legal.</span>
          <div className="maintext3 margin-60">
            <span>Making these things makes me happy btw</span>
            <button className="projectsButton">
              <Link className="projectsLink " to="/projects">
                Projects
              </Link>
          </button>
          </div>
          
        </div>
      </div>
      <div className="mainblock">
        <div className="contact blockContainer">
          <span className="maintext1">Let's Connect</span>
                <br />
          <span className="maintext3">bikeshsuwal776@gmail.com</span>

        </div>
      </div>
      {/* <div className="full belowbox" id="belowbox1">
            <div className="container">
              <RandomPhotos />
            </div>
          </div> */}
    </>
  );
}
