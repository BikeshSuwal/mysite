import React from "react";
import { Link } from "react-router-dom";
// import ToggleButton from "./ToggleButton";

export const Header = () => {
  const Toggle = () => {
    console.log("button clicked");
    const navitems = document.getElementsByClassName("navitems")[0];
    navitems.classList.toggle("active");
    // return (
    //   <>
    //     <div>button clicked</div>
    //   </>
    // );
  };
  return (
    <>
      <div className="navbar" id="sticky">
        <div className="logobar">
          <img src="logo.png" alt="BIKESH SUWAL" />
          <h2>BIKESH SUWAL</h2>
        </div>

        <div className="navitems">
          <ul className="mainmenu">
            <li className="home">
              <Link to="/" onClick={Toggle}>
                HOME
              </Link>
            </li>
            <li className="projects">
              <Link to="/projects" onClick={Toggle}>
                PROJECTS
              </Link>
            </li>
            <li className="about">
              <Link to="/about" onClick={Toggle}>
                ABOUT
              </Link>
            </li>
            <li className="contacts">
              <Link to="/contacts" onClick={Toggle}>
                CONTACTS
              </Link>
            </li>
          </ul>
        </div>
        <button href="#" className="toggle-button" onClick={Toggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </>
  );
};
