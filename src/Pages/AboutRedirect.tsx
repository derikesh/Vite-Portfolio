import { Box, Button, Heading, Image } from "@chakra-ui/react";
import icon from "../assets/images/icons/right.svg"
import stoic from "../assets/images/stoic.svg"
import { Link } from "react-router-dom";
import { DemoFunction } from "../components/Animtion";

export default function AboutRedirect() {
    return (
        <>
            <Box position={'relative'} overflow={'hidden'} my={20} _hover={{ boxShadow: '0px 0px 34px rgba(249.69, 249.69, 249.69, 0.25)', color: 'white' }} transition={'0.3s ease-in'} className="about_redirect" bg={'#1A1A1A'} border="3px solid #FFDDBD" color={'#FFDDBD'} borderRadius="10px" p={{md: '46px', sm: '30px', base: '40px 20px'}}>
                <Heading pb={{sm:10,base:5}} fontSize={{md:42, sm:28, base:24}} as={'h2'} >Explore my works in detail</Heading>

                <Link to={'/webworks'} onClick={ ()=>{window.scroll(0,0)} } >
                    <Button transition={'0.3s ease-in'} colorScheme="white" border={'2px solid white'} borderRadius={5} fontSize={{sm:20,base:14}} padding={{md: '10px 20px', sm: '8px 16px', base: '6px 12px'}}>
                        Web works<Image src={icon} alt="icon" style={{ width: '15px', height: '15px', marginLeft: '10px' }} />
                    </Button>
                </Link>

                <Box pos={'absolute'} right={{sm:10,base:5}} top={{sm:3,base:7}} height={{md: '248px', sm: '200px', base: '150px'}} width={'auto'}>
                    <Image height={'100%'} width={'100%'} src={stoic} alt="stoic" />
                </Box>

            </Box>
        </>
    );
}
