import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home"
import Home2 from "./ZoomPage/Home2";
import Login from './ZoomPage/MemberIntroducde'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home2" element={<Home2 />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
};

export default App;
