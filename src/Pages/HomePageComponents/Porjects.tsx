import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import Header from "./Component/Header";
import { Link } from "react-router-dom";
import { dataTechProp } from "../HomePageComponents/Expertise";
import SingleProjects from "./SingleProjects";
import { useFirebase } from "../../firebase/Firebase";
import { useEffect, useState } from "react";
import LoadingGrid from "./LoadingGrid";

export default function Projects() {
  const [dataW, setDataW] = useState<Array<object> | null>(null);

  const [dataWorks, setDataWorks] = useState<any | null>(null);

  const [webData, setwebData] = useState<boolean>(true);

  const firebase = useFirebase();

  // demo works
  useEffect(() => {
    if (webData) {
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
  }, [webData]);

  useEffect(() => {
    if (dataW) {
      dataW.forEach((item: any) => {
        const dataObject = item.data().projectCollection;
        setDataWorks(dataObject);
      });
    }
  }, [dataW]);

  return (
    <>
      <Box py={20} className="projects_wrap" marginLeft="auto">
        <Header sectionTitle="Projects" key={12} />
        <Box py={24} className="wrap_single_projects">
          <Flex justifyContent="flex-end" gap={4} marginBottom={4}>
            <Button
              paddingX={5}
              py={2}
              _hover={{ backgroundColor: "blue.700" }}
              onClick={() => {
                setwebData(true);
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
                lg: "repeat(3, 1fr)",
              }}
              gap={{ sm: 8, base: 10 }}
            >

              {dataWorks &&
                Object.keys(dataWorks).slice(0,6).map((item: any, index: number) => (
                    <SingleProjects webData={webData} key={index} projectData={dataWorks[item]} />
                ))}

            </Grid>
          ) : (
            <Flex gap={7} className="grid_loading" width={"100%"}>
              <LoadingGrid />
              <LoadingGrid />
              <LoadingGrid />
            </Flex>
          )}
        </Box>
        <Box py={10} textAlign="center">
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
