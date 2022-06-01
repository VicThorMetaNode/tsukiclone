// ------------ SALES COMPONENT: every product on sale -------------

import React from "react";

// Import CHAKRA tools
import { Flex } from "@chakra-ui/react";

//Import sales products mapping component
import MeltedCollection from "./MeltedCollection";

export default function Sale() {
  return (
    <>
      <Flex
        mb="10rem"
        flexWrap="wrap"
        justifyContent="flex-start"
        alignItems="center"
        cursor="pointer"
        m={4}
      >
        <MeltedCollection />
      </Flex>
    </>
  );
}
