import React from "react";

// Import CHAKRA tools
import { Text } from "@chakra-ui/react";

const BannerXS = ({ title }) => {
  return (
    <Text
      textAlign="center"
      className="banner-adv-xs"
      fontSize={["30px", "60px", "120px"]}
      textTransform="uppercase"
      fontWeight="900"
      pb={2}
      mb={2}
    >
      {title}
    </Text>
  );
};

export default BannerXS;
