import React from "react";

//Import image from React
import Image from "next/image";
//Import link from React
import Link from "next/link";

//Import css for Styles components
import styles from "../../styles/Home.module.css";

// Import CHAKRA tools
import { Box, Button, Stack, StylesProvider, VStack } from "@chakra-ui/react";

//Components Reusable
const ProductBanner = ({ linkName, buttonText, imageUrl }) => (
  <VStack>
    <Image
      src={imageUrl}
      width={500}
      height={800}
      alt="Tsuki Brand Collection Image"
    />
    <Box>
      <Button
        bg="#ffff"
        borderRadius="0"
        border="2px solid #f4e0ea"
        textTransform="uppercase"
        className="main-text-font"
        fontWeight="400"
        color="#f4e0ea"
        _hover={{
          background: "#f4e0ea",
          color: "#000000",
        }}
      >
        <Link href={linkName}>
          <a className={styles.menuLinkButtonText}>{buttonText}</a>
        </Link>
      </Button>
    </Box>
  </VStack>
);

export default function Collection() {
  return (
    <>
      <Stack
        direction={["column", "row"]}
        spacing={10}
        justifyContent="center"
        alignItems="center"
        mx={2}
      >
        <Box>
          <ProductBanner
            imageUrl="https://cdn.shopify.com/s/files/1/2321/0267/products/meltedjoggersah1_900x.jpg?v=1652183842"
            buttonText="Shop Melted Sweatshirt"
            linkName="#"
          />
        </Box>
        <Box>
          <ProductBanner
            imageUrl="https://cdn.shopify.com/s/files/1/2321/0267/products/meltedjoggersa1_900x.jpg?v=1652183842"
            buttonText="Shop Melted Sweatpants"
            linkName="#"
          />
        </Box>
        <Box>
          <ProductBanner
            imageUrl="https://cdn.shopify.com/s/files/1/2321/0267/products/meltedtotea2copy_900x.jpg?v=1652110249"
            buttonText="Shop Melted Tote"
            linkName="#"
          />
        </Box>
      </Stack>
    </>
  );
}
