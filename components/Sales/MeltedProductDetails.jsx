//Import hook from react-dom
import { useParams } from "react-router-dom";
// Import CHAKRA tools
import { Box, Text } from "@chakra-ui/react";

const MeltedProductDetails = () => {
  //define params as function
  const params = useParams();
  //fetch Slug product using params deconstructing
  const { slug } = params;
  return (
    <Box>
      <Text>{slug}</Text>
    </Box>
  );
};

export default MeltedProductDetails;
