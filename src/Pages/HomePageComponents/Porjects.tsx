import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import Header from "./Component/Header";
import { Link } from "react-router-dom";
import SingleProjects from "./SingleProjects";
import { useFirebase } from "../../firebase/Firebase";
import { useEffect, useState } from "react";
import LoadingGrid from "./LoadingGrid";
import { useInView } from "react-intersection-observer";
import { wrap } from "gsap";

export default function Projects() {
  const [dataW, setDataW] = useState<Array<object> | null>(null);

  const [dataWorks, setDataWorks] = useState<any | null>(null);

  const [webData, setwebData] = useState<boolean>(true);

  const { ref , inView , entry } = useInView({
    threshold: 0,
  });

  const firebase = useFirebase();

  // demo works
  useEffect(() => {
    if (webData && inView) {
      firebase
        .getWebWorksData?.()
        .then((data) => {
          setDataW(data.docs);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (webData == false) {
      firebase
        .getFigmaWorksData?.()
        .then((data) => {
          setDataW(data.docs);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [webData,inView]);

  useEffect(() => {
    if (dataW) {
      dataW.forEach((item: any) => {
        const dataObject = item.data().projectCollection;
        setTimeout(()=>{
          setDataWorks(dataObject);
        }, 1000 )
      });
    }
  }, [dataW]);

  return (
    <>
      <Box py={20} className="projects_wrap" marginLeft="auto">
        <Header subTag={false} sectionTitle="Projects" key={12} />
        <Box ref={ref} py={24} className="wrap_single_projects">
          <Flex justifyContent={{sm:'flex-end',base:'flex-start'}} gap={4} marginBottom={14}>
            <Button
              paddingX={5}
              py={3}
              _hover={{ backgroundColor: "blue.700" }}
              onClick={() => {
                setwebData(true);
                setDataWorks(null);
              }}
              border="1px solid white"
              borderRadius="md"
              color="white"
            >
              Webworks
            </Button>

            <Button
              paddingX={5}
              py={2}
              _hover={{ backgroundColor: "green.700" }}
              onClick={() => {
                setwebData(false);
                setDataWorks(null);
              }}
              border="1px solid white"
              borderRadius="md"
              color="white"
            >
              Figma Design
            </Button>
          </Flex>

          {dataWorks ? (
            <Grid            
              pos={"relative"}
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={{ sm: 10, base: 10 }}
            >

              {dataWorks &&
                Object.keys(dataWorks).slice(0,6).map((item: any, index: number) => (
                    <SingleProjects webData={webData} index={index} key={index} projectData={dataWorks[item]} />
                ))}

            </Grid>
          ) : (
            <Flex gap={10} flexWrap={{sm:'nowrap',base:'wrap'}} className="grid_loading" width={"100%"}>
              <LoadingGrid />
              <LoadingGrid />
            </Flex>
          )}
        </Box>
        <Box py={0} textAlign="center">
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={ webData ? "/webworks" : "/figma"}
          >
            <Button
              bg="transparent"
              border="1px solid white"
              borderRadius="md"
              color="white"
              transition={"0.2s ease-in"}
              width="100%"
              py={4}
              fontSize="xl "
              _hover={{ transform: "scale(1.05)" }}
            >
              Explore More
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

// loading grid
