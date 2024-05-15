import { Box, Heading, Image } from "@chakra-ui/react";
import HeadingPage from "./WebWorkComponent/HeadingPage";
import { useFirebase } from "../firebase/Firebase";
import { useEffect, useState } from "react";

function Resume() {

  const [resume, setResume] = useState<any | null>(null)

  const firebase = useFirebase();

  useEffect( ()=>{

      firebase.getDataFireStore?.().then( (data:any)=>{
        setResume(data)
      } ).catch((err)=>{
        console.log(err);
      })
  } ,[])


  return (
    <>
      <Box>
        
        <HeadingPage pageTitle="MORE ABOUT ME" color="white" />
        {/* { resume ? (<>  <Image width={"100%"} height={"100%"} src={resume.docs[0].data().image} /> </>) : "loading......"} */}
       
      </Box>
    </>
  );
}

export default Resume;
