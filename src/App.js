import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./component/Home";
import Css1 from "./component/css1/css1";
import Css2 from "./component/css2/css2";
import Css3 from "./component/css3/Css3";
import Calculator from "./component/calculator/Calculator";
import Youtube from "./component/youtube/Youtube";
import ProgressBar from "./component/progressbar/ProgressBar";
import Navbar from "./component/navbar/Navbar";
import Twitch from "./component/twitch/Twitch";
import classes from "./App.module.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css1" element={<Css1 />} />
        <Route path="/css2" element={<Css2 />} />
        <Route path="/css3" element={<Css3 />} />
        <Route path="/js1" element={<Calculator />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/progressbar" element={<ProgressBar />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/twitch" element={<Twitch />} />
      </Routes>
    </>
  );
}

export default App;
