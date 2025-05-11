import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function AnimationLine() {
  const lineLeft = useRef<HTMLDivElement | null>(null);

  const overLay_before = {
    width: {sm:"7px",base:'5px'},
    left: "10px",
    height: "100%",
    position: "absolute",
    top: "-80px",
    zIndex: 1,
    background:
      "linear-gradient(180deg, rgba(97, 173, 187, 0.00) 0%, #00A1BE 51.46%, rgba(97, 173, 187, 0.00) 100%)",
  };
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const ctx = gsap.context(() => {

        const tl = gsap.timeline( { scrollTrigger: {
            trigger: lineLeft.current,
            start: '0px 60%',            
            end: 'bottom center', 
            toggleActions: 'play none none reverse', 
          }} );

        tl.fromTo( lineLeft.current , { height:0 } , {height:'160%',duration:1,ease:"power1.out"} )

    });
    

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Box ref={lineLeft} sx={overLay_before} className="overLay_before"></Box>
    </>
  );
}
