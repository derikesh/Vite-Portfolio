import { Box, Heading, Image } from '@chakra-ui/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

interface SingleInterestProps {
    title: string;
    imageURL: string;  
    index:number      
}

gsap.registerPlugin(ScrollTrigger);

export default function SingleInterest( {title, imageURL,index}: SingleInterestProps ) {

    const SingleInterest = useRef<Array<HTMLDivElement | null>>([]);
    const [mouseEnter, setMouseEnter] = useState<boolean>(false);
    const [xvalue, setXvalue] = useState<number>(0);
    const [yvalue, setYvalue] = useState<number>(-120);

    gsap.set( ".single_intrest_img",{ xPercent:5,yPercent:-120 } )
    
    useEffect( ()=>{        

            let tl = gsap.timeline({
                scrollTrigger:{
                    trigger:SingleInterest.current,
                    start:'top 50%', 
                    end:'bottom 20%',
                    toggleActions:'play none none reverse'  
                }
            })          


            if(SingleInterest.current[index]){
                SingleInterest.current.forEach( (item)=>{
                   tl.to(item,{opacity:1,duration:0.3,cursor:'pointer'})
                   

                    item?.addEventListener( 'mousemove',e =>{
                        setXvalue(e.clientX);
                        setYvalue(e.clientY);   
                    } )

                    item?.addEventListener( 'mouseover',e =>{
                        setMouseEnter(true);
                    } )

                    item?.addEventListener( 'mouseleave',e=>{                        
                        setMouseEnter(false);
                    } )
                } )
            }

        return ()=>{}

    } ,[])   ;
    


  return (
    <Box  position={'relative'} opacity={'0'} ref={  (el)=>SingleInterest.current[index]=el } py={20}>
        <Heading transition={'0.7s ease-in'} fontSize={{md:'70px',sm:"30px",base:"40px"}} as={'h2'} >{title}</Heading>
        <Box className='single_intrest_img' width={'600px'} height={'400px'} position={'absolute'} top={yvalue} left={xvalue} >
        { <Image borderRadius={20} display={{sm:'block',base:'none'}}  filter={'grayscale(2)'} opacity={mouseEnter ? 1 : 0} transition={'all 0.3s ease-in-out'} height={'100%'} width={'100%'} objectFit={'cover'} src={imageURL}  /> } 
        </Box>
    </Box>
  )
}