import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { sitelinks } from "../../Datas/siteLinks";

import { dataTechProp } from "../HomePageComponents/Projects";

import AnimationLine from "../HomePageComponents/Component/AnimationLine";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface SingleWorkProps {
  title: string;
  description: string;
  techStack?: Array<string>;
  imageURL: Array<string>;
  link: string;
}

export default function SingleWork({
  title,
  description,
  techStack,
  imageURL,
  link,
}: SingleWorkProps) {
  const font18 = {
    fontSize: { lg: "18px", sm: "16px", base: "14px" },
  };

  const headingBefore = {
    position: "relative",
    _before: {
      content: "''",
      width: "18px",
      borderRadius: "50%",
      height: "18px",
      marginRight: "10px",
      background: "#00A1BE",
      display: "block",
      position: "absolute",
      left: { sm: "-75px", base: "-35px" },
      top: "15px",
    },
  };

  return (
    <>
      <Box className="single_work" pb={{md:10,base:20}}>
        <Flex
          position={"relative"}
          pl={{ lg: 20, sm: 20, base: 10 }}
          className="text_content_webwork"
          direction={"column"}
          gap={10}
        >
          <AnimationLine />

          <Heading
            fontSize={{ lg: "36px", md: "32px", sm: "28px", base: "22px" }}
            textTransform={"uppercase"}
            fontWeight={500}
            as={"h2"}
            sx={headingBefore}
          >
            {title}
          </Heading>
          <Text sx={font18}>{description}</Text>
          <Flex
            gap={{ sm: "", base: 5 }}
            direction={{ md: "row", sm: "column", base: "column" }}
            justifyContent={"space-between"}
          >
            {techStack ? (
              <Flex gap={3} className="tech_stack">
                <Box sx={font18}>TECH STACK :</Box>
                {techStack?.map((item: string) => (
                  <Link
                    target="_blank"
                    to={sitelinks[item as keyof typeof sitelinks]}
                  >
                    <Box height={"20px"}>
                      <Image
                        height={"100%"}
                        width={"auto"}
                        src={dataTechProp[item]}
                      />
                    </Box>
                  </Link>
                ))}
              </Flex>
            ) : (
              <></>
            )}

            <Box
              border={"2px solid white"}
              width={"fit-content"}
              borderRadius={"7px"}
              sx={font18}
              px={5}
              py={1}
              transition={"0.1s ease-in"}
              _hover={{
                background: "white",
                color: "black",
              }}
            >
              <Link to={`${link}`} target="_blank">
                {techStack ? "view Site" : "View desgin"}
              </Link>
            </Box>
          </Flex>
        </Flex>

        <Flex
          position={"relative"}
          zIndex={10}
          bg={"#272727"}
          borderRadius={"10px"}
          my={{ lg: 20, md: 6, base: 16 }}
          width={"100%"}
          height={{ lg: "350px", md: "100%", base: "200px" }}
          className="project_img"
          padding={{md:5,base:2}}
        >
          <Swiper
            spaceBetween={10}
            grabCursor={true}
            // loop={true}
            pagination={false}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              0:{
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 1.6,
              },
              992: {
                slidesPerView: 1.2,
              },
              1200: {
                slidesPerView: 1.6,
              },
              1400: {
                slidesPerView: 2.1,
              },
            }}
          >
            {imageURL.map((item: string) => (
              <Box>
                <SwiperSlide>
                  <Image
                    width={"100%"}
                    height={"100%"}
                    className="single_webwork_img"
                    src={item}
                  />
                </SwiperSlide>
              </Box>
            ))}
          </Swiper>
        </Flex>
      </Box>
    </>
  );
}
