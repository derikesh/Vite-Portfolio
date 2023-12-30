import Header from "./Component/Header";
import {
  Image,
  Box,
  Text,
  Flex,
  Link,
  Heading,
  Button,
} from "@chakra-ui/react";
import dataProject from "../../Datas/dataProjects.json";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ButtonGif from "../../components/ButtonGif";
import ImageGif from "../../assets/images/GIf/more.gif";

// icons
import wordpressIcon from "../../assets/images/icons/wordpress.png";
import tailwindIcon from "../../assets/images/icons/tailwind.png";
import reactIcon from "../../assets/images/icons/atom.png";
import chakraUiIcon from "../../assets/images/icons/chakra.png";
import bootstrapIcon from "../../assets/images/icons/bootstrap.png";
import gsapIcon from "../../assets/images/icons/gsap.png";
import motionIcon from "../../assets/images/icons/motion.png";
import typescriptIcon from "../../assets/images/icons/typescript .png";
import firestore from "../../assets/images/icons/firestore.svg";

import { sitelinks } from "../../Datas/siteLinks";

// project image
import imageICT from "../../assets/images/projects/1.webp";
import imageTechballImg from "../../assets/images/projects/2-5.webp";
import imagePrimeItClubImg from "../../assets/images/projects/1_2.webp";
import portfolio from "../../assets/images/projects/1_1.webp";

export const dataTechProp: Record<string, string> = {
  wordpress: wordpressIcon,
  tailwind: tailwindIcon,
  react: reactIcon,
  chakraUi: chakraUiIcon,
  bootstrap: bootstrapIcon,
  gsap: gsapIcon,
  framerMotion: motionIcon,
  typescript: typescriptIcon,
  firestore: firestore,
};

// image project Images
const dataProjectImage: Record<string, string> = {
  imageICT: imageICT,
  imageTechball: imageTechballImg,
  imagePrimeItClub: imagePrimeItClubImg,
  imagePortfolio: portfolio,
};

