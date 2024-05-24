import { Box, Heading, Image } from "@chakra-ui/react";
import homeBg from "../../assets/images/homehome1.webp";
import bghome from "../../assets/images/bgHome-01.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Languages from "./Languages";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function LandingPage() {
  const bgBlue = useRef<HTMLImageElement | null>(null);
  const homeArea = useRef<HTMLDivElement | null>(null);

  const landingImages = useRef<HTMLDivElement | null>(null);

  // hold state values
  const [holdStateX, setHoldStateX] = useState<number>(0);
  const [holdStateY, setHoldStateY] = useState<number>(0);

  // state for animation

  // opening animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      if (landingImages.current) {
        tl.fromTo(
          landingImages.current,
          { y: 900 },
          { y: 0, duration: 0.8, delay: 0.4, ease: "elastic.out(1,1.3)" },
          0
        );
      }

      tl.to(bgBlue.current, {
        display: "block",
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // Animation for bg
  useEffect(() => {
    const homeAreaDiv = homeArea.current;

    const moveMouse = (event: MouseEvent) => {
      const newXPos = event.clientX / window.innerWidth;
      const newYPos = event.clientY / window.innerHeight;

      const leftValue = newXPos * 1400;

      let mappedLeft: number;

      if (leftValue > 700) {
        mappedLeft = (leftValue - 700) * (-60 / 700);
      } else {
        mappedLeft = -((700 - leftValue) * (-60 / 700));
      }

      setHoldStateX(mappedLeft);

      const topValue = newYPos * 1400;
      let mappedTop;

      if (topValue > 700) {
        mappedTop = (topValue - 700) * (-20 / 700);
      } else {
        mappedTop = Math.max(0, (700 - topValue) * (-20 / 700));
      }

      setHoldStateY(mappedTop);

      gsap.to(bgBlue.current, {
        left: holdStateX + "px",
        top: holdStateY + "px",
        ease: "power1.out",
        transformPerspective: 900,
        transformOrigin: "center",
        duration: 0.6,
      });
    };

    homeAreaDiv?.addEventListener("mousemove", moveMouse);

    return () => {
      homeAreaDiv?.removeEventListener("mousemove", moveMouse);
    };
  }, [holdStateX, holdStateY]);
  
  // languages object
  const languageObj = [
    "javascript",
    "php",
    "typescript",
    "react",
    "node js",
    "wordpress",
    "tailwind",
    "firewall",
  ];


// styling single languag 
const langaugeCSS = {
  flex:'1 0 25%',
  fontSize:'90px'
} 

  return (
    <Box
      ref={homeArea}
      overflow={"hidden"}
      className="landing_container"
      height="fit-content"
      width={{ sm: "100%", base: "95%" }}
      margin="auto"
    >
      <Box
        height={{
          xl: "90vh",
          lg: "90vh",
          md: "90vh",
          sm: "90vh",
          base: "85vh",
        }}
        position="relative"
        className="landing_page_wrap"
      >
        <Box
         className="landing_text">
          <Heading
            fontSize={{
              xl: "70px",
              lg: "65px",
              md: "60px",
              sm: "55px",
              base: "43px",
            }}
            py={{ md: "20px", sm: "20px", base: "30px" }}
            fontWeight={600}
            textAlign="center"
            position={'relative'}
            top={7}
            color={'#DEDEDE'}
  >
            welcome to my <span style={{ color: "#6dcbdb" }}>portfolio.</span>
          </Heading>
        </Box>

        <Box position="absolute" bottom={0} width="100%">
          <Box display="flex" justifyContent="center">
            <Box
              ref={landingImages}
              overflow={{ md: "visible", base: "hidden" }}
              position="relative"
              top={7}
              className="landing_images"
              width={{
                xl: "42%",
                lg: "60%",
                md: "80%",
                sm: "90%",
                base: "100%",
              }}
              height="auto"
            >
              <Image
                height="100%"
                zIndex={10}
                position="relative"
                width="100%"
                src={homeBg}
              />
              <Image
                ref={bgBlue}
                display={"none"}
                height={"100%"}
                width={"100%"}
                className="bg_home"
                position="absolute"
                top={{ md: "-20px", sm: "0", base: 0 }}
                zIndex={1}
                left={{ sm: 0, base: "-5px" }}
                src={bghome}
              />
            </Box>
          </Box>
        </Box>

        {/* <Box className="bg_text_area">
            <Box display={"flex"}  flexWrap={"wrap"} >
            {languageObj &&
              languageObj.map((item, index) => {

              // if(index<4)
                
                return (
                  <>
                   <Box  sx={langaugeCSS} >
                   <Languages key={index} langauge={item} />
                   </Box>
                  </>
                );
                

              })}
          </Box>
        </Box> */}



      </Box>
    </Box>
  );
}

export default LandingPage;
