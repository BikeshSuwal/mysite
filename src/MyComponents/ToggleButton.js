import React from "react";

export default function ToggleButton() {
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
  //   const toggleButton = document.getElementsByClassName("toggle-button")[0];
  //   const navitems = document.getElementsByClassName("navitems")[0];

  //   toggleButton.addEventListener("click", () => {
  //     navitems.classList.toggle("active");
  //   });

  return (
    <>
      <a href="#" className="toggle-button" onClick={Toggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
    </>
  );
}
