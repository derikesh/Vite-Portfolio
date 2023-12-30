import { Box, Flex} from "@chakra-ui/react";
import AnimateCircle from "../components/navbar/CircleAnimte";
import AboutPage from "./HomePageComponents/About";
import LandingPage from "./HomePageComponents/LandingPage";
import Projects from "./HomePageComponents/Projects";
import Illustration from "./HomePageComponents/Illustration";
import FigmaSection from "./HomePageComponents/FigmaSection";
import { useEffect, useState } from "react";

function HomePage() {

      const [size, setSize] = useState<number | null>(null);
      const [mobile, setMobile] = useState<boolean>(false);

      useEffect( ()=>{

          setSize(window.innerWidth);

      } ,[size])


      useEffect( ()=>{

        if(size && size < 768){

          setMobile(true);
        }else{
          setMobile(false);
        }

      } ,[size])

  return (
    <>
      <AnimateCircle/>
        <LandingPage />
        <Box px={ {base:'15px'} } >
        <AboutPage/>
        <Projects/>
        <Illustration/>
        <FigmaSection/>
      </Box>
    </>
  );
}

export default HomePage;
 