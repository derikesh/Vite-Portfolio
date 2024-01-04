import { Box, Heading, Image, Flex, Text,Hide } from "@chakra-ui/react";
import Ring from "../../assets/images/ring.svg";
import Vector from "../../assets/images/vector.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TextPlugin from 'gsap/TextPlugin';
import ScrollTrigger from "gsap/dist/ScrollTrigger";



function AboutPage() {

  const ImageRef = useRef<HTMLDivElement>(null);
  const aboutHeading = useRef<HTMLHeadingElement>(null);


  useEffect(() => {

    

    gsap.registerPlugin(ScrollTrigger) ;
    gsap.registerPlugin(TextPlugin);

    var ctx: any = null;
    ctx = gsap.context(() => {

      const tl = gsap.timeline( {

        scrollTrigger: {
        trigger: aboutHeading.current,
        start: '0px 65%',
        end: 'bottom center', 
        toggleActions: 'play none none none', 
      },
    } );     

      tl.to( aboutHeading.current ,{  duration:1.5 , text:{ value:"HI, I AM RIKESH, A FRONTEND DEVELOPER EXPLORING SOFTWARE WORLDS"} } );

        tl.fromTo( ImageRef.current , { scale:0  } , { scale:1,ease: "elastic.out(1,0.3)",delay:2} );

        sessionStorage.setItem("playedAnimation", "true");

        

    });

    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <>
       <Box className="about_page_wrap" py={40}  mb={{lg:30,base:5}}>
        <Heading
          ref={aboutHeading}
          className="heading_about"
          fontSize={{ lg: '50px', md: '32px', sm: '30px', base: '30px' }}
          fontWeight={600}
          as="h2"
          height={{ sm: '160px',base:"200px" }}
        >
        </Heading>

        <Flex
          direction={{ lg: "row", md: "row", sm: "column", base: "column" }}
          py={{ lg: "70px", sm: "50px", base: "30px" }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            width={{ lg: "60%", md: "60%", sm: "100%", base: "100%" }}
            className="about_text"
          >
            <Text
              fontSize={{ lg: "24px", md: "20px", sm: "20px", base: "18px" }}
            >
               I've been exploring the online world for more than a year. I really love creating websites and using computer skills to make cool stuff. I'm super excited to learn even more and find new ways to make neat things online.
            </Text>
          </Box>

          <Box           
            position={"relative"}
            width={{ lg: "40%", md: "40%", sm: "50%", base: "80%" }}
            margin={{ md: "unset", sm: "auto", base: "auto" }}
            py={{ md: "unset", base: "60px" }}
            className="ring_divs"
          >
            <Box
              width={{ lg: "65%", md: "60%", base: "80%" }}
              margin={"auto"}
              className="ring"
            >
              <Image width={"100%"} height={"100%"} src={Ring} />
            </Box>
            <Box  ref={ImageRef} display={{ lg: "block", md: "none", base: "none" }}>
              <Flex               
                position={"absolute"}
                right={20}
                bottom={-10}
                height={"40px"}
                width={"40%"}
                className="vector_img"
              >
                <Image height={"100%"} width={"100%"} src={Vector} />
                <Text fontSize={"14px"} width={"100%"} color={"white"}>
                 My Favourite ring btw
                </Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default AboutPage;
