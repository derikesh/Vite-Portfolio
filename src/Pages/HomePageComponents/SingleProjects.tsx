import { Box, Flex, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import { dataTechProp } from './Expertise';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SingleWorkProps } from '../WebWorkComponent/SingleWork';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import rightSide from "../../assets/images/icons/right.svg"

interface SingleProjectsProps {
  projectData: SingleWorkProps,
  webData: boolean,
  index: number
}

export default function SingleProjects({ projectData, webData, index }: SingleProjectsProps) {
  const [mouseOver, setMouseOver] = useState(false);
  const TitleRef = useRef<HTMLHeadingElement>(null);

  return (
    <Link target='_blank' to={`${projectData.link}`} >
      <GridItem 
      _hover={{boxShadow:'0px 0px 26px 5px #033'}}
        position={'relative'} 
        width={{ sm: '100%', base: '100%' }} 
        margin={'auto'} 
        height={{ md: '330px', sm: 'auto', base: 'auto' }} 
        borderRadius={7} 
        onMouseEnter={() => setMouseOver(true)} 
        onMouseLeave={() => setMouseOver(false)}
      >
        <Box className="single_projects" height={'100%'} >
          <Box className='intersection_img' overflow={'hidden'} transition={'all 0.3s ease-in-out;'} height={'100%'} width='100%' >
            <LazyLoadImage height={'100%'} width={'100%'} src={projectData.imageURL[0]} />
          </Box>
        </Box>

        <Box 
          position={'absolute'} 
          bottom={-1} 
          height={'100%'} 
          width={'100%'} 
          bg={'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 100%)'} 
          left={0} 
          transition={'background 0.3s ease-in-out'}
        >
        </Box>

        <Box position={'absolute'} bottom={5} left={{ sm: 10, base: 5 }} className='text-div'>
          <Flex gap={4} color={'#E9E9E9'} direction={'column'} >
            <Heading as='h3' fontSize={['20px', '26px']} fontWeight={600} ref={TitleRef}>{projectData.title}</Heading>
            <Box position={'relative'} overflow={'hidden'} >
              <Box height={6} alignItems={'center'} gap={2} position={'relative'} >
                
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box bg={webData ? '' : ''} px={3} background={'#151515'} py={2} borderRadius={5} position={'absolute'} zIndex={12} bottom={6} right={6}>
          <Flex gap={3} >
            {projectData.techStack?.map((item, index) => (
              <Box filter={''} key={index} height={5} width={5} ><Image filter={'brightness(0) invert(1)'} objectFit={'contain'} height={'100%'} width={'100%'} src={dataTechProp[item]} /></Box>
            ))}
          </Flex>
        </Box>

      </GridItem>
    </Link>
  )
}
