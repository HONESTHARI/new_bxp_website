import '@/styles/globals.css'
import Footer1 from './components/footer'
import Navbar from './components/navbar'


export default function App({ Component, pageProps }) {
  return (
  <>


<Navbar/>


  <Component {...pageProps} />
  <Footer1/>
  </>
  )
}
