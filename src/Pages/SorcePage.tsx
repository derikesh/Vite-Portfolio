import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import githubImg from "../assets/images/github.svg";
import { useEffect, useRef, useState } from "react";
import imageGif from "../assets/images/GIf/clap.gif";

// img
import image1 from "../assets/images/code/Mibu_phase_1_(original_hd).webp";
import image2 from "../assets/images/code/Phase_1.5.webp";
import image3 from "../assets/images/code/Phase_2_HD.webp";
import image4 from "../assets/images/code/Traumatized_Remake.webp";
import image5 from "../assets/images/code/sticker_4.webp"
import { Link } from "react-router-dom";

export default function SorcePage() {
  const [click, setClick] = useState(true);

  const [mobileScreen, setSmobileScreen] = useState(false);
  
  const [imageCode, setImageCode] = useState<string>("");

  // hover number
  let [count, setCount] = useState<number>(0);

  // refs
  const SourceBtn = useRef<HTMLButtonElement | null>(null);
  const noThanks = useRef<HTMLButtonElement | null>(null);

  const handelOnClick = () => {
    setClick(false);
    const Btn = SourceBtn.current;
    if (Btn) {
      Btn.style.display = "none";
    }
  };

  // function handel onhoVER
  useEffect(() => {
    // innerWidth
    const widthWindow = window.innerWidth;

    if (widthWindow > 1100) {
      setSmobileScreen(true);
    }

    const Btn = SourceBtn.current;

    let previousRandomNumberLeft = 0;

    const functionMove = () => {
      // function to make some comments on mouse enter counts

      setCount(prevCount => prevCount + 1);

      console.log(count);

      // here there function
      if (Btn) {
        const randomNumberTop = Math.floor(Math.random() * 51); // Generates a random number from 0 to 50
        const topValue = randomNumberTop + "%";

        let randomNumberLeft = Math.floor(Math.random() * 91) - 4; // Generates a random number from -40 to 50

        // Ensure difference of at least 15 between successive random numbers for left
        while (Math.abs(randomNumberLeft - previousRandomNumberLeft) <= 15) {
          randomNumberLeft = Math.floor(Math.random() * 91) - 4;
        }

        const leftValue = randomNumberLeft + "%";
        previousRandomNumberLeft = randomNumberLeft;

        Btn.style.position = "absolute";
        Btn.style.top = topValue;
        Btn.style.left = leftValue;
      }
    };

    Btn?.addEventListener("mouseenter", functionMove);

    return () => {
      Btn?.removeEventListener("mouseenter", functionMove);
    };
  }, [mobileScreen]);



  useEffect( ()=>{

    noThanks.current?.addEventListener("mouseover", ()=>{

     setImageCode(image5);

    } );

    noThanks.current?.addEventListener("mouseleave", ()=>{
      setImageCode(image4)
    })

    return ()=>{

      noThanks.current?.removeEventListener("mouseover", ()=>{

        setImageCode(image5);
   
       } );

    }

  } , [count])

  // setting the image


  useEffect(() => {
    if (count < 5) {
      setImageCode(image1);
    } else if (count < 12) {
      setImageCode(image2);
    } else if (count < 24) {
      setImageCode(image3);
    } else if (count >= 24) {
      setImageCode(image4);
    }
  }, [count]);

  return (
    <>
      <Box position={"relative"} overflow={"visible"} h={"85vh"}>
        {mobileScreen ? (
          <Flex
            gap={16}
            direction={"column"}
            margin={"auto"}
            alignItems={"center"}
            justifyContent={"center"}
            minH={"100%"}
            className="grou_btn_img"
            width={"fit-content"}
          >
            <Box
              w={{ lg: "200px", md: "190px", sm: "170px", base: "170px" }}
              height={"auto"}
              className="img_wrap_more"
            >
              {click ? (
                <Image
                  objectFit={"cover"}
                  width={"100%"}
                  height={"100%"}
                  src={imageCode}
                />
              ) : (
                <>
                  <Image src={imageGif} />
                </>
              )}
            </Box>

            <Box height={"100px"}  className="btn_wrap_more">
              <Button
                ref={SourceBtn}
                onClick={handelOnClick}
                variant={"primary-button"}
              >
                {" "}
                View Source Code{" "}
              </Button>
              {count > 26 ? (
               <Link to={"/"} >
                <Button ref={noThanks} onClick={handelOnClick} variant={"primary-button"}>
                  {" "}
                  No Thanks{" "}
                </Button>
               </Link>
              ) : (
               ""
              )}
            </Box>
          </Flex>
        ) : (
          <Box>
            <Center>ERROR</Center>
          </Box>
        )}
      </Box>
    </>
  );
}
