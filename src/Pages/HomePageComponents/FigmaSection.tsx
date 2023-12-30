import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Header from "./Component/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonGif from "../../components/ButtonGif";
import gif from "../../assets/images/GIf/spee.gif";
import gif2 from "../../assets/images/GIf/all.gif"


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {  Pagination } from "swiper/modules";

// data
import project1 from "../../assets/images/figma/chautara.png";
import project2 from "../../assets/images/figma/port.png";
import project3 from "../../assets/images/figma/webtech.png";

interface dataFigmaProp {
  projectTitle: string;
  projectDes: string;
  projectImg: string;
}

export default function FigmaSection() {
  const dataFigma: dataFigmaProp[] = [
    {
      projectTitle: "Cricket Chautara",
      projectDes:
        "Figma's Cricket Chautara is my freelance project—a sleek website offering cricket fans live scores, latest news, and match updates. It's the go-to place for everything cricket, designed for easy browsing and enjoyment.",
      projectImg: project1,
    },
    {
      projectTitle: "Webecth Concept Desgin",
      projectDes:
        "In my initial Figma project, I designed web pages—like captivating landing pages and unique forms for a web tech company. These were conceptual designs, aiming to create a cohesive and engaging online experience",
      projectImg: project3,
    },
    {
      projectTitle: "Potfolio Desgin",
      projectDes:
        "Crafted with Figma, my portfolio is a clean canvas showcasing my projects vibrantly. Through purposeful animations, it offers an engaging journey, giving life to my work and reflecting my design ethos",
      projectImg: project2,
    },
  ];

  return (
    <>
      <Box className="figma_wrap" mb={{lg:60,base:20}}>
        <Header sectionTitle="FIGMA DESIGNS" />

     
      <Box className="figma_swiper_wrap" my={20}>
     
          <Swiper
            spaceBetween={30}
            grabCursor={true}
            // loop={true}
            pagination={false}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
                768: {
                  slidesPerView: 1.1,
                },
                992: {
                  slidesPerView: 1.2,
                },
                1200: {
                  slidesPerView: 1.3,
                },
                1400: {
                    slidesPerView: 1.3,
                  },
                
              }}
          >
            

                { dataFigma.map( (item)=> (
                    
                    <SwiperSlide>
                    <Box className="singe_figma">
                      <Box
                        position={"relative"}
                        width={{ xl: "100%",sm:'100%',base:'100%' }}
                        height={{sm:'auto',base:'26rem'}}
                        className="figma_background"
                      >
                        <Image
                          borderRadius={"16px"}
                          height={"100%"}
                          width={"100%"}
                          src={item.projectImg}
                          objectFit={'cover'}
                        />
      
                        <Box
                          position={"absolute"}
                          zIndex={1}
                          top={0}
                          className="overlay"
                          h={"100%"}
                          w={"100%"}
                          bg={
                            "linear-gradient(0deg, rgba(0, 0, 0, 0.76) 21.55%, rgba(0, 0, 0, 0.00) 99.72%)"
                          }
                        ></Box>
      
                        <Box                       
                          className="text_figma"
                          zIndex={2}
                          px={{sm:10,base:5}}
                          width={"100%"}
                          position={"absolute"}
                          bottom={5}
                          color={"white"}
                        >
                           <Heading fontWeight={500} mb={3} fontSize={ { lg: "24px", md: "20px", sm: "20px", base: "18px" } } as={'h2'} >{item.projectTitle}</Heading>   
                          <Box>
                          <Text                            
                          fontSize={ {lg:'18px',sm:'16px',base:"16px"} }
                           sx={{                              
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              WebkitLineClamp: 2,
                            }}
                          >
                            {item.projectDes}
                          </Text>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>

                ) ) }

          <ButtonGif btnImg={gif2} btnTitle="VIEW All" btnLink="/figma" key={1}/>
          

          </Swiper>

        </Box>

       
      </Box>
    </>
  );
}

