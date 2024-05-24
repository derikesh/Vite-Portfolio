import { useEffect, useState } from "react";
import { useFirebase } from "../firebase/Firebase";
import { FirebaseProp } from "../firebase/Firebase";
import HeadingPage from "./WebWorkComponent/HeadingPage";
import { Box, Heading } from "@chakra-ui/react";
import SingleWork from "./WebWorkComponent/SingleWork";

function FigmaWorks() {
  const [dataW, setDataW] = useState<Array<object> | null>(null);

  const [dataWorks, setDataWorks] = useState<any | null>(null);

  const firebase = useFirebase();

  // demo works
  useEffect(() => {
    firebase
      .getFigmaWorksData?.()
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
      <HeadingPage
        color="#2CCA91"
        pageTitle="Some of My "
        pageMain="Figma Works"
        key={"figma"}
      />

      <Box mt={{lg:28,sm:20,base:20}} px={{ sm: 0, base: "15px" }} className="webWork_wrap">
       { dataWorks ?  dataWorks &&
          Object.keys(dataWorks).map((item: any, index) => {
            const workDatas = dataWorks[item];
            return (
              <SingleWork
                key={index}
                title={workDatas.title}
                link={workDatas.link}
                description={workDatas.description}
                imageURL={workDatas.imageURL}
              />
            );
          }) : "loading....." }
      </Box>
    </>
  );
}

export default FigmaWorks;
