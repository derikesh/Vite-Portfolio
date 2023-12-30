import {
  Box,
  Flex,
  Heading,
  Image,
 
} from "@chakra-ui/react";
import {  Link, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// icon
import burger from "../../assets/images/icons/burger.svg"

function Navbar() {
  // state for navitem
  const [navitem, setNavitem] = useState<boolean>(false);

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
      navTitle: "Webworks",
      navPath: "/webworks",
      navLogo: "Webworks",
    },

    {
      navTitle: "Figma",
      navPath: "/figma",
      navLogo: "Figma",
    },

    
    {
      navTitle: "CV",
      navPath: "/resume",
      navLogo: "Resume",
    }
   
  ];

  // function to set display
  const handelNavItem = () => {
    setNavitem(!navitem);
  };

  const hideMenu = (navlogo: string) => {
    setLogo(navlogo);

    if (window.innerWidth <= 768) {
      setNavitem(false);
    }
  };

  // to handel nav toogle
  useEffect(() => {
    const handelWidth = () => {
      if (window.innerWidth <= 768) {
        setNavitem(false);
      } else {
        setNavitem(true);
      }
    };

    handelWidth();

    window.addEventListener("resize", handelWidth);

    // cleaning up any event
    return () => {
      window.removeEventListener("resize", handelWidth);
    };
  }, []);



  return (
    <>
      <Box
        className={`NavBar_wrap ${navitem ? 'sticky' : ''}`}
        w={{ xl: "100%", base: "90%" }}
        py={4}
        m={"auto"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          pb={{ md: "11px", sm: "16px", base: "16px" }}
          borderBottom={"1px solid #DFDFDF"}
        >
          <Link onClick={ ()=>{ setLogo("Rikesh") } } to={"/"} >
          <Heading
            as={"h5"}
            fontSize={{ base: "20px", md: "22px", lg: "24px" }}
            textTransform={"uppercase"}
          >
            {logo}
          </Heading></Link>

          {/* navitem right */}
          <Box position={{ lg: "relative", md: "unset" }}>
            {/* burger item */}
            <Box className="burger_Curseo" onClick={handelNavItem} >
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
              bg={"#1b1b1b"}
              zIndex={99}
            >
              <Flex
                sx={{
                  flexDirection: { md: "row", sm: "column", base: "column" },
                  // display : { md:'block',sm:'none' }
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

      <Box>
        <Outlet/>
      </Box>
    </>
  );
}

export default Navbar;
