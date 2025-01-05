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
        <div className="whatIdo blockContainer bgBlue">
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
        <div className="contact blockContainer bgPurple">
          <span className="maintext1">Let's Connect</span>
                <br />
          <span className="maintext3">bikeshsuwal776@gmail.com
            <a href="mailto:bikeshsuwal776@gmail.com" className="mailIcon">
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </a>

          </span>
          <div className="socialLinks"><a href="https://www.facebook.com/profile.php?id=100086284251376" class="fa fa-facebook" target="_blank"></a>
          <a href="https://www.linkedin.com/in/bikesh-suwal-7aa2b2174/" class="fa fa-linkedin" target="_blank"></a>
          <a href="https://www.instagram.com/bikesh677/?hl=en" class="fa fa-instagram" target="_blank"></a>
          </div>
          
          

        </div>
      </div>
      <div className="mainblock">
        <div className="whatIdo blockContainer bgGreen">
          {/* <span className="maintext1">What I do?</span> */}
                <br />
          <span className="maintext3">Designed and developed by BIKESH SUWAL</span>
          {/* <span>and is legal.</span> */}
          <div className="maintext3 margin-60">
            <span>*This site is still under construction*</span>
            {/* <button className="projectsButton">
              <Link className="projectsLink " to="/projects">
                Projects
              </Link>
          </button> */}
          </div>
          
        </div>
      </div>
    </>
  );
}
