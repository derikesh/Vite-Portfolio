import Header from "./Component/Header";
import { Box, Grid, GridItem } from "@chakra-ui/react";

import SinlgeExpert from "./SinlgeExpert";

// icons
import wordpressIcon from "../../assets/images/icons/colors/wp.webp";
import tailwindIcon from "../../assets/images/icons/colors/tw.png";
import reactIcon from "../../assets/images/icons/colors/React-icon 1.svg";
import typescriptIcon from "../../assets/images/icons/colors/tscript 1.svg";
import firestore from "../../assets/images/icons/colors/fb.png";
import node from "../../assets/images/icons/colors/node-js-icon-454x512-nztofx17 2.svg";
import vsCdoe from "../../assets/images/icons/colors/VC.svg";
import github from "../../assets/images/icons/colors/gittt.svg";
import illu from "../../assets/images/icons/colors/notion.svg";
import bootstrap from "../../assets/images/icons/colors/bootstrap.png";
import motion from "../../assets/images/icons/colors/motion.svg";
import gsapIcon from "../../assets/images/icons/colors/gsap.svg";
import chakraUi from "../../assets/images/icons/colors/chakra.svg";


export const dataTechProp: Record<string, string> = {
  react: reactIcon,
  typescript: typescriptIcon,
  tailwind: tailwindIcon,
  node: node,
  firestore: firestore,
  wordpress: wordpressIcon,
  github: github,
  vsCode :vsCdoe,
  illu:illu,
  bootstrap:bootstrap,
  motion:motion,
  gsap:gsapIcon,
  chakraUi:chakraUi
};

export interface ExpertDataProps {
  title:string,
  description?:string,
  allTools?: string[],
  tech: string[]  
}

export let experData:Record<string,ExpertDataProps> = {
  frontend: {
    title: "Frontend Dev",
    description:"Exploring the digital world for over a year, I'm Rikesh a creative enthusiast crafting digital presence through web design and programming. Excited to.",
    tech: Object.values(dataTechProp),
  },
  backend: {
    title: "Backend Dev",
    description:"Exploring the digital world for over a year, I'm Rikesh a creative enthusiast crafting digital presence through web design and programming. Excited to.",
    tech: Object.values(dataTechProp),
  },
  tools:{
    title:'tools i use',
    allTools:['notion','ubantu','git','github','vs code',' figma'],
    tech:Object.values(dataTechProp)
  }
};


function Expertise() {


  return (
    <>
      <Box py={{sm:10,base:5}} pb={40} className="expertise_wrap">
        <Header sectionTitle="MY EXPERTISE" key={12} />


        <Grid py={20} templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>

          {experData && Object.values(experData).map((data, index) => (
            <GridItem key={index} width={"100%"} >
              <SinlgeExpert index={index} expertData={data} />
            </GridItem>
          ))}


        </Grid>
      </Box>
    </>
  );
}

export default Expertise;
