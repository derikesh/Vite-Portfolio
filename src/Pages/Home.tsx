import { Box, Flex, Image } from "@chakra-ui/react";
import AboutPage from "./HomePageComponents/About";
import LandingPage from "./HomePageComponents/LandingPage";
import AboutRedirect from "./AboutRedirect";
import WebWorks from "./WebWorkHome";
import Illustration from "./HomePageComponents/Illustration";
import Expertise from "./HomePageComponents/Expertise";


function HomePage() {


 

  return (
    <>
      <LandingPage />
      <Box px={{ base: "15px" }}>
        <AboutPage />
        <Expertise />
        <Illustration/>
        {/* <Porjects/> */}
        <WebWorks/>
        <AboutRedirect/>
      </Box>
    </>
  );
}

export default HomePage;
