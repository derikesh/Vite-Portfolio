import { Box, Flex, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { dataTechProp } from './Expertise'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SingleWorkProps } from '../WebWorkComponent/SingleWork';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import rightSide from "../../assets/images/icons/right.svg"
import { DemoFunction } from '../../components/Animtion';
import "atropos/css"
import Atropos from 'atropos/react';

interface SingleProjectsProps {
    projectData:SingleWorkProps,
    webData:boolean,
    index:number
}


export default function SingleProjects( {projectData,webData,index} :SingleProjectsProps ) {

    const [mouseOver, setMouseOver] = useState<boolean | null>(false);

    const singleProject = useRef<Array<HTMLDivElement | null >>([]);

    const TextShow = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (singleProject.current) {
            function mouseOver() {
                setMouseOver(true);
                gsap.to(TextShow.current, { top: 0, duration: 0.3 });
            }

            function mouseOut() {
                setMouseOver(false);
                gsap.to(TextShow.current, { top: 20, duration: 0.3 });
            }

            singleProject.current.forEach((item) => {
                item?.addEventListener('mouseenter', mouseOver);
                item?.addEventListener('mouseleave', mouseOut);
            });

            return () => {
                singleProject.current.forEach((item) => {
                    item?.removeEventListener('mouseenter', mouseOver);
                    item?.removeEventListener('mouseleave', mouseOut);
                });
            };
        }
    }, []);

    
    

 
  return (
    <Link target='_blank' to={`${projectData.link}`} >
   <Atropos  
    activeOffset={2}
  shadowScale={1.01}  
  duration={100}
  highlight={true} >
   <GridItem position={'relative'} width={{sm:'100%',base:'100%'}} margin={'auto'}  height={{md:'330px',sm:'auto',base:'auto'}} borderRadius={7} ref={ (el)=>singleProject.current[index]=el } >
   
   <DemoFunction>
   <Box className="single_projects" height={'100%'} >
      <Box className='intersection_img' overflow={'hidden'} transition={'all 0.3s ease-in-out;'} height={'100%'} width='100%' ><LazyLoadImage height={'100%'} width={'100%'} src={projectData.imageURL[0]} /></Box>       
  </Box>
   </DemoFunction>

   <Box  position={'absolute'} bottom={-1} height={'100%'} width={'100%'} bg={'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 100%)'} left={0} >        
  </Box>           

  <Box position={'absolute'} bottom={5} left={{sm:10,base:5}} className='text-div'>
  <Flex gap={4} color={'#E9E9E9'} direction={'column'} >
          <Heading as='h3' fontSize={['20px', '26px']} fontWeight={600} >{ projectData.title}</Heading>
         
          {/* <Flex transition={'all 0.3s ease-in'}  position={'relative'} overflow={'hidden'} >
              <Flex height={6} alignItems={'center'} gap={2}  position={'relative'} ref={TextShow} top={{sm:5,base:0}} >
              <Text>{webData ? "Visit Site " : "View Design"}</Text>
              <Box height={3} width={3} ><Image height="100%" w={'100%'} src={rightSide} /></Box>
              </Flex>
          </Flex> */}

      </Flex>      
  </Box>

  <Box bg={webData ?'' : ''} px={3}  background={'#151515'} py={2} borderRadius={5} position={'absolute'} zIndex={12} bottom={6} right={6}> <Flex gap={3} >                
              {projectData.techStack?.map( (item,index)=>(
                  <Box filter={''} key={index} height={5} width={5} ><Image filter={'brightness(0) invert(1)'} objectFit={'contain'}  height={'100%'} width={'100%'} src={dataTechProp[item]} /></Box>
              ) ) }
         
          </Flex>
  </Box>

  </GridItem> 
   </Atropos>
    </Link>
                 
  )
}



