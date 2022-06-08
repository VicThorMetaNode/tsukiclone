//Import image from React
import Image from "next/image";
//Import Next special Link
import NextLink from "next/link";

import { useRouter } from 'next/router'

//Import product DB
// import Product from "../../Backend/models/Product";
// import { dbConnect } from "../../utilities/Database/db";
import Product from "../../utilities/Sales Collection/mischiefProductData";

//Import Product Not Found reusable component
import { NotFoundProduct } from "../../utilities/const/NotFoundProduct";

//import Icons from React-icons NPM: notice, we use Icon tool from Chakra ui an mention react icon as {props} :see below
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { TiSocialPinterest } from "react-icons/ti";



import Layout from "../../components/Layout";

// Import CHAKRA tools
import {
  Box,
  Text,
  Container,
  Button,
  Icon,
  Link,
  Stack,
  VStack,
  HStack,
  Divider,
  FormControl,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import mischiefProductData from "../../utilities/Sales Collection/mischiefProductData";

export default function ProductDetails() {
//  const { product } = props;
 const router = useRouter();
 const { slug } = router.query;

 const product = mischiefProductData.products.find((a) => a.slug === slug);

  //if product not found = error message
  if (!product) {
    return <NotFoundProduct />;
  }
  return (
    <>
      <Layout title={product.name} description={product.description}>
        <Box>
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
        </Box>
        <Stack direction={["column", "row"]}>
          <Box>
            <Image
              src={product.imageUrl}
              width={800}
              height={860}
              alt="Tsuki Brand Collection Image Sales"
            />
          </Box>
          <Box>
            <VStack mt={10} justifyContent="center" alignItems="left" ml="4">
              <Box>
                <Text
                  className="main-text-font"
                  fontWeight="600"
                  fontSize={["25px", "35px", "42px"]}
                >
                  {product.name}
                </Text>
              </Box>
              <Box>
                <HStack gap={4}>
                  <Box>
                    <Text
                      textTransform="uppercase"
                      className="main-text-font"
                      fontWeight="400"
                      fontSize={["17px", "25px", "30px"]}
                    >
                      ${product.newPrice}USD
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      textTransform="uppercase"
                      textDecoration="line-through"
                      className="main-text-font"
                      fontWeight="100"
                      fontSize={["15px", "20px", "25px"]}
                      color="#5f5f5f71"
                    >
                      ${product.oldPrice}USD
                    </Text>
                  </Box>
                </HStack>
              </Box>
              <Text
                className="text-font-sans"
                fontWeight="400"
                fontSize={["15px"]}
              >
                or 4 interest-free payments of $14 bi-weekly
              </Text>
              <Box>
                <FormControl>
                  <FormLabel
                    htmlFor="size"
                    className="main-text-font"
                    fontWeight="600"
                  >
                    Size
                  </FormLabel>
                  <Select id="size" placeholder="XXS" borderRadius="0">
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel htmlFor="amount"></FormLabel>
                  <NumberInput max={10} min={1}>
                    <NumberInputField
                      id="amount"
                      placeholder="1"
                      borderRadius="0"
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </Box>
              <Box>
                <Button
                  bg="rgba(247, 193, 220, 0.801)"
                  borderRadius="0"
                  border="2px solid #f4e0ea"
                  textTransform="uppercase"
                  className="main-text-font"
                  fontWeight="600"
                  color="#ffffff"
                  p={4}
                  _hover={{
                    background: "#f7c1dcfa",
                    color: "#ffffff",
                  }}
                  mt={4}
                  mb={2}
                >
                  Add to Cart
                </Button>
              </Box>
              <Box>
                <Container
                  my={6}
                  className="text-font-description"
                  fontWeight="400"
                  fontSize={["15px", "17px", "20px"]}
                >
                  {product.description}
                </Container>
              </Box>
              <Divider />
              <HStack>
                <Box my={6}>
                  <HStack mx={[2, 4, 6]}>
                    <Icon as={FiFacebook} w={[4, 4, 6]} h={[4, 4, 6]} m={2} />
                    <Text fontWeight="600">share</Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack mx={[2, 4, 6]}>
                    <Icon as={FiTwitter} w={[4, 4, 6]} h={[4, 4, 6]} m={2} />
                    <Text fontWeight="600">tweet</Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack mx={[2, 4, 6]}>
                    <Icon
                      as={TiSocialPinterest}
                      w={[4, 4, 6]}
                      h={[4, 4, 6]}
                      m={2}
                    />
                    <Text fontWeight="600">pin it</Text>
                  </HStack>
                </Box>
              </HStack>
            </VStack>
          </Box>
        </Stack>
      </Layout>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const { slug } = params;

//   await dbConnect();
//   const product = await Product.findOne({ slug }).lean();
//   return {
//     props: {
//       product: db.convertDocToObj(product),
//     },
//   };
// }