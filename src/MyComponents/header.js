import React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";

export const Header = () => {
  return (
    <>
      <div className="navbar" id="sticky">
        <div className="logobar">
          <img src="logo.png" alt="BIKESH SUWAL" />
          <h2>BIKESH SUWAL</h2>
        </div>
        <ToggleButton />
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
      </div>
    </>
  );
};
