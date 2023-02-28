import React from "react";
import { Route, Routes,Link } from "react-router-dom";
import Home from "./component/Home";
import Css1 from './component/css1/css1';
import Css2 from './component/css2/css2';
import Css3 from "./component/css3/Css3";
import Calculator from "./component/calculator/Calculator";
import classes from './App.module.css';

function App() {
  return (
    <div className={classes["app"]}>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
    <Route path="/css1" element={<Css1 />}/>
    <Route path="/css2" element={<Css2 />}/>
    <Route path="/css3" element={<Css3 />}/>
    <Route path="/js1" element={<Calculator />} />
    </Routes>
    </div>
  );
}

export default App;