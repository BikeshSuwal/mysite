import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import "./Header2.css";

export const Header2 = () => {
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
              <Link to="/">HOME</Link>
            </li>
            <li className="projects">
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li className="about">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="contacts">
              <Link to="/contacts">CONTACTS</Link>
            </li>
          </ul>
        </div>
        <button className="toggle-button" onClick={toggleNav}>
          &#9776;
        </button>
      </div>
    </>
  );
};
