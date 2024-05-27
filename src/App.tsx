import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MainRoute from "./router/mainRoute";
import { Box, Image } from "@chakra-ui/react";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import imageGrid from "./assets/images/garin2.png"

import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  

  return (
    <>
      <Box className="site_wrap">

        {loading ? (
          <Loading />
        ) : (
          <>

      <Box overflow={"visible"} >
        <Image src={imageGrid}  opacity={1} width={"100%"} height={"100%"} objectFit={"cover"}  position={"fixed"} top={0} left={0}/>          
      </Box>
            <Box>
              <Box
                position={"relative"}
                maxW={"1366px"}
                width={{ sm: "90%", base: "100%" }}
                margin={"auto"}
              >
                <Navbar />
                <Box>
                  <MainRoute />
                </Box>
                <Footer />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}

export default App;
