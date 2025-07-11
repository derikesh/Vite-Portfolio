import { Box, Flex, Heading, Image, Text, transition } from '@chakra-ui/react'
import demoIcon from "../../assets/images/icons/atom.png"
import { ExpertDataProps } from './Expertise'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'

interface singleProps {
  expertData: ExpertDataProps,
  index: number
}

gsap.registerPlugin(ScrollTrigger);

export default function SinlgeExpert({ expertData: { title, description, tech }, index }: singleProps) {

  // ref
  const singleExpert = useRef<Array<HTMLDivElement | null>>([]);

  const [mouseOver, setmouseOver] = useState(false);

  let singleIndex = index;

  let techArr: any = [];
  let bgColor = '';
  let borderColor = '';
  let shadow = '';


  if (singleIndex === 0) {
    techArr = tech.slice(0, 3);
    bgColor = '#000';
    shadow='#0F427E';
    borderColor = '#0F427E';
  } else if (singleIndex === 1) {
    techArr = tech.slice(3, 6);
    bgColor = '';
    shadow='#474747';
    borderColor = 'white';
  } else if (singleIndex === 2) {
    techArr = tech.slice(6, 9);
    bgColor = '#2d2d2d';
    shadow='#2D2D2D';
    borderColor = '#2D2D2D';
  }

  let shadownIt = {
    transition: 'all 0.3s ease-in-out',
    _hover: {
      boxShadow: `0px 0px 26px 5px ${shadow}`,
      transition: 'all 0.3s ease-in-out',
      filter:'brightness(1.1'
    }
  }

  // animation for single expert

  useEffect( ()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: singleExpert.current,
        start:'top 70%',
        end:'bottom 70%',
        toggleActions:'play none none none',
        // markers:true,
      }
    })
      const ctx = gsap.context( ()=>{
        singleExpert.current && singleExpert.current.forEach( (item,index)=>{
          tl.from( item , { duration:0.6+index*0.5 , y:200 , opacity:0,ease: "elastic.out(0.3,6)" })
        } ) 
      } )
      return ()=>{
        if(ctx){
          ctx.revert();
        }
      }
  } ,[])

  return (
   <Box onMouseOver={ ()=>setmouseOver(true) } _hover={ { cursor:"pointer" } } onMouseOut={ ()=>setmouseOver(false) } className='single_expert' ref={(el)=>singleExpert.current[index] = el} >
    <Box  sx={shadownIt} overflow={'hidden'} position={'relative'}  bg={bgColor} p={{sm:8,base:6}} borderRadius={{sm:30,base:20}} h={{sm:'420px',base:"330px"}} border={`1px solid ${borderColor}`}>
      <Flex position={'relative'} zIndex={1}  fontSize={'37px'} alignItems={'center'} className='expert_top_heading' gap={6} >
        <Heading >{title}</Heading>
        <Box>
          {/* <Image src={demoIcon} /> */}
        </Box>
      </Flex>
      <Box py={6} position={'relative'} zIndex={1} className='expert_description'>
      
      {description && <Box transition={"0.2s ease-in"} opacity={ {md: mouseOver ? 1 : 0 ,sm:1,base:1 } } fontSize={'18px'}>
          <ul style={{padding:'0px 20px'}} >
            {description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Box>}
      </Box>
      <Box className='icons_wrap'>

        <Box transition={'all 0.3s all-in-out'} className='single_icons' filter={'brightness(0) invert(1)'} opacity={0.13} position={'absolute'} top={index === 0 ? 5 : (index === 1 ? 10 : 20)} right={index === 0 ? 5 : (index === 1 ? 5 : { sm: 50, base: 10, lg: 120 })} width={'75px'} height={'auto'} >
          <Image  height={'100%'} width={'100%'} objectFit={'contain'} src={techArr[0]} />
        </Box>

        <Box transition={'all 0.3s all-in-out'} className='single_icons' filter={'brightness(0) invert(1)'} opacity={0.13} position={'absolute'} bottom={index === 0 ? 6 : (index === 1 ? 5 : { xl: 20, base: 10 })} left={index === 0 ? 10 : (index === 1 ? 5 : { sm: 50, base: 10, lg: 250 })} width={'75px'} height={'auto'} >
          <Image  height={'100%'} width={'100%'} objectFit={'contain'} src={techArr[1]} />
        </Box>

        <Box transition={'all 0.3s all-in-out'} className='single_icons' filter={'brightness(0) invert(1)'} opacity={0.13} position={'absolute'} bottom={index === 0 ? 32 : (index === 1 ? 6 : 5)} right={index === 0 ? 10 : (index === 1 ? 10 : { sm: 50, base: 10, lg: 250 })} width={'75px'} height={'auto'} >
          <Image height={'100%'} width={'100%'} objectFit={'contain'} src={techArr[2]} />
        </Box>

      </Box>
    </Box>
   </Box>
  )
}
