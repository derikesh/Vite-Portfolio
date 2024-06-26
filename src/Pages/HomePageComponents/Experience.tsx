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
      role: "Web Designer Inter",
      title: "Web Tech",
      description:
        "got intership as a web designer I worked on many design project and gain experience in handling clients and there requirement",
    },
    {
      date: 2022,
      Image: techbal,
      role: "Web Developer",
      title: "Techball",
      description:
        "My first remote job as a Web developer , working on project in wordpress and design with many sucessful project, got to experience the remote work culture and to manage time and work effeciently.",
    },
    {
      date: "Present",
      Image: rikesh,
      role: "Web Developer",
      title: "Freelancing",
      description:
        "Moved from wordpress to javascript framworks and libraries, working on react and nodejs project with some wordpress projects as well , learning new tools and technology.",
    },
  ];

  return (
    <>
      <Box py={{sm:0,base:10}} className="experience_wrap">
        <Header subTag={true} sectionTitle="Working Experience" />

        <Box py={{lg:28,sm:20,base:5}} className="experiences">
          <Flex py={8} gap={{ lg: 16, sm: 10, base: 10 }} direction={"column"}>
            {experience?.map((item, index) => (
              <SingleExp key={index} indexNum={index} dataExp={item} />
            ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
}
