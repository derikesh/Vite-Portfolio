import { Box, Flex, Image } from "@chakra-ui/react";
import AboutPage from "./HomePageComponents/About";
import LandingPage from "./HomePageComponents/LandingPage";
import Expertise from "./HomePageComponents/Expertise";
import graindImage from "../assets/images/GRAIN.png"
import Experience from "./HomePageComponents/Experience";
import Porjects from "./HomePageComponents/Porjects";


function HomePage() {

  // let imageGrid = {
  //   backgroundImage: `url(${graindImage})`,
  // }
 
  return (
    <>
      <Box overflow={"hidden"} >
        {/* <Image src={graindImage}  opacity={1} width={"100%"} height={"100%"} objectFit={"cover"}  position={"fixed"} top={0} left={0}/>           */}
      </Box>

      <LandingPage />
      <Box px={{ base: "15px" }}>
        <AboutPage />
        <Expertise />
        <Experience/>
        <Porjects/>
      </Box>
    </>
  );
}

export default HomePage;