function Projects() {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  //
  const tl = useRef<gsap.core.Timeline | null>(null);
  let divHeight: number;

  // mobile with
  const [width, setwidth] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [renderProjects, setRenderProjects] = useState(dataProject);




  useEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrap",
        start: "230px 0%",
        end: "100%",
        toggleActions: "play pause resume reset",
        scrub: 0.5,
        invalidateOnRefresh: true,
        // animation: tl.current,
        // pin:true
      },
    });

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.addEventListener("refreshInit", animationScroll);

    function animationScroll() {
      const firstCard = cardsRef.current[0];
      if (firstCard instanceof HTMLElement) {
        tl.current?.clear();

        divHeight = firstCard.offsetHeight || 0;

        cardsRef.current.forEach((item:any, index:number) => {
          if (index > 0) {
          animatteFunction({item,index})
          }
        });
      }
    }

    const animatteFunction =({item,index}:{item:any,index:number})=>{
      gsap.set(item, { top: index * divHeight });
      tl.current?.to(
        item,
        { top: 0, duration: index * 0.1, ease: "none" },
        0
      );
    }

    animationScroll();

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", animationScroll);
    };
  }, []);




  // effect to find the repsonsive width
  useEffect( ()=>{

     
    const handelWidth = () => {
      setwidth(window.innerWidth);
    }
  
    handelWidth();
      
  if(width && width <= 768){
    setIsMobile(true);
  }


  // function to get only 1 elemt


  },[width] )

  // getting only 1 data 



  useEffect(() => {
  var getOnlyOneElement = dataProject.filter( (item)=> item.id === 0 );

    setRenderProjects(isMobile ? getOnlyOneElement : dataProject);
  }, [isMobile]);



  return (
    <>
      <Box mb={{ sm: "600px", base: "485px" }} className="newWrao">
        <Box className="wrap">
          <Box
            className="header_project"
            mb={{ md: "80px", sm: "60px", base: "50px" }}
          >
            <Header sectionTitle="Projects" />
          </Box>

          <Box
            position={"relative"}
            boxSizing="border-box"
            height={{ lg: "60vh",md:"70vh", base: "60vh" }}
            width={"100%"}
            className="cards"
          >
            {renderProjects && renderProjects?.map((item, index) => {

                return(
                  <Box key={index} className="pin">
                  <Box
                    bg={"red.200"}
                    key={index}
                    ref={(el) => (cardsRef.current[index] = el)}
                    height={"100%"}
                    width={"100%"}
                    position={"absolute"}
                    borderTop={"1px solid white"}
                    p={{
                      xl: "80px 50px",
                      lg: "60px 30px",
                      sm: "60px 10px",
                      base: "60px 0px",
                    }}
                    className="card"
                    sx={{
                      background: "#1b1b1b ",
                    }}
                    zIndex={10}
                  >
                    <Flex
                      direction={{ lg: "row", sm: "column", base: "column" }}
                      gap={{ lg: 40, sm: 20, base: "20" }}
                    >
                      <Box
                        position={"relative"}
                        width={{ lg: "468px", md: "80%", sm: "90%", base: "90%" }}
                        m={"auto"}
                        height={{ xl: "261px", sm: "100%" }}
                        className="card_image"
                      >
                        <Image
                          position={"relative"}
                          zIndex={1}
                          objectPosition={"top"}
                          className="single_image_project"
                          borderRadius={"11px"}
                          width={"100%"}
                          objectFit={"cover"}
                          height={"100%"}
                          src={dataProjectImage[item.projectImage]}
                        />
                        <Box
                          className="bg_image_project"
                          height={"100%"}
                          width={"100%"}
                          position={"absolute"}
                          bg={"#6FCAD6"}
                          borderRadius={"11px"}
                          top={4}
                          left={4}
                          zIndex={0}
                        ></Box>
                      </Box>
  
                      <Flex
                        gap={{ lg: 8, sm: 4, base: 6 }}
                        direction="column"
                        width={{ lg: "50%", sm: "100%", base: "100%" }}
                        className="card_text"
                      >
                        <Heading
                          as={"h2"}
                          fontSize={{ lg: "24px", sm: "20px", base: "18px" }}
                          fontWeight={700}
                          textTransform={"uppercase"}
                        >
                          {item.projectName}
                        </Heading>
                        <Text
                          sx={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            WebkitLineClamp: 3,
                          }}
                          fontSize={{ lg: "16px", sm: "14px", base: "14px" }}
                          letterSpacing={"0.32px"}
                          lineHeight={"149%"}
                        >
                          {item.projectDetail}
                        </Text>
                        <Flex gap={3}>
                          Tech Stack :
                          <Flex gap={5}>
                            {item.projectStack.map((stackIcon, index) => (
                              <Link
                              key={index}
                                target="_blank"
                                href={
                                  sitelinks[stackIcon as keyof typeof sitelinks]
                                }
                              >
                                <Box key={index} height={"20px"}>
                                  <Image
                                    height={"100%"}
                                    width={"auto"}
                                    src={dataTechProp[stackIcon]}
                                  />
                                </Box>
                              </Link>
                            ))}
                          </Flex>
                        </Flex>
                        <Button variant={"primary-button"} width={"fit-content"}>
                          <Link target="_blank" href={item.projectLink}>
                            View Site
                          </Link>
                        </Button>
                      </Flex>
                    </Flex>
                    {
                    index ===  renderProjects.length-1 ? (
                      <Box pt={"90px"}>
                        <ButtonGif
                          btnLink="/webworks"
                          btnTitle="VIEW WEBWORKS"
                          key={1}
                          btnImg={ImageGif}
                        />
                      </Box>
                    ) : (
                      <></>
                    )}
                  </Box>
                </Box>
                )

            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Projects;
