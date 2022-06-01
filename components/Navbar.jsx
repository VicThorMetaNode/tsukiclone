import React from "react";
//Import special built-in link management
import Link from "next/link";

// Import CHAKRA tools
import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Divider,
  Flex,
  Box,
  Spacer,
  Icon,
} from "@chakra-ui/react";

//import Icons from React-icons NPM: notice, we use Icon tool from Chakra ui an mention react icon as {props} :see below
import { FcMenu } from "react-icons/fc";
import { BiSearchAlt, BiUser, BiPackage } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <Flex p="2" borderBottom="1px" borderColor="black">
        <Box>
          <Link href="/" passHref>
            <a>
              <Icon as={BiSearchAlt} w={[6, 8, 14]} h={[6, 8, 14]} m={2} />
            </a>
          </Link>
        </Box>
        <Box>
          <Link href="/" passHref>
            <a>
              <Icon as={BiUser} w={[6, 8, 14]} h={[6, 8, 14]} m={2} />
            </a>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Link href="/" paddingLeft="2">
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
        </Box>
        <Spacer />
        <Box>
          <Link href="/" passHref>
            <a>
              <Icon as={BiPackage} w={[6, 8, 14]} h={[6, 8, 14]} m={2} />
            </a>
          </Link>
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
              <Link href="/" passHref>
                <MenuItem>Home</MenuItem>
              </Link>
              <Link href="/" passHref>
                <MenuItem>Collection</MenuItem>
              </Link>
              <Link href="/" passHref>
                <MenuItem>Shop All</MenuItem>
              </Link>
              <Divider color="#000" />
              <Link href="/search?purpose=for-rent" passHref>
                <MenuItem>Log In</MenuItem>
              </Link>
              <Link href="/search?purpose=for-rent" passHref>
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
