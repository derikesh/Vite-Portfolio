import { Route, Routes } from "react-router-dom";
  import HomePage from "../Pages/Home";
import WebWorks from "../Pages/WebWorks";
import FigmaWorks from "../Pages/FigmaWorks";
import About from "../Pages/About";
import SorcePage from "../Pages/SorcePage";
import { useEffect } from "react";

function MainRoute() {




  return (
    <>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/webworks" element={<WebWorks />} />
        <Route path="/figma" element={<FigmaWorks />} />
        <Route path="/about" element={<About/>} />
        <Route path="/source-code" element={<SorcePage/>} />        
      </Routes>
    </>
  );
}

export default MainRoute;
