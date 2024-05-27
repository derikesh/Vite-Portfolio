import { Box, Text, Heading } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface sectionTitleProp {
  sectionTitle: string;
  subTag:boolean;
}


function Header({ sectionTitle , subTag}: sectionTitleProp) {

    const valueTitle = sectionTitle;
    

    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

  
    const aboutHeading = useRef<HTMLHeadingElement>(null);

  
    useEffect(() => {

        const tl = gsap.timeline( {
            scrollTrigger:{
                trigger: aboutHeading.current,
                start: "top 80%",
                end: "bottom bottom",
                toggleActions: "play none none none",
            }
        } )
  
            tl.to(aboutHeading.current, { duration: 1, text: { value: valueTitle} });
    
  
    }, []);


  return (
    <>
      <Heading
        ref={aboutHeading}
        className="heading_about"
        fontSize={{ lg: "56px", md: "32px", sm: "30px", base: "30px" }}
        fontWeight={600}
        as="h2"
        textTransform={'uppercase'}
        width={'fit-content'}
        m={'auto'}
        color={'#E6E6E6'}
        height={{sm:"70px",base:"80px"}}
      >
      </Heading>
    {  subTag  && <center>
        <Text display={{sm:"block",base:'none'}} pt={8} fontSize={18} >
        ( Click on tabs )
        </Text>
      </center> }
      
    </>
  );
}

export default Header;
