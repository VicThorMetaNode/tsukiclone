import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - TsukiClone` : "TsukiClone"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <Box maxWidth="2780px" m="auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
