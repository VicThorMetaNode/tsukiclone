// ------------ BANNER: advertising price sales  -------------
import React from "react";

// Import CHAKRA tools
import { Box, Text } from "@chakra-ui/react";

//Import constance Banner Extra Small for mor reusability
import BannerXS from "../utilities/const/bannerXS";

const BannerAdXS = () => {
  return (
    <>
      <Box my={6}>
        <BannerXS title="save 25% off the clone collection" />
      </Box>
    </>
  );
};

export default BannerAdXS;
