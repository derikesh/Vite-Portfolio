import { Box, Flex, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { dataTechProp } from './Expertise'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SingleWorkProps } from '../WebWorkComponent/SingleWork';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import rightSide from "../../assets/images/icons/right.svg"


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
    
    <GridItem width={{sm:'100%',base:'90%'}} margin={'auto'}  border={'2px solid #252525'} borderRadius={7} ref={ (el)=>singleProject.current[index]=el } >
    <Link target='_blank' to={`${projectData.link}`} >
    <Box className="single_projects" >
        <Box position={'relative'} className="pro_image_sec">
        <Box borderTopRadius={6} className='intersection_img' overflow={'hidden'} transition={'all 0.3s ease-in-out;'} height={['200px', '290px']} width='100%' ><LazyLoadImage height={'100%'} width={'100%'} src={projectData.imageURL[0]} /></Box>
        <Box bg={webData ?'#3C3C3C' : ''} px={3} py={2} borderRadius={5} position={'absolute'} bottom={5} right={5}> <Flex gap={3} >                
                {projectData.techStack?.map( (item,index)=>(
                    <Box key={index} height={5} width={5} ><Image objectFit={'contain'}  height={'100%'} width={'100%'} src={dataTechProp[item]} /></Box>
                ) ) }
           
            </Flex></Box>
        
        </Box>
        <Box px={6} transition={'all 0.3s ease-in'} py={['20px', '25px']} bg={'#201F23'} borderBottomRadius={6} className="pro_text_section">
        <Flex gap={4} color={'#E9E9E9'} direction={'column'} >
            <Heading as='h3' fontSize={['20px', '26px']} fontWeight={600} >{ projectData.title}</Heading>
           
            <Flex transition={'all 0.3s ease-in'}  position={'relative'} overflow={'hidden'} >
                <Flex height={6} alignItems={'center'} gap={2}  position={'relative'} ref={TextShow} top={{sm:5,base:0}} >
                <Text>{webData ? "Visit Site " : "View Design"}</Text>
                <Box height={3} width={3} ><Image height="100%" w={'100%'} src={rightSide} /></Box>
                </Flex>
            </Flex>

        </Flex>
        </Box>
    </Box></Link>
    </GridItem>                          
                 
  )
}
