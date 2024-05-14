import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Header from "./Component/Header";
import ImageWeb from "../../assets/images/figma/webtech.png";
import techbal from "../../assets/images/figma/techball.png";
import rikesh from "../../assets/images/figma/rikesh.png";
import SingleExp from "./SingleExp";

export default function () {
  let experience = [
    {
      date: 2021,
      Image: ImageWeb,
      title: "Web Designer",
      description:
        "As a web designer I worked on many design project and gain experience in handling clientsa and there requirement",
    },
    {
      date: 2022,
      Image: techbal,
      title: "Web Developer",
      description:
        "Web designer I worked on many design project and gain experience in handling clientsa and there requirement",
    },
    {
      date: "Present",
      Image: rikesh,
      title: "Freelancing",
      description:
        "Designer I worked on many design project and gain experience in handling clientsa and there requirement",
    },
  ];

  return (
    <>
      <Box className="experience_wrap">
        <Header sectionTitle="Experience" />

        <Box py={{lg:28,sm:20,base:5}} className="experiences">
          <Flex gap={{ lg: 20, sm: 10, base: 10 }} direction={"column"}>
            {experience?.map((item, index) => (
              <SingleExp key={index} indexNum={index} dataExp={item} />
            ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
}
