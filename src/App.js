import React from "react";

// import { Header } from "./MyComponents/Header";
import { Footer } from "./MyComponents/footer";
import Body from "./MyComponents/HomeBody";
import { Routes, Route } from "react-router-dom";
import Projects from "./MyComponents/Projects";
import Contacts from "./MyComponents/Contacts";
import About from "./MyComponents/About";
import ScrollToTop from "./MyComponents/ScrollToTop";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToTop />
      {/* <Body /> */}
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
      
    </>
  );
}

export default App;
