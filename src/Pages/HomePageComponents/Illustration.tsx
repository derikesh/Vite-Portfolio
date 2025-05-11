import { Box, Center, Image, Text } from "@chakra-ui/react";
import Header from "./Component/Header";
import { DemoFunction } from "../../components/Animtion";
import IllImages from "./Component/IllImages";

function Illustration() {
  return (
    <>
      <Box className="illustration_wrap" mb={60}>
        <Box className="header_section">
          <Header subTag={false} key={2} sectionTitle="Old illustrations" />
          <Box display={{md:"none",base:"block"}} >
          <Center  >( click on small images )</Center>
          </Box>
        </Box>

        <Box my={20}>
          <DemoFunction>
            <IllImages />
          </DemoFunction>
        </Box>
      </Box>
    </>
  );
}

export default Illustration;
