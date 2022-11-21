import React from "react";

import { Header } from "./MyComponents/header";
import { Footer } from "./MyComponents/footer";
import Body from "./MyComponents/body";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TextConvert from "./MyComponents/TextConvert";

function App() {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Routes>
        <Route path="/projects" element={<TextConvert />}></Route>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route path="/" element={<Body />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
