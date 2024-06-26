import { Box, Flex, Image } from "@chakra-ui/react";
import AboutPage from "./HomePageComponents/About";
import LandingPage from "./HomePageComponents/LandingPage";
import Expertise from "./HomePageComponents/Expertise";
import AboutRedirect from "./AboutRedirect";
import Experience from "./HomePageComponents/Experience";
import Porjects from "./HomePageComponents/Porjects";


function HomePage() {

  // let imageGrid = {
  //   backgroundImage: `url(${graindImage})`,
  // }
 
  return (
    <>
  

      <LandingPage />
      <Box px={{ base: "15px" }}>
        <AboutPage />
        <Expertise />
        <Experience/>
        <Porjects/>
        <AboutRedirect/>
      </Box>
    </>
  );
}

export default HomePage;
