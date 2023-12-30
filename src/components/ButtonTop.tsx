import { Box, Button, Image, useEventListener } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

import image1 from "../assets/images/arrowup.svg"

function ButtonTop() {
  const [showButton, setShowButton] = useState(false);
  const btnTopRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }


    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  


  return (
    <>
      {showButton && (
        <Box
          ref={btnTopRef}
          onClick={scrollToTop}
          position="fixed"
          bottom={{lg:"10",base:'20px'}}
          right={{lg:"10",base:'20px'}}
          bg="black"
          color="white"
          borderRadius="50%"
          width={{lg:"40px",sm:'30px',base:'30px'}}
          height={{lg:"40px",sm:'30px',base:'30px'}}
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          zIndex="1000"
        >
         <Box w={{lg:'50%',base:'50%'}}  >
         <Image
         height={'100%'}
         width={'100%'}
          src={image1}
          />
         </Box>
        </Box>


      )}


    </>
  );
}

export default ButtonTop;
