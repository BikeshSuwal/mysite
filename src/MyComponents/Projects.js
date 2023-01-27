import React from "react";
import Calculator from "./Projects/Calculator";
import Counter from "./Projects/Counter";
import TextConvert from "./Projects/TextConvert";
import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <div class="card-container">
        <div class="card">
          <img src="project1.jpg" alt="Project 1" />
          <div class="card-content">
            <h2>Project 1</h2>
            <p>A brief description of Project 1.</p>
            <a href="#" class="card-link">
              View Project
            </a>
          </div>
        </div>
        <div class="card">
          <img src="project2.jpg" alt="Project 2" />
          <div class="card-content">
            <h2>Project 2</h2>
            <p>A brief description of Project 2.</p>
            <a href="#" class="card-link">
              View Project
            </a>
          </div>
        </div>
        <div class="card">
          <img src="project2.jpg" alt="Project 3" />
          <div class="card-content">
            <h2>Project 3</h2>
            <p>A brief description of Project 3.</p>
            <a href="#" class="card-link">
              View Project
            </a>
          </div>
        </div>
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
