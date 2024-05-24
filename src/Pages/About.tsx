import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import HeadingPage from "./WebWorkComponent/HeadingPage";
import { useFirebase } from "../firebase/Firebase";
import { useEffect, useRef, useState } from "react";
import SingleInterest from "./SingleInterest";
import ImageMusic from "../assets/images/sing.jpeg";
import Header from "./HomePageComponents/Component/Header";
import { DemoFunction } from "../components/Animtion";

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
      image: ImageMusic
    },

    { 
      title: "Enjoy working out  " ,
      image: ImageMusic
    },

    { 
      title: "Love Traveling" ,
      image: ImageMusic
    },

    { 
      title: "I do read sometimes" ,
      image: ImageMusic
    }
  ]


  return (
    <>
      <Box overflow={'hidden'} >
        
        <HeadingPage pageTitle="ABOUT ME" pageMain="ABOUT ME" color="cyan" />
      
        <Box className="wrap_about_content">

      <DemoFunction> 
      <Box  py={20} fontSize={"22px"}>
       <Heading pb={3} fontSize={'38px'} as={'h2'} >About</Heading>
       <Text>Growing up, I was a curious kid. Everything was new and exciting, and I always had questions. This need to understand things never left. I'm still that curious person, always looking to learn and explore new things.</Text>
       </Box>
      </DemoFunction>

           <DemoFunction>
           <Flex borderBottom={'4px solid #616161'} py={'90px'} gap={80} alignItems={'center'} className="about_content first">              
                <Heading fontSize={'38px'} as={'h2'} >Education</Heading>
                <Text fontSize={'18px'} >Currently</Text>
                <Text fontSize={'18px'} >Pursuing a Bachelor's degree in Computer Science and Information Technology (CSIT) at Prime College, Kathmandu, Nepal.</Text>
            </Flex> 
            </DemoFunction> 


            <Flex direction={'column'} borderBottom={'4px solid #616161'} py={'90px'} gap={20} className="about_content second">
                <DemoFunction>
                <Heading fontSize={'38px'} as={'h2'} >Interest</Heading>
                </DemoFunction>
                 <Box ref={wrapInterest} >
                  { dataInterest.map( (item,index)=> (
                 <SingleInterest index={index} key={index} title={item.title} imageURL={item.image} />
                  ) ) }
                 
                 </Box>

            </Flex>

       <Box py={40} className="resume_wrap" >
        <Header sectionTitle="Resume" subTag={false}  />
       { resume ? (<Box py={20} >  <Image width={"80%"} margin={'auto'} height={"100%"} src={resume.docs[0].data().image} /> </Box>) : "loading......"}
       </Box>
        </Box>    


      </Box>
    </>
  );
}

export default Resume;
