import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import HeadingPage from "./WebWorkComponent/HeadingPage";
import { useFirebase } from "../firebase/Firebase";
import { useEffect, useRef, useState } from "react";
import SingleInterest from "./SingleInterest";
import Header from "./HomePageComponents/Component/Header";
import { DemoFunction } from "../components/Animtion";
import { wrap } from "gsap";

import ImageMusic from "../assets/images/sing.jpeg";
import play from "../assets/images/about/play.jpg";
import travel from "../assets/images/about/travel.jpg";
import work from "../assets/images/about/build.jpg";
import read from "../assets/images/about/book.jpg"


function Resume() {

  const [resume, setResume] = useState<any | null>(null)

  const firebase = useFirebase();

  const wrapInterest = useRef<HTMLDivElement | null>(null);

  useEffect( ()=>{

      firebase.getDataFireStore?.().then( (data:any)=>{
        setResume(data)
      } ).catch((err)=>{
        console.log(err);
      })
  } ,[]);


  const dataInterest= [
    { 
      title: "Play Music" ,
      image: ImageMusic
    },

    { 
      title: "really into sports" ,
      image: play
    },

    { 
      title: "Enjoy working out  " ,
      image: work
    },

    { 
      title: "Love Traveling" ,
      image: travel
    },

    { 
      title: "I do read sometimes" ,
      image: read
    }
  ]


  return (
    <>
      <Box px={{sm:0,base:5}} overflow={'hidden'} >
        
        <HeadingPage pageTitle="ABOUT ME" pageMain="ABOUT ME" color="cyan" />
      
        <Box className="wrap_about_content">

      <DemoFunction> 
      <Box  py={20} fontSize={"22px"}>
       <Heading pb={3} fontSize={'38px'} as={'h2'} >About</Heading>
       <Text fontSize={{md:"22px",base:"20px"}} >Growing up, I was a curious kid. Everything was new and exciting, and I always had questions. This need to understand things never left. I'm still that curious person, always looking to learn and explore new things.</Text>
       </Box>
      </DemoFunction>

           <DemoFunction>
           <Flex flexWrap={{xl:'nowrap',sm:'wrap',base:'wrap'}} borderBottom={'4px solid #616161'} py={'90px'} gap={{'2xl':80,xl:40,lg:40,md:20,sm:20,base:10}} alignItems={'center'} className="about_content first">              
                <Heading fontSize={'38px'} as={'h2'} >Education</Heading>
                <Text fontSize={'18px'} display={{lg:'block',md:'none',sm:'none',base:'none'}} >Currently</Text>
                <Text fontSize={'18px'} >Bachelor's  in Computer Science and Information Technology (CSIT) at Prime College, Kathmandu, Nepal.</Text>
            </Flex> 
            </DemoFunction> 


            <Flex direction={'column'} borderBottom={'4px solid #616161'} py={'90px'} gap={20} className="about_content second">
                <DemoFunction>
                <Heading fontSize={{md:'38px',sm:"30px",base:"30px"}} as={'h2'} >Interest</Heading>
                </DemoFunction>
                 <Box ref={wrapInterest} >
                  { dataInterest.map( (item,index)=> (
                 <SingleInterest index={index} key={index} title={item.title} imageURL={item.image} />
                  ) ) }
                 
                 </Box>

            </Flex>

       <Box py={40} className="resume_wrap" >
        <Header sectionTitle="Resume" subTag={false}  />
       { resume ? (<Box py={20} >  <Image width={{sm:"80%",base:'100%'}} margin={'auto'} height={"100%"} src={resume.docs[0].data().image} /> </Box>) : "loading......"}
       </Box>
        </Box>    


      </Box>
    </>
  );
}

export default Resume;
