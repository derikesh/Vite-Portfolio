import { Box, Text } from "@chakra-ui/react";
import HeadingPage from "./WebWorkComponent/HeadingPage";
import SingleWork from "./WebWorkComponent/SingleWork";
import { useEffect, useState } from "react";
import { useFirebase } from "../firebase/Firebase";


// links 

function WebWorks() {
  const [dataW, setDataW] = useState<Array<object> | null>(null);

  const [dataWorks, setDataWorks] = useState<any | null>(null);

  const firebase = useFirebase();

  // demo works
  useEffect(() => {
    firebase
      .getWebWorksData?.()
      .then((data) => {
        setDataW(data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      <Box className="gradient_bg">
        <HeadingPage
          color="rgb(248, 165, 6)"
          pageTitle="MY JOURNEY AS"
          pageMain="WEB DEVELOPER"
          key={"heading"}
        />

        <Box px={{ sm: 0, base: "15px" }} className="webWork_wrap">
          {dataWorks &&
            Object.keys(dataWorks).map((item: any, index) => {
              const workDatas = dataWorks[item];
              return <SingleWork key={index} title={workDatas.title} link={workDatas.link} description={workDatas.description} techStack={workDatas.techStack} imageURL={workDatas.imageURL} />;
            })}
        </Box>
      </Box>
    </>
  );
}

export default WebWorks;
