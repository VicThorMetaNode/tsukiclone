import React from "react";
//Import special built-in link management
import NextLink from "next/link";

// Import CHAKRA tools
import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Icon,
  Link,
} from "@chakra-ui/react";

//import Icons from React-icons NPM: notice, we use Icon tool from Chakra ui an mention react icon as {props} :see below
import { FcMenu } from "react-icons/fc";
import { BiSearchAlt, BiUser, BiPackage } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <Flex p="2" borderBottom="1px" borderColor="black">
        <Box>
          <NextLink href="/">
            <Link>
              <Icon as={BiSearchAlt} w={[6, 8, 14]} h={[6, 8, 14]} m={2} />
            </Link>
          </NextLink>
        </Box>
        <Box>
          <NextLink href="/">
            <Link>
              <Icon as={BiUser} w={[6, 8, 14]} h={[6, 8, 14]} m={2} />
            </Link>
          </NextLink>
        </Box>
        <Spacer />
        <Box>
          <NextLink href="/" paddingLeft="2">
            <Link _hover={{ textDecoration: "none" }}>
              <Text
                fontWeight="900"
                fontSize={["30px", "50px", "72px"]}
                textTransform="uppercase"
                className="navbar-title"
                color="black"
              >
                Tsuki<span className="navbar-title-span">clone</span>
              </Text>
            </Link>
          </NextLink>
        </Box>
        <Spacer />
        <Box>
          <NextLink href="/">
            <Link>
              <Icon as={BiPackage} w={[6, 8, 14]} h={[6, 8, 14]} m={2} />
            </Link>
          </NextLink>
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FcMenu />}
              m={2}
              w={[7, 8, 14]}
              h={[7, 8, 14]}
              border="2px solid black"
            />
            <MenuList bg="#f4e0ea">
              <Link _hover={{ textDecoration: "none" }} href="/">
                <MenuItem>Home</MenuItem>
              </Link>
              <Link _hover={{ textDecoration: "none" }} href="/">
                <MenuItem>Collection</MenuItem>
              </Link>
              <Link _hover={{ textDecoration: "none" }} href="/">
                <MenuItem>Shop All</MenuItem>
              </Link>

              <Link href="/">
                <MenuItem>Log In</MenuItem>
              </Link>
              <Link href="/">
                <MenuItem>Sign Up</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
