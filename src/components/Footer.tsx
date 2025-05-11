import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

// icons handel
import linked from "../assets/images/icons/linkind.svg";
import insta from "../assets/images/icons/instagram.svg";
import mail from "../assets/images/icons/mail.svg";
import github from "../assets/images/icons/github.svg"
import { Link } from "react-router-dom";
import { DemoFunction } from "./Animtion";

interface dataSocialProp {
  socialIcon: string;
  socialTitle: string;
  socialLink: string;
}

export default function Footer() {
  const dataSocial: dataSocialProp[] = [
    { socialIcon: insta, socialTitle: "_rikesh_sherpa", socialLink: "https://www.instagram.com/_rikesh_sherpa/" },
    { socialIcon: github, socialTitle: "derikesh", socialLink: "https://github.com/derikesh" },
    { socialIcon: linked, socialTitle: "Rikesh Sherpa", socialLink: "https://www.linkedin.com/in/rikesh-sherpa-4278a3223/" },
    { socialIcon: mail, socialTitle: "rikeshsherpa1@gmail.com", socialLink: 'mailto:rikeshsherpa1@gmail.com' },
  ];

  const headingStyle = {
    textAlign: 'center',
    fontSize: { lg: '64px', md: '55px', sm: '48px', base: '38px' },
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    background: 'linear-gradient(90deg, #6dcbdb 0%, #ffffff 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }

  const ScrollToTopLink = ({ to, children }: any) => {
    const handleClick = () => {
      window.scrollTo(0, 0);
    };

    return (
      <Link to={to} onClick={handleClick}>
        {children}
      </Link>
    );
  };

  return (
    <Box 
      py={{ lg: "60px", base: "40px" }}
      width="100%"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #6dcbdb, transparent)',
      }}
    >
      <DemoFunction>
        <Flex 
      bg="rgba(18, 18, 18, 0.95)" 

          direction="column" 
          gap={{ md: 30, base: 50 }}
          height={{ xl: '500px', md: '100%' }}
          maxW="1360px"
          mx={{ xl: 'none', lg: '50px', sm: '30px', base: '20px' }}
          marginX={{ lg: "auto", base: "10px" }}
          borderRadius="20px"
          border="3px solid rgba(109, 203, 219, 0.2)"
          padding={{ lg: '40px', md: '30px', base: '10px' }}
          py={{ lg: '20px', base: '90px' }}
          className="footer-wrap"
          // bg="rgba(37, 37, 37, 0.3)"
          backdropFilter="blur(10px)"
          boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        >
          <Heading py={{ lg: 10 }} sx={headingStyle}>FIND ME IN</Heading>
          
          <Flex 
            gap={{ lg: '', md: '80px', base: '60px' }}
            direction={{ lg: 'row', md: 'column', base: 'column' }}
            px={10}
            width="100%"
            justifyContent="space-around"
            className="footer_info"
          >
            <Flex 
              gap={10}
              borderRight={{ lg: '3px solid rgba(109, 203, 219, 0.2)', md: 'unset' }}
              width={{ lg: '50%', md: '100%', base: '100%' }}
              direction="column"
              alignItems={{ lg: 'unset', md: 'center' }}
              className="socials"
            >
              {dataSocial.map((item, index) => (
                <Flex 
                  key={index}
                  alignItems="center"
                  gap={6}
                  _hover={{
                    transform: 'translateX(10px)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Image 
                    width="25px"
                    objectFit="cover"
                    src={item.socialIcon}
                    filter="brightness(0) invert(1)"
                    _hover={{
                      filter: 'brightness(0) invert(1) sepia(100%) saturate(1000%) hue-rotate(170deg)',
                    }}
                  />
                  <Link target="_blank" to={item.socialLink}>
                    <Text 
                      fontSize={{ lg: "18px", sm: "16px", base: "16px" }}
                      _hover={{
                        color: '#6dcbdb',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {item.socialTitle}
                    </Text>
                  </Link>
                </Flex>
              ))}
            </Flex>

            <Flex 
              gap={10}
              width={{ lg: '50%', md: '100%', base: '100%' }}
              alignItems={{ lg: 'flex-end', md: 'center' }}
              justifyContent="center"
              direction="column"
              className="links"
            >
              <ScrollToTopLink to="/about">
                <Text 
                  borderBottom="2px solid rgba(109, 203, 219, 0.2)"
                  _hover={{
                    borderBottom: "2px solid #6dcbdb",
                    color: '#6dcbdb',
                    transition: 'all 0.3s ease',
                  }}
                >
                  View About
                </Text>
              </ScrollToTopLink>
              <ScrollToTopLink to="/figma">
                <Text 
                  borderBottom="2px solid rgba(109, 203, 219, 0.2)"
                  _hover={{
                    borderBottom: "2px solid #6dcbdb",
                    color: '#6dcbdb',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Visit Figma Design
                </Text>
              </ScrollToTopLink>
              {/* <Box display={{ md: "block", base: "none" }}>
                <ScrollToTopLink to="/source-code">
                  <Text 
                    borderBottom="2px solid rgba(109, 203, 219, 0.2)"
                    _hover={{
                      borderBottom: "2px solid #6dcbdb",
                      color: '#6dcbdb',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Get Source Code
                  </Text>
                </ScrollToTopLink>
              </Box> */}
            </Flex>
          </Flex>
        </Flex>
      </DemoFunction>
    </Box>
  );
}
