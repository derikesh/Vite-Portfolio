import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

function AnimateCircle() {
  //  ref cirle
  const animateCircleRef = useRef<HTMLDivElement | null>(null);

  // state for repsisnve
  const [displayCircle, setDisplayCircle] = useState<boolean>();
  // state for screenWidth
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // state to handel the function for when move
  const [mosueMove, setMosueMove] = useState<boolean>(false);

  // state for mouseIdel
  const [_mouseIdel, setmouseIdel] = useState(false);

  //  css for circles
  const cirlceStyle = {
    height: "20px",
    width: "20px",
    borderRadius: "24px",
    backgroundColor: "white",
    position: "fixed",
    top: "0",
    left: "0",
    pointerEvents: "none",
    zIndex: "99999999",
  };

  // use Effect function for mouse movement
  useEffect(() => {
    const coords = { x: 0, y: 0 };

    const circles = document.querySelectorAll(".circles");

    circles.forEach(function (circle: any) {
      circle.x = 0;
      circle.y = 0;
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCirlce() {
      let x: number = coords.x;
      let y: number = coords.y;

      circles.forEach((circle: any, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle: any = circles[index + 1] || circles[0];

        x += (nextCircle.x - x) * 0.48;
        y += (nextCircle.y - y) * 0.48;
      });

      requestAnimationFrame(animateCirlce);
    }

    animateCirlce();

    return () => {
      window.removeEventListener("mousemove", function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
      });
    };
  }, []);


  // useEffect to make a mouseMove display 
  useEffect( ()=>{

       // function demo 


       let mouseTimer :any;
       let funcationHandel = ()=>{
            setmouseIdel(false);
            clearTimeout(mouseTimer);
            setDisplayCircle(true);
            setMosueMove(true);      

            mouseTimer = setTimeout( ()=>{
              setmouseIdel(true);
              setDisplayCircle(false);
            } ,100)



       }

       requestAnimationFrame(funcationHandel);

       window.addEventListener( 'mousemove',funcationHandel );

      return ()=>{
        window.removeEventListener('mousemove',funcationHandel);
      }
 

  }, [mosueMove] );

  // useEffect to handel circle display
  useEffect(() => {
    const CircleWrap = animateCircleRef.current;

    if (CircleWrap) {
      const handelResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handelResize);

      // function logice to remove circle
      const CircleDisplay = () => {
        console.log(screenWidth);

        if (screenWidth < 1080) {
          setDisplayCircle(false);
        } else if (screenWidth > 1080) {
            setDisplayCircle( mosueMove ? true : false );
        }
      };

      CircleDisplay();

      return () => {
        window.removeEventListener("resize", handelResize);
      };
    }
  }, [screenWidth,mosueMove]);

  return (
    <>
      <Box
        display={displayCircle ? "block" : "none"}
        ref={animateCircleRef}
        className="animate-wrap"
      >
        <Box className="circles" sx={cirlceStyle}></Box>
        <Box className="circles" sx={cirlceStyle}></Box>
        <Box className="circles" sx={cirlceStyle}></Box>
        <Box className="circles" sx={cirlceStyle}></Box>
        <Box className="circles" sx={cirlceStyle}></Box>
        <Box className="circles" sx={cirlceStyle}></Box>
        <Box className="circles" sx={cirlceStyle}></Box>
        <Box className="circles" sx={cirlceStyle}></Box>
        <Box className="circles" sx={cirlceStyle}></Box>
        <Box className="circles" sx={cirlceStyle}></Box>
      </Box>
    </>
  );
}

export default AnimateCircle;
