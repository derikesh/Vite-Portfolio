import { Box, Image } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


export const DemoFunction = ( {children}:any )=>{

    const animationRef = useRef<HTMLDivElement | null>(null);
    gsap.registerPlugin(ScrollTrigger) ;
    
    useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animationRef.current,
          start: "top 70%",
          end:'bottom center',
          toggleActions: 'play none none none', 
        },
      });
      const ctx = gsap.context(() => {
          tl.to( animationRef.current,{ y:0,opacity:1,duration:1,ease:"back.out(1.7)" } )
      });
  
      return () => {
          ctx.revert();
      };
    }, []);

    return (
        <Box opacity={'0'} ref={animationRef} >
            {children}
        </Box>
        )

}

