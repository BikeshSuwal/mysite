import React from "react";
import Calculator from "./Projects/Calculator";
import Counter from "./Projects/Counter";
import TextConvert from "./Projects/TextConvert";
import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <div className="navgap"></div>
      <div className="card-container">
        <div className="card">
          <div className="flip-card-inner">
            <div className="card-content-front">
              <img src="nepseData.png" alt="Project 1" />
              <h2>NepseData</h2>
              <p className="padding-5">
                A tool to get the latest selected datas of companies listed in
                Nepse
              </p>
            </div>
            <div className="card-content-back">
              <a
                href="https://github.com/BikeshSuwal/nepseData.git"
                target="_blank"
                class="card-link"
              >
                Github link
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flip-card-inner">
            <div className="card-content-front">
              <img src="timeline.png" alt="Project 2" />
              <h2>Timeline</h2>
              <p className="padding-5">
                An intuitive way to display historical events, milestones, or
                any other type of event that occurs over time
              </p>
            </div>
            <div className="card-content-back">
              <a
                href="https://github.com/BikeshSuwal/nepseData.git"
                target="_blank"
                class="card-link"
              >
                Github link
              </a>
            </div>
          </div>
        </div>

        {/* <div className="card">
          <div className="flip-card-inner">
            <img src="timeline.png" alt="Project 2" />
            <div className="card-content">
              <h2>Timeline</h2>
              <p>
                An intuitive way to display historical events, milestones, or
                any other type of event that occurs over time
              </p>
              <a href="#" className="card-link">
                &lt;&gt; View Project &lt;/&gt;
              </a>
            </div>
          </div>
        </div> */}
        {/* <div class="card">
          <img src="project2.jpg" alt="Project 3" />
          <div class="card-content">
            <h2>Project 3</h2>
            <p>A brief description of Project 3.</p>
            <a href="#" class="card-link">
              &lt;&gt; View Project &lt;/&gt;
            </a>
          </div>
        </div> */}
      </div>
      <div className="container">
        <TextConvert />
      </div>
      <div className="container">
        <Counter />
      </div>
      <div className="container">
        <Calculator />
      </div>
    </div>
  );
}
