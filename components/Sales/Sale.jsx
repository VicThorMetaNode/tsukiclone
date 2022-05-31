import React from "react";

//Import image from React
import Image from "next/image";
//Import link from React
import Link from "next/link";

// Import CHAKRA tools
import { Box, Text, VStack, HStack, Flex, Divider } from "@chakra-ui/react";

//Components Reusable
const SaleUnit = ({
  titleCorner,
  productName,
  oldPrice,
  newPrice,
  linkName,
  imageUrl,
}) => (
  <Box w={300} h={500} m={1} border="1px solid #000">
    <Link href={linkName}>
      <a>
        <Box bg="#000" color="#FFFF" w="fit-content" p={2}>
          <Text
            textTransform="uppercase"
            className="main-text-font"
            fontWeight="600"
          >
            {titleCorner}
          </Text>
        </Box>
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
                <Text>{productName}</Text>
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
      </a>
    </Link>
  </Box>
);

export default function Sale() {
  return (
    <>
      <Flex mb="10rem">
        <Box>
          <SaleUnit
            imageUrl="https://cdn.shopify.com/s/files/1/2321/0267/products/tmcatbuttonup_900x.jpg?v=1638457015"
            linkName="/"
            titleCorner="sale"
            productName="Mischief Clone Button Up"
            oldPrice="77.00"
            newPrice="57.75"
          />
        </Box>
        <Box>
          <SaleUnit
            imageUrl="https://cdn.shopify.com/s/files/1/2321/0267/products/tsblacktshirt_900x.jpg?v=1638455978"
            linkName="/"
            titleCorner="sale"
            productName="Mischief Clone Pocket T-Shirt"
            oldPrice="56.00"
            newPrice="42.00"
          />
        </Box>
        <Box>
          <SaleUnit
            imageUrl="https://cdn.shopify.com/s/files/1/2321/0267/products/tmwhitetshirt_2048x.jpg?v=1638455590"
            linkName="/"
            titleCorner="sale"
            productName="Mischief Clone Cat T-Shirt"
            oldPrice="56.00"
            newPrice="42.00"
          />
        </Box>
        <Box>
          <SaleUnit
            imageUrl="https://cdn.shopify.com/s/files/1/2321/0267/products/tmbluetshirt_2048x.jpg?v=1638455767"
            linkName="/"
            titleCorner="sale"
            productName="Mischief Clone Embroidered T-Shirt"
            oldPrice="56.00"
            newPrice="42.00"
          />
        </Box>
        <Box>
          <SaleUnit
            imageUrl="https://cdn.shopify.com/s/files/1/2321/0267/products/tmcorduroypants_900x.jpg?v=1638456234"
            linkName="/"
            titleCorner="sale"
            productName="Mischief Clone Trousers"
            oldPrice="115.00"
            newPrice="86.00"
          />
        </Box>
        <Box>
          <SaleUnit
            imageUrl="https://cdn.shopify.com/s/files/1/2321/0267/products/tmflannel_900x.jpg?v=1638457194"
            linkName="/"
            titleCorner="sale"
            productName="Mischief Clone Flannel Button Up"
            oldPrice="87.00"
            newPrice="65.25"
          />
        </Box>
      </Flex>
    </>
  );
}
