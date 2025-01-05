import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
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
  const handleScroll = () => {
    const navbar = document.getElementsByClassName("navbar")[0];
    const logobar = document.getElementsByClassName("logobar")[0];
    const navitems = document.getElementsByClassName("navitems")[0];
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    if (window.pageYOffset > 50) {
      navbar.classList.add("scrolled");
      logobar.classList.add("scrolled");
      navitems.classList.add("scrolled");
      toggleButton.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
      logobar.classList.remove("scrolled");
      navitems.classList.remove("scrolled");
      toggleButton.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            {/* <li className="contacts">
              <Link to="/contacts" onClick={Toggle}>
                CONTACTS
              </Link>
            </li> */}
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
