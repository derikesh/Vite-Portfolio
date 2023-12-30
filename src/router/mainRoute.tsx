import { Route, Routes } from "react-router-dom";
  import HomePage from "../Pages/Home";
import WebWorks from "../Pages/WebWorks";
import FigmaWorks from "../Pages/FigmaWorks";
import Resume from "../Pages/Resume";
import SorcePage from "../Pages/SorcePage";
import { useEffect } from "react";

function MainRoute() {




  return (
    <>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/webworks" element={<WebWorks />} />
        <Route path="/figma" element={<FigmaWorks />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/source-code" element={<SorcePage/>} />
      </Routes>
    </>
  );
}

export default MainRoute;
