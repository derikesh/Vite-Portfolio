import { Box, Flex, Heading} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

interface HeadingProp {
  pageTitle: string;
  pageMain?:string;
  color:string
}

export default function HeadingPage({ pageTitle , pageMain, color }: HeadingProp) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  gsap.registerPlugin(TextPlugin);

  useEffect(() => {

    const tl = gsap.timeline();

    tl.to(headingRef.current, {  duration:1, text: { value: pageTitle },ease:"power1.out" });
    if( pageMain ){
      tl.to( headingRef.current, {duration:1, color:color, text : { value:pageMain } , ease:"power1.out" } );
    }

    
  }, [pageTitle]);

  return (
    <>
      <Flex direction={"column"} position={"relative"} width={'100%'} h={{lg:'45vh',md:'50vh',base:'40vh'}}>
        <Heading
          ref={headingRef}
          alignItems={'center'}
          textAlign={'center'}
          justifyContent={'center'}       
          className="heading_about"
          fontSize={{ lg: "50px", md: "32px", sm: "30px", base: "32px" }}
          fontWeight={800}
          as="h2"
          textTransform={'uppercase'}
          width='100%'
          m={'auto'}
          height={{ lg: "70px" }}
        >
        </Heading>

      <Box borderRadius={'50%'} position={"absolute"} height={{md:"8px",base:"6px"}} width={"100%"} opacity={"0.8"} zIndex={1} bg={"linear-gradient(90deg, rgb(18, 18, 18) 0%, #474747 53.65%, rgba(29, 29, 29, 0.67) 100%)"} bottom={0} className='borderBcolor'></Box>


      </Flex>
    </>
  );
}