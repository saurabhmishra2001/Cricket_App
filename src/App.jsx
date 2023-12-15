import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Main/Home";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
