import { Box, Flex, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

export default function () {
  return (
                <Box width={{ sm: "100%", base: "90%" }} margin={"auto"} className="single_projects" >
                  <Box position={"relative"} className="pro_image_sec">
                    <Box height={["200px", "300px"]} width="100%" bg={"#252525"} ></Box>
                  </Box>
                  <Box px={10} py={["20px", "35px"]} bg={"#201F23"} className="pro_text_section" >
                    <Flex gap={4} color={"#E9E9E9"} direction={"column"}>
                      <Box height={"35px"} width={"80%"} bg={"#252525"}></Box>
                      <Text height={"20px"} width={"40%"} bg={"#252525"}></Text>
                    </Flex>
                  </Box>
                </Box>
  )
}
