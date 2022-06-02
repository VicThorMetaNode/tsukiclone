//Import Chakra UI provider to make it works
import { ChakraProvider } from '@chakra-ui/react'
//Import CSS Global: for local impact use home.modules.css
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
  <>
     <ChakraProvider>
      
          <Component {...pageProps} />
        
      </ChakraProvider>
  </>
  )
}

export default MyApp
