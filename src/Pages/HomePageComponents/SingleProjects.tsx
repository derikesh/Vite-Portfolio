import { Box, Flex, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { dataTechProp } from './Expertise'
import { SingleWorkProps } from '../WebWorkComponent/SingleWork';

interface SingleProjectsProps {
    projectData:SingleWorkProps,
    webData:boolean
}

export default function SingleProjects( {projectData,webData} :SingleProjectsProps ) {

 
  return (
    
    <GridItem  >
    <Box width={{sm:'100%',base:'90%'}} margin={'auto'} className="single_projects" >
        <Box position={'relative'} className="pro_image_sec">
        <Box height={['200px', '250px']} width='100%' ><Image objectFit={'cover'} objectPosition={'ceter'} height={'100%'} width={'100%'} src={projectData.imageURL[0]} /></Box>
        <Box position={'absolute'} p={1} px={3} bottom={5} right={5} bg={'#252525'} borderRadius={5} className="tectStack" >
            <Flex gap={3} >
                { projectData.techStack?.map( (item,index)=>(
                    <Box key={index} height={5} width={5} ><Image objectFit={'contain'}  height={'100%'} width={'100%'} src={dataTechProp[item]} /></Box>
                ) ) }
           
            </Flex>
        </Box>
        </Box>
        <Box px={10} py={['20px', '35px']} bg={'#201F23'} className="pro_text_section">
        <Flex gap={3} color={'#E9E9E9'} direction={'column'} >
            <Heading as='h3' fontSize={['20px', '26px']} fontWeight={600} >{projectData.title}</Heading>
            <Text fontSize={['12px', '14px']} >  {webData ? "Web Development" : "Figma Design" } </Text>
        </Flex>
        </Box>
    </Box>
    </GridItem>                          
                 
  )
}
