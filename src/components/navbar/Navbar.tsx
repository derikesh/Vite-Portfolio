import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";


// icon
import burger from "../../assets/images/icons/burger.svg";

function Navbar() {
  // state for navitem
  const [navitem, setNavitem] = useState<boolean>(false);

  // status sticky
  const [status, setStatus] = useState<boolean>(false);

  

  // state to change logo
  const [logo, setLogo] = useState("RIKESH");

  // data for Navitems
  const DataNav = [
    {
      navTitle: "Home",
      navPath: "/",
      navLogo: "Rikesh",
    },
    {
      navTitle: "About",
      navPath: "/about",
      navLogo: "About",
    },
    {
      navTitle: "Webworks",
      navPath: "/webworks",
      navLogo: "Webworks",
    },
    {
      navTitle: "Figma",
      navPath: "/figma",
      navLogo: "Figma",
    },
   
  ];

  // function to set display
  const handelNavItem = () => {
    setNavitem(!navitem);
  };

  const hideMenu = (navlogo: string) => {

    window.scrollTo(0, 0);


    setLogo(navlogo);

    if (window.innerWidth <= 768) {
      setNavitem(false);
    }
  };

  // to handle nav toggle


  useEffect(() => {

    const handleWidth = () => {
      if (window.innerWidth <= 768) {
        setNavitem(false);
      } else {
        setNavitem(true);
      }
    };

    handleWidth();

    window.addEventListener("resize", handleWidth);

    // cleaning up any event
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  // for sticky navbar
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 180) {
        setStatus(true);
      }else if(window.scrollY < 180){
      setStatus(false);
      } 
    });
  }, [status]);
  return (
    <>
     
     { status ? (
      <Box h={10 + "px"} >
      </Box>
     ) : (
      <Box h={0+"px"} >
      </Box>
     )} 

      <Box
        className={`NavBar_wrap ${status ? "sticky" : ""}`}
        w={{ xl: "100%", base: "90%" }}
        py={ status ? 2 : 4}
        px={ status ? 4 : 0}
        m={"auto"}      
        >

        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          pb={ status ? "" : { md: "11px", sm: "16px", base: "16px" }}
          borderBottom={ status ? "" : "1px solid #DFDFDF"}
          px={ status ? {md:10,sm:0,base:0} : '' }
        >
          <Link
            onClick={() => {
              window.scroll(0,0)
              setLogo("Rikesh");
            }}
            to={"/"}
          >
            <Heading
              as={"h5"}
              fontSize={{ base: "20px", md: "22px", lg: "24px" }}
              textTransform={"uppercase"}
            >
              {logo}
            </Heading>
          </Link>

          {/* navitem right */}
          <Box position={{ lg: "relative", md: "unset" }}>
            {/* burger item */}
            <Box className="burger_Curseo" onClick={handelNavItem}>
              <Image width={7} src={burger} />
            </Box>
            {/* mobile item  */}
            <Box
              className="item_mob "
              display={navitem ? "block" : "none"}
              position={{ md: "relative", sm: "absolute", base: "absolute" }}
              left={0}
              w={"100%"}
              top={{ md: 0, sm: "58px", base: "60px" }}
              padding={{ md: "0px 0px", base: "10px 20px" }}
              bg={{base:"rgba(51, 51, 51, 0.92)",md:"none"}}
              zIndex={99}
            >
              <Flex
                sx={{
                  flexDirection: { md: "row", sm: "column", base: "column" },
                }}
                gap={10}
                textTransform={"uppercase"}
                fontSize={{ lg: "18px", sm: "16px" }}
              >
                {DataNav?.map((item, i) => (
                  <NavLink
                    key={i}
                    onClick={() => hideMenu(item.navLogo)}
                    to={item.navPath}
                  >
                    {item.navTitle}
                  </NavLink>
                ))}
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
      
    </>
  );
}

export default Navbar;
