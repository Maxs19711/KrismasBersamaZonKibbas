import { Box, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import fImage from "../assets/posterKrismas.jpg"; // Import the image

const photoHeader = () => {
  return (
    <Box
      position="relative"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      backgroundSize="cover"
      height="100vh"
      margin={1}
    >
      <Image src={fImage} alt="Christmas Poster" />
    </Box>
  );
};

export default photoHeader;
