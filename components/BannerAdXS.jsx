// ------------ BANNER: advertising price sales  -------------

// Import CHAKRA tools
import { Box, Text } from "@chakra-ui/react";

//Import constance Banner Extra Small for mor reusability
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
