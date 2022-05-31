//Import image from React
import Image from "next/image";

import { Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box mb={10}>
        <Image
          objectFit="cover"
          src="https://cdn.shopify.com/s/files/1/2321/0267/files/Screen_Shot_2022-05-12_at_8.09.36_AM_2048x.png?v=1652353790"
          width="400px"
          height="400px"
          layout="responsive"
        />
      </Box>
    </>
  );
};

export default Header;
