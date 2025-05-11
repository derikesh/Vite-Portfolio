import { Box, Flex, Image } from "@chakra-ui/react";
import AboutPage from "./HomePageComponents/About";
import LandingPage from "./HomePageComponents/LandingPage";
import AboutRedirect from "./AboutRedirect";
import WebWorks from "./WebWorkHome";


function HomePage() {


 

  return (
    <>
      <LandingPage />
      <Box px={{ base: "15px" }}>
        <AboutPage />
        {/* <Expertise /> */}
        {/* <Porjects/> */}
        <WebWorks/>
        <AboutRedirect/>
      </Box>
    </>
  );
}

export default HomePage;
