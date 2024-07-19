import { Box, Text } from "@chakra-ui/react";
import SingleWorkHome from "./WebWorkComponent/SingleWorkHome";
import { useEffect, useState } from "react";
import { useFirebase } from "../firebase/Firebase";
import Header from "./HomePageComponents/Component/Header";


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

        <Header subTag={false} sectionTitle="Web Projects" key={"1"}   />
        <Box mt={{lg:28,sm:20,base:20}} px={{ sm: 0, base: "15px" }} className="webWork_wrap">
          { dataWorks ? dataWorks &&
            Object.keys(dataWorks).slice(0,2).map((item: any, index) => {
              const workDatas = dataWorks[item];
              return <SingleWorkHome key={index} title={workDatas.title} link={workDatas.link} description={workDatas.description} techStack={workDatas.techStack} imageURL={workDatas.imageURL} />;
            }) : "loading...."  }
        </Box>
      </Box>
    </>
  );
}

export default WebWorks;
