import image1 from "../../../assets/images/illustrator/brown_dog.png";
import image2 from "../../../assets/images/illustrator/dogo (1).png";
import image3 from "../../../assets/images/illustrator/panda1-01.png";
import image4 from "../../../assets/images/illustrator/pp.png";
import image6 from "../../../assets/images/illustrator/sriajl-01.png";
import image7 from "../../../assets/images/illustrator/panda3-01.png";
import image9 from "../../../assets/images/illustrator/padna3.png"
import image8 from "../../../assets/images/illustrator/panda4-01-01.png";
import image10 from "../../../assets/images/illustrator/srijal2-01-01.png"

import { useRef, useEffect,useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box, Flex } from "@chakra-ui/layout";

function IllImages() {

  const imageRef = useRef<Array<HTMLElement | null>>([]);



  // data
  const allImages = [
    { imagePath: image1, imageAlt: "Brown Dog" },
    { imagePath: image2, imageAlt: "Dogo (1)" },
    { imagePath: image3, imageAlt: "Panda 1" },
    { imagePath: image4, imageAlt: "PP" },
    { imagePath: image6, imageAlt: "Sriajl" },
    { imagePath: image7, imageAlt: "Panda 3" },
    { imagePath: image10, imageAlt: "Srijal 2"},

    { imagePath: image8, imageAlt: "Panda 4" },
    { imagePath: image9, imageAlt: "Panda 3" },
    
  ];


  const widthImgg = 100/allImages.length;
  

  useEffect(() => {
  const eventClick = (index: number) => {
    
      const element = imageRef.current[index];
      element?.classList.add("imageHover");

  };

  const eventRemove = ( index:number )=>{
    const element = imageRef.current[index];
    element?.classList.remove("imageHover")
  }

  const addListeners = () => {
    imageRef.current.forEach((item, index) => {
      if (item) {

     
        item.addEventListener("mouseenter", () => eventClick(index));
        item.addEventListener("mouseleave",()=>eventRemove( index ));

        item.addEventListener("touchstart",()=> eventClick(index));
        item.addEventListener("touchend",()=> eventRemove(index));


        
      }
    });
  };

  const removeListeners = () => {
    imageRef.current.forEach((item, index) => {
      if (item) {
        item.removeEventListener("mouseenter", () => eventClick(index));
      }
    });
  };

  addListeners();

  return () => {
    removeListeners();
  };
}, []);

  return (
    <>
      <Box className="all_images">
        <Flex>
          {allImages.map((item, index) => (
            <Box
              key={index}
              ref={ (el)=>imageRef.current[index] = el }
              className="single_img_wrap"
              height={{ xl:"700px" ,lg:'600px',md:'500px',sm:'400px',base:'500px' }}  
              transition={'all 0.2s ease'}    
              width={`${widthImgg}%`}        
            >
              <LazyLoadImage                
                className="lazy_img"
                key={index}
                height={"100%"}
                width={"100%"}
                src={item.imagePath}
                alt={item.imageAlt}
                placeholder={<div>loading........</div>}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default IllImages;
