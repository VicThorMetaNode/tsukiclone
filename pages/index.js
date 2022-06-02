//We import components from Index.js file in components folder for more readability 
import { Header, Collection, Bio, BannerAdXS, Sale} from '../components/index'

//Import layout defined in layout file in components folder
import Layout from '../components/Layout'


export default function Home() {
  return (
    <>
   <Layout >
    <Header />
    <Collection />
    <Bio />
    <BannerAdXS />
    <Sale />
    </Layout>
    </>
  
  )
}
