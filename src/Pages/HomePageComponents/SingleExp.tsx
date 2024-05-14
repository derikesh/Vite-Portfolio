import { Box, Flex, Heading, Image, Text, filter, transform, transition } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

interface SingleExpProps {
    dataExp:{
        title:string,
        description:string,
        Image:string,
        date:string | number
    },
    indexNum:number
}

export default function SingleExp( {dataExp,indexNum} :SingleExpProps) {

        const [click, setClick] = useState<boolean>(false)

        const singleExpRef = useRef<Array<HTMLDivElement | null>>([]);


        
      useEffect( ()=>{
        
      

     if(singleExpRef.current){
        singleExpRef.current.forEach( (item,index)=>{
            item?.addEventListener('click',()=>{
                setClick(!click);
            })
          
          } );
     }
      
        },[click]);
     


      const transitionSingle = {
        transition:'0.2s ease-in',
        _hover:{
            // boxShadow: '#1de1e1 0px 0px 20px -12px',
            cursor:'pointer',
            transform:'scale(1.03)',
        }
      }




  return (
   

    <Flex  height={'auto'}  width={'fit-content'} margin={'auto'} alignItems={'center'} gap={{lg:20,sm:10}} className="single_exp">
        <Box display={{lg:'block',sm:'block',base:'none'}} className="exp_date" >{dataExp.date}</Box>
             <Box display={{lg:'block',sm:'block',base:'none'}} width={{lg:'100px',sm:'30px'}} height={'2px'} bg={'white'} ></Box>

                 <Flex sx={transitionSingle} ref={(el)=>singleExpRef.current[indexNum]=el} transformOrigin={'bottom'} borderRadius={10} padding={4} bg={'#2B2B2B'} align={'top'} gap={6} height={'auto'} width={{lg:'360px',sm:'300px',base:'100%'}} >
                     <Box height={'60px'} width={'90px'} className="exp_logo" ><Image  borderRadius={10} height={'100%'} width={'100%'} objectFit={'cover'} src={dataExp.Image} /></Box>
                     <Box transition={'0.3s ease-in'} width={'inherit'} className="exp_text_content">
                         <Heading as={'h3'} >{dataExp.title}</Heading>
                      <Text pt={3} display={{sm:click ? 'block' :'none',base:'block'}} fontFamily={'sans-serif'} fontSize={'14px'} color={'#E6E6E6'} >{dataExp.description}</Text>
                     </Box>
                </Flex> 

    </Flex>

  )
}
