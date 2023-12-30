import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

interface buttonValueProp {
    btnTitle:string,
    btnLink:string,
    btnImg:string
}

function ButtonGif( {btnTitle ,btnLink ,btnImg } : buttonValueProp  ) {

    const gifImg = useRef<HTMLDivElement | null>(null);
    
    const handelHover = ( isHovered:any )=>{

            if( gifImg.current ){
                gifImg.current.style.display = isHovered ? 'block' : 'none';
            }

    } 

  return (
    <>
      <Link to={btnLink} className="btn_wrap"  onClick={ ()=>{window.scroll(0,0)} }>
        <Box className="btn" my={10} border={"1px solid #DFDFDF"} borderRadius={"6px"}>
          <Flex 
          onMouseEnter={ ()=>handelHover(true) }
          onMouseLeave={ ()=>handelHover( false ) }
          gap={5} justifyContent={'center'} alignItems={'center'} >
            <Text  py={{ lg:'24px',md:'20px',sm:'16px',base:'16px' }} fontSize={ { lg: "24px", md: "20px", sm: "20px", base: "18px" }} >{btnTitle}</Text>
            <Box transition={'0.3s ease-in'} display={'none'} ref={gifImg} className="gif_image" height={ {lg:"61px",sm:'52px',base:'45px'} } width={ {lg:"61px",sm:'52px',base:'45px'} }>
              <Image borderRadius={"10px"} objectFit={'cover'} height={"100%"} width={"100%"} src={btnImg} />
            </Box>
          </Flex>
        </Box>
      </Link>
    </>
  );
}

export default ButtonGif;
