import React from "react";
import "./About.css";
import { Header } from "./Header";
import Body from "./HomeBody";
import { Link } from "react-router-dom";

export default function About() {

  return (
    <div>
      {/* <Header/> */}
      <button className="backButton ">
      <Link className="backButtonLink" to="/">
                Back home
              </Link>
      </button>
        <div className="fullh">
          <h1>JPT1</h1>
        </div>
        <div className="fullh">
          <h1>JPT2</h1>
        </div>
        <div className="fullh">
          <h1>JPT3</h1>
        </div>
      
    </div>
  );
}
