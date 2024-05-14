import { Box, Text, Heading } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface sectionTitleProp {
  sectionTitle: string;
}


function Header({ sectionTitle }: sectionTitleProp) {

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
        fontSize={{ lg: "50px", md: "32px", sm: "30px", base: "30px" }}
        fontWeight={600}
        as="h2"
        textTransform={'uppercase'}
        width={'fit-content'}
        m={'auto'}
        height={"70px"}
      >
      </Heading>
    </>
  );
}

export default Header;
