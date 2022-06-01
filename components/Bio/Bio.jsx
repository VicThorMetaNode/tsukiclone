import React from "react";

//Import image from React
import Image from "next/image";
//Import link from React
import Link from "next/link";

// Import CHAKRA tools
import { Box, Stack, VStack, Container, Text } from "@chakra-ui/react";

//Reusable component
const BioBanner = ({ bioTitle, bioText, imageUrl }) => (
  <Stack
    direction={["column", "row"]}
    justifyContent="right"
    alignItems="center"
    bg="#f4e0ea"
    my={10}
    spacing={[10, 30, 40]}
  >
    <Box justifyContent="left" alignItems="center">
      <VStack px={2}>
        <Box>
          <Text className="main-text-font" fontSize="27.2px" fontWeight="600">
            {bioTitle}
          </Text>
        </Box>
        <Box>
          <Container
            className="main-text-font"
            fontSize="16px"
            fontWeight="400"
          >
            {bioText}
          </Container>
        </Box>
      </VStack>
    </Box>
    <Box>
      <Image
        objectFit="cover"
        src={imageUrl}
        width={900}
        height={800}
        alt="Tsuki Brand Collection Image"
      />
    </Box>
  </Stack>
);

export default function Bio() {
  return (
    <>
      <BioBanner
        imageUrl="https://cdn.shopify.com/s/files/1/2321/0267/files/Screen_Shot_2022-05-12_at_8.09.36_AM_2048x.png?v=1652353790"
        bioTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        bioText='"Venenatis lectus magna fringilla urna. Lacus vestibulum sed arcu non. Nulla facilisi cras fermentum odio eu feugiat pretium. Nulla aliquet enim tortor at auctor urna nunc id. Semper viverra nam libero justo laoreet sit amet cursus. Augue neque gravida in fermentum et sollicitudin ac. Vestibulum sed arcu non odio euismod lacinia at quis risus. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Sit amet dictum sit amet justo donec enim diam vulputate. Tortor condimentum lacinia quis vel eros. Ut ornare lectus sit amet est placerat. Nam at lectus urna duis convallis convallis tellus id interdum."'
      />
    </>
  );
}
