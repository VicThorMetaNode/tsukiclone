import React from "react";
// Import CHAKRA tools
import { Flex, Text } from "@chakra-ui/react";
//Import image from React
import Image from "next/image";
//Import image for not found
import noresult from "../assets/img/noresult.svg";

export const NotFoundProduct = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        my="10rem"
      >
        <Image alt="no result" src={noresult} />
        <Text fontSize="2xl" marginTop="3">
          Product Not Found
        </Text>
      </Flex>
    </>
  );
};
