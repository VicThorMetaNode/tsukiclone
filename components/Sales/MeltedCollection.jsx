// ------------ SALES PRODUCTS MAPPING COMPONENT: every product on sale -------------
import React from "react";

//Import Data product on sales
import mischiefProductData from "../../utilities/Sales Collection/mischiefProductData";
//Import image from React
import Image from "next/image";

// Import CHAKRA tools
import { Box, Text, VStack, HStack, Divider, Flex } from "@chakra-ui/react";

//Components Reusable
const SaleUnit = ({ titleCorner }) => (
  <Box bg="#000" color="#FFFF" w="fit-content" p={2}>
    <Text textTransform="uppercase" className="main-text-font" fontWeight="600">
      {titleCorner}
    </Text>
  </Box>
);

const MeltedCollection = () => {
  return (
    <>
      {mischiefProductData.products.map((product) => (
        <Box w={300} h={500} border="1.5px solid #000" key={product.slug}>
          <SaleUnit titleCorner="sale" />
          <VStack>
            <Image
              src={product.imageUrl}
              width={400}
              height={460}
              alt="Tsuki Brand Collection Image Sales"
            />
            <Divider borderColor="#000" />
            <Box m={2}>
              <VStack>
                <Box>
                  <Text>{product.name}</Text>
                </Box>
                <Box>
                  <HStack>
                    <Box>
                      <Text
                        textTransform="uppercase"
                        textDecoration="line-through"
                      >
                        ${product.oldPrice}USD
                      </Text>
                    </Box>
                    <Box>
                      <Text textTransform="uppercase">
                        ${product.newPrice}USD
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Box>
      ))}
    </>
  );
};

export default MeltedCollection;
