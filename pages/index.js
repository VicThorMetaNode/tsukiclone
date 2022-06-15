//We import components from Index.js file in components folder for more readability
import {
  Header,
  Collection,
  Bio,
  BannerAdXS,
  MeltedCollection,
} from "../components/index";

// Import CHAKRA tools
import { Flex } from "@chakra-ui/react";

//Import layout defined in layout file in components folder
import Layout from "../components/Layout";

// Import database from backend
import db from "../backend/Database/db";
//Import Product Models
import SalesProducts from "../backend/models/SalesProduct";

export default function Home(props) {
  const { products } = props;
  return (
    <>
      <Layout>
        <Header />
        <Collection />
        <Bio />
        <BannerAdXS />
        {/*----- SALES PRODUCTS SECTION STARTS ----------*/}
        <Flex
          mb="10rem"
          flexWrap="wrap"
          justifyContent="flex-start"
          alignItems="center"
          cursor="pointer"
          m={4}
        >
         {(products || []).map((product) => (
            <MeltedCollection product={product} key={product._id} />
          ))}
        </Flex>
        {/*----- SALES PRODUCTS SECTION ENDS ----------*/}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await SalesProducts.find({}).lean();
  // await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
