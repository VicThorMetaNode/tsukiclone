// ------------ HEADER -------------

//Import image from special built-in Nextjs module for better management
import Image from "next/image";
//Import link from special built-in Nextjs module for better management

import Link from "next/link";

// Import CHAKRA tools
import { Box, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box mb={10} position="relative">
        <Image
          objectFit="cover"
          src="https://cdn.shopify.com/s/files/1/2321/0267/files/Screen_Shot_2022-05-12_at_8.09.36_AM_2048x.png?v=1652353790"
          width="400px"
          height="400px"
          layout="responsive"
        />
        <Box position="absolute" top="50%" right={["35%", "43%", "45%"]}>
          <Button
            boxSize={["130px", "150px", "370px"]}
            fontSize={["20px", "50px", "62px"]}
            bg="#f4e0ea"
            borderRadius="5px"
            textTransform="uppercase"
            className="main-text-font"
            fontWeight="900"
            color="#000000"
            _hover={{
              background: "#f4e0ea",
              color: "#DB91EF",
            }}
          >
            <Link href="#">
              <a className="header-button-shop">Shop Now</a>
            </Link>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Header;
