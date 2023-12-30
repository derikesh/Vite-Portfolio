import { Box, Heading, Image } from "@chakra-ui/react";
import homeBg from "../../assets/images/homehome1.jpg";
import bghome from "../../assets/images/bgHome-01.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function LandingPage() {
  const boxRef = useRef<HTMLImageElement | null>(null);
  const HomeHeading = useRef<HTMLHeadingElement | null>(null);

  const bgBlue = useRef<HTMLImageElement | null>(null);
  const homeArea = useRef<HTMLDivElement | null>(null);

  // state for animation

  // opening animation
  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        tl.fromTo(
          boxRef.current,
          { y: 200 },
          { y: 0, ease: "expo.out", duration: 1 },
          0
        )
          .fromTo(
            HomeHeading.current,
            { scale: 0.2 },
            { scale: 1, duration: 1, ease: "expo.out" },
            0
          )
          .to(".bg_home", { display: "block", ease: "elastic.out(1,0.3)" });
      });

      return () => {
        ctx.revert();
      };
  }, []);

  // hold state values
  const [holdStateX, setHoldStateX] = useState<number>(0);
  const [holdStateY, setHoldStateY] = useState<number>(0);

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

  return (
    <Box
      ref={homeArea}
      className="landing_container"
      height="fit-content"
      width={{ sm: "100%", base: "95%" }}
      margin="auto"
    >
      {/* <Box display={'none'} >
      <AnimateCircle/>
      </Box> */}
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
        <Box className="landing_text">
          <Heading
            fontSize={{
              xl: "66px",
              lg: "65px",
              md: "60px",
              sm: "55px",
              base: "38px",
            }}
            py={{ md: "20px", sm: "20px", base: "30px" }}
            fontWeight={600}
            textAlign="center"
            ref={HomeHeading}
          >
            WELCOME TO MY <span style={{ color: "#6dcbdb" }}>PORTFOLIO.</span>
          </Heading>
        </Box>
        <Box position="absolute" bottom={0} width="100%">
          <Box display="flex" justifyContent="center">
            <Box
            overflow={{md:'visible',base:'hidden'}}
              borderBottom="7px solid black"
              position="relative"
              className="landing_images"
              width={{
                xl: "52%",
                lg: "60%",
                md: "80%",
                sm: "90%",
                base: "100%",
              }}
              height="auto"
            >
              <Image
                ref={boxRef}
                height="100%"
                zIndex={10}
                position="relative"
                width="100%"
                src={homeBg}
              />
              <Image
                ref={bgBlue}
                height={"100%"}
                width={"100%"}
                display="none"
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
      </Box>
    </Box>
  );
}

export default LandingPage;
