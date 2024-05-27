import { Box, Heading, Image, Flex, Text } from "@chakra-ui/react";
import Ring from "../../assets/images/ring.svg";
import Vector from "../../assets/images/vector.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TextPlugin from 'gsap/TextPlugin';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger ,TextPlugin) ;

function AboutPage() {

  const ImageRef = useRef<HTMLDivElement>(null);
  const aboutHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {       

    const ctx = gsap.context(() => {
      const tl = gsap.timeline( {

        scrollTrigger: {
        trigger: aboutHeading.current,
        start: '0px 65%',
        end: 'bottom center', 
        toggleActions: 'play none none none', 
      },
    } );     

      tl.to( aboutHeading.current ,{  duration:2 , text:{ value:"HI, I AM RIKESH, A FRONTEND DEVELOPER EXPLORING SOFTWARE WORLDS"} } );

      tl.fromTo( ImageRef.current , { scale:0  } , { scale:1,ease: "elastic.out(1,0.3)",delay:1.3} );        

    });

    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <>
      <Box overflow={'hidden'}  className="about_page_wrap" py={{sm:36,base:20}}  mb={{lg:30,base:5}}>
        <Heading
          ref={aboutHeading}
          className="heading_about"
          fontSize={{ lg: '74px', md: '32px', sm: '42px', base: '36px' }}
          fontWeight={600}
          lineHeight={1.3}
          as="h2"
          color={'#E6E6E6'}
          height={{ sm: '160px',base:"220px" }}
        >
        </Heading>

        <Flex         
          direction={{ lg: "row", md: "row", sm: "column", base: "column" }}
          py={{ lg: "75px", sm: "50px", base: "0px" }}
          gap={{lg:10}}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={10}
            width={{ lg: "60%", md: "60%", sm: "100%", base: "100%" }}
            className="about_text"
          >
            <Text
              fontSize={{ lg: "24px", md: "20px", sm: "20px", base: "18px" }}
            >
              Exploring the digital world for over a year, I'm Rikesh a creative enthusiast crafting digital presence through web design and programming. Excited to further delve into this platform, uncovering new realms of innovation.
            </Text>

            <Link 
            onClick={ ()=>{window.scroll(0,0)} }
            to={'/about'} >
              <Text fontSize={{sm:'20px',base:18}} color={'#1C97DD'} >Learn More about me </Text>
            </Link>
            
          </Box>

          <Box           
            position={"relative"}
            bottom={{sm:4,base:0}}
            width={{ lg: "35%", md: "40%", sm: "50%", base: "65%" }}
            margin={{ md: "unset", sm: "auto", base: "auto" }}
            py={{ md: "unset", base: "80px" }}
            className="ring_divs"
          >
            <Box
              width={{ lg: "45%", md: "60%", base: "80%" }}
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


        <Box className="just a border"  borderBottom={'3px solid'} borderBottomWidth={2}  borderColor={'#CDF0F8'} width={'40%'}>

        </Box>

      </Box>
    </>
  );
}

export default AboutPage;
