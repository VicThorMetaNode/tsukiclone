//We import components from Index.js file in components folder for more readability 
import { Header, Collection, Bio, BannerAdXS, Sale } from '../components/index'



export default function Home() {
  return (
    <>
   
    <Header />
    <Collection />
    <Bio />
    <BannerAdXS />
    <Sale />
    </>
  
  )
}
