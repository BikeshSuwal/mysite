import React from "react";
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
              <a href="#">HOME</a>
            </li>
            <li className="projects">
              <a href="#">PROJECTS</a>
            </li>
            <li className="about">
              <a href="#">ABOUT</a>
            </li>
            <li className="contacts">
              <a href="#">CONTACTS</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
