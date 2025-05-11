import Header from "./Component/Header";
import { Box, Grid, GridItem } from "@chakra-ui/react";

import SinlgeExpert from "./SinlgeExpert";

// icons
import wordpressIcon from "../../assets/images/icons/colors/wp.webp";
import tailwindIcon from "../../assets/images/icons/colors/tw.png";
import reactIcon from "../../assets/images/icons/colors/React-icon 1.svg";
import typescriptIcon from "../../assets/images/icons/colors/tscript 1.svg";
import firestore from "../../assets/images/icons/colors/firebase.svg";
import node from "../../assets/images/icons/colors/node-js-icon-454x512-nztofx17 2.svg";
import vsCdoe from "../../assets/images/icons/colors/VC.svg";
import github from "../../assets/images/icons/colors/gittt.svg";
import illu from "../../assets/images/icons/colors/notion.svg";
import bootstrap from "../../assets/images/icons/colors/bootstrap.svg";
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
  description?:string[],
  tech: string[]  
}

export let experData:Record<string,ExpertDataProps> = {
  frontend: {
    title: "Frontend",
    description:['Next,js','React','Redux Toolkit','Shadcn - Tailwind','GSAP','framer motion'],
    tech: Object.values(dataTechProp),
  },
  backend: {
    title: "Backend",
    description:['Node.js','Express','JWT','Mongoose','Firebase','Wordpress'],
    tech: Object.values(dataTechProp),
  },
  tools:{
    title:'Tools',
    description:['Notion','git/github','Docker','Postman','Figma'],
    tech:Object.values(dataTechProp)
  }
};


function Expertise() {


  return (
    <>
      <Box position={'relative'} py={{sm:10,base:5}} pb={{sm:40,base:10}} className="expertise_wrap">


        <Header subTag={false} sectionTitle="MY EXPERTISE" key={12} />


        <Grid py={{sm:28,base:10}} templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={{sm:6,base:10}}>

          {experData && Object.values(experData).map((data, index) => (
            <GridItem key={index} width={{sm:"100%",base:"95%"}} margin={'auto'}>
              <SinlgeExpert index={index} expertData={data} />
            </GridItem>
          ))}


        </Grid>
      </Box>
    </>
  );
}

export default Expertise;
