//Import Chakra UI provider to make it works
import { ChakraProvider } from '@chakra-ui/react'
//Import CSS Global: for local impact use home.modules.css
import "../styles/globals.css";
//Import layout defined in layout file in components folder
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <>
     <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
  </>
  )
}

export default MyApp
