import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navbar title="TextUtils" />}>
            <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" />} />
            <Route exact path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <TextForm heading="Enter the text to analyze below"/> */}
    </div>
  );
};

export default App;
