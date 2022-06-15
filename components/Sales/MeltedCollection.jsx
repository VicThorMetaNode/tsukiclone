// ------------ SALES PRODUCTS MAPPING COMPONENT: every product on sale -------------

//Import image from React
import Image from "next/image";
//Import Next special Link
import NextLink from "next/link";

// Import CHAKRA tools
import { Box, Text, VStack, HStack, Divider } from "@chakra-ui/react";

//Components Reusable
const SaleUnit = ({ titleCorner }) => (
  <Box bg="#000" color="#FFFF" w="fit-content" p={2} m={0}>
    <Text textTransform="uppercase" className="main-text-font" fontWeight="600">
      {titleCorner}
    </Text>
  </Box>
);

const MeltedCollection = ({
  product: { slug, name, imageUrl, oldPrice, newPrice },
}) => {
  return (
    <>
      <NextLink href={`/salesproduct/${slug}`} passHref>
        <Box w={300} h={500} border="1.5px solid #000" key={name}>
          <SaleUnit titleCorner="sale" />
          <VStack>
            <Image
              src={imageUrl}
              width={400}
              height={460}
              alt="Tsuki Brand Collection Image Sales"
            />
            <Divider borderColor="#000" />
            <Box m={2}>
              <VStack>
                <Box>
                  <Text>{name}</Text>
                </Box>
                <Box>
                  <HStack>
                    <Box>
                      <Text
                        textTransform="uppercase"
                        textDecoration="line-through"
                      >
                        ${oldPrice}USD
                      </Text>
                    </Box>
                    <Box>
                      <Text textTransform="uppercase">${newPrice}USD</Text>
                    </Box>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </NextLink>
    </>
  );
};

export default MeltedCollection;
